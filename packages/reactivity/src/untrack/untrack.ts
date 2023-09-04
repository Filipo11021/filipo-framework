import type { Context } from '../types';

export function buildUntrack({ context }: { context: Context }) {
	return <Value>(fn: () => Value) => {
		const prevContext = context.getAll();

		context.clear();
		const res = fn();
		context.set(prevContext);

		return res;
	};
}
