import type { Children } from '@filipo/framework';

export function Card({ children }: { children: Children }) {
	return <div style='border: 1px solid #fff; padding: 4rem;'>{children}</div>;
}
