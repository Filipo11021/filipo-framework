export function render(root: HTMLElement, component: () => JSX.Element) {
	root.appendChild(component());
}
