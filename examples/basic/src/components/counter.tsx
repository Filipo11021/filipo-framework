import { signal } from '@filipo/framework';

export function Counter() {
	const [count, setCount] = signal(0);

	function increment() {
		setCount((c) => c + 1);
	}

	function decrement() {
		setCount((c) => c - 1);
	}

	return (
		<div>
			<p>{count}</p>
			<button onclick={increment}>increment</button>
			<button onclick={decrement}>decrement</button>
		</div>
	);
}
