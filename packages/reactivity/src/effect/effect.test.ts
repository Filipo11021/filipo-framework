import { describe, expect, test } from 'vitest';

import { buildContext } from '../context/context';

import { buildEffect } from './effect';

const context = buildContext();
const effect = buildEffect({ context });

describe('effect', () => {
	test('create effect', () => {
		let check = false;
		effect(() => {
			check = true;
		});

		expect(check).toBe(true);
	});

	test('context length in effect function', () => {
		expect(context.size()).toBe(0);

		effect(() => {
			expect(context.size()).toBe(1);
		});

		expect(context.size()).toBe(0);
	});

	test('nested effects', () => {
		expect(context.size()).toBe(0);

		effect(() => {
			expect(context.size()).toBe(1);

			effect(() => {
				expect(context.size()).toBe(2);

				effect(() => {
					expect(context.size()).toBe(3);
				});
			});

			expect(context.size()).toBe(1);
		});

		expect(context.size()).toBe(0);
	});
});
