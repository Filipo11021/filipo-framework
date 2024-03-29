import type { Context, EffectFn, Subscriber } from '../types';

function cleanup(subscriber: Subscriber) {
	for (const dependency of subscriber.dependencies) {
		dependency.delete(subscriber);
	}

	subscriber.dependencies.clear();
}

export function buildEffect({ context }: { context: Context }): EffectFn {
	return (fn: () => void) => {
		const subscriber: Subscriber = {
			execute() {
				cleanup(subscriber);
				context.push(subscriber);
				fn();
				context.pop();
			},
			dependencies: new Set(),
		};

		subscriber.execute();
	};
}
