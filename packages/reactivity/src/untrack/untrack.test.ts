import { describe, expect, test } from 'vitest';

import { buildContext } from '../context/context';

import { buildUntrack } from './untrack';

const context = buildContext();
const untrack = buildUntrack({ context });

describe('untrack', () => {
	test('context length in untrack function', () => {
		expect(context.size()).toBe(0);
		context.push({
			dependencies: new Set(),
			execute() {
				console.log('test');
			},
		});
		expect(context.size()).toBe(1);

		untrack(() => {
			expect(context.size()).toBe(0);
		});
		expect(context.size()).toBe(1);
	});
});
