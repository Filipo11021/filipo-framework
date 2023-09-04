import type { Context, NewValue, SignalFn, Subscriber } from '../types';

export function buildSignal({ context }: { context: Context }): SignalFn {
	return <Value>(initialValue: Value) => {
		let currentValue = initialValue;
		const subscribers = new Set<Subscriber>();

		function getter() {
			const currentSubscriber = context.getCurrent();

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
	};
}
