import { describe, expect, test } from 'vitest';

import { buildContext } from './context/context';
import { buildEffect } from './effect/effect';
import { buildSignal } from './signal/signal';

const context = buildContext();
const signal = buildSignal({ context });
const effect = buildEffect({ context });

describe('effect + signal', () => {
	test('reaction to set new value', () => {
		const [value, setValue] = signal(0);
		let currentValue = value();

		effect(() => {
			currentValue = value();
		});

		setValue(5);
		expect(currentValue).toBe(5);
	});
});
