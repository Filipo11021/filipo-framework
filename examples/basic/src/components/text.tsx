import { signal } from '@filipo/framework';

export function Text() {
	const [text, setText] = signal('');

	function updateText(e: Event) {
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		const target = e.currentTarget as HTMLInputElement;

		setText(target.value);
	}

	return (
		<div>
			<p style='text-align: start;d'>text: {text}</p>
			<input oninput={updateText} type='text' value={text} />
		</div>
	);
}
