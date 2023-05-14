import type { Subscriber } from './types';

export let context: Subscriber[] = [];

export function setContext(v: Subscriber[]) {
	context = v;
}
