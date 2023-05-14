import { describe, expect, test } from 'vitest';

import { effect } from './effect/effect';
import { signal } from './signal/signal';

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
