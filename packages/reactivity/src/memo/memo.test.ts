import { describe, expect, test } from 'vitest';

import { memo } from './memo';

describe('memo', () => {
	test('create and read memo', () => {
		const value = memo(() => 10);
		expect(value()).toBe(10);
	});

	test('memoization with multiple reads', () => {
		let count = 0;

		const value = memo(() => {
			count += 1;
		});

		Array.from({ length: 5 }).forEach(value);

		expect(count).toBe(1);
	});
});
