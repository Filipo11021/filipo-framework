import type { Context, Subscriber } from '../types';

export function buildContext(): Context {
	let context: Subscriber[] = [];

	return {
		getAll() {
			return context;
		},
		set(newContext) {
			context = newContext;
		},
		clear() {
			context = [];
		},
		push(subscriber) {
			context.push(subscriber);
		},
		pop() {
			context.pop();
		},
		getCurrent() {
			return context[context.length - 1];
		},
		size() {
			return context.length;
		},
	};
}
