import { effect } from '@filipo/reactivity';

import { applyChildren } from './apply-children';

import type { Attributes, Child, ComponentFactory } from './types';

export function createElement(
	tag: string | ComponentFactory,
	attrs: null | Attributes,
	...children: Child[]
) {
	if (typeof tag === 'function') {
		return tag({ ...attrs, children });
	}

	const element = document.createElement(tag);

	if (attrs) {
		for (const name of Object.keys(attrs)) {
			const value = attrs[name];

			if (name.startsWith('on')) {
				const eventName = name.toLocaleLowerCase().substring(2);
				if (typeof value !== 'function') continue;
				// eslint-disable-next-line
				//@ts-ignore
				element.addEventListener(eventName, value);
				continue;
			}

			if (typeof value === 'function') {
				effect(() => {
					// eslint-disable-next-line
					(element as any)[name] = value();
				});
				continue;
			}

			if (typeof value === 'boolean') {
				if (value) {
					element.setAttribute(name, 'true');
					continue;
				}
				element.removeAttribute(name);
				continue;
			}

			element.setAttribute(name, String(value));
		}
	}

	applyChildren(element, children);

	return element;
}

export function Fragment({ children }: { children: HTMLElement[] }) {
	const el = document.createDocumentFragment();
	for (const child of children) {
		el.append(child);
	}
	return el;
}
