/** @vitest-environment jsdom */
import { signal } from '@filipo/reactivity';
import { describe, expect, test } from 'vitest';

import { createElement } from './jsx-transform';

describe('jsx transformer', () => {
	test('create element', () => {
		const el = <div>halo</div>;
		expect(el.textContent).toBe('halo');
	});

	test('create nested elements', () => {
		const el = (
			<div>
				<div>
					<div>
						<div id='test'>halo</div>
					</div>
					<div id='test2'>123</div>
				</div>
			</div>
		);

		expect(el.querySelector('#test')?.textContent).toBe('halo');
		expect(el.querySelector('#test2')?.textContent).toBe('123');
	});

	test('create component', () => {
		const Text = () => <div id='test'>halo</div>;

		const el = (
			<div>
				<div>test</div>
				<Text />
			</div>
		);

		expect(el.querySelector('#test')?.textContent).toBe('halo');
	});

	test('render', () => {
		const [value] = signal('halo');
		const el = <div>{value}</div>;

		expect(el.textContent).toBe('halo');
	});

	test('update', () => {
		const [value, setValue] = signal(0);
		const el = (
			<div>
				<h1 id='value'>{value}</h1>
				<button onclick={() => setValue((v) => v + 1)}>click</button>
			</div>
		);

		expect(el.querySelector("h1")?.textContent).toBe("0")
    const btn = el.querySelector("button")
    btn?.click()
    expect(el.querySelector("h1")?.textContent).toBe("1")
	});
});
