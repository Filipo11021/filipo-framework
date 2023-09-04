import type { EffectFn, SignalFn } from '../types';

export function buildMemo({
	effect,
	signal,
}: {
	signal: SignalFn;
	effect: EffectFn;
}) {
	return <Value>(fn: () => Value) => {
		const [value, setValue] = signal(fn());
		let skip = true;

		effect(() => {
			if (skip) return (skip = false);
			setValue(fn());
		});

		return value;
	};
}
