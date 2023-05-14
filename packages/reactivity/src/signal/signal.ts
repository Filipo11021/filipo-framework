import { context } from '../shared';

import type { Subscriber } from '../types';

type NewValue<Value> = Value | ((prevValue: Value) => Value);

export function signal<Value>(initialValue: Value) {
	let currentValue = initialValue;
	const subscribers = new Set<Subscriber>();

	function getter() {
		const currentSubscriber = context[context.length - 1];
		if (currentSubscriber) {
			subscribers.add(currentSubscriber);
			currentSubscriber.dependencies.add(subscribers);
		}

		return currentValue;
	}

	function setter(newValue: NewValue<Value>) {
		currentValue =
			newValue instanceof Function ? newValue(currentValue) : newValue;

		[...subscribers].forEach((sub) => sub.execute());
	}

	return [getter, setter] as const;
}
