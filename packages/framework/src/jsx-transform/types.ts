export type Child =
	| Child[]
	| JSX.Element
	| JSX.Fragment
	// eslint-disable-next-line @typescript-eslint/ban-types
	| Function
	| string
	| number
	| boolean
	| undefined
	| null;
export type Children = Child[] | Child;

type BaseProps = { children: Children };

export type ComponentFactory = (props: BaseProps) => JSX.Element;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Attributes = Record<string, unknown>;

declare global {
	namespace JSX {
		type Element = HTMLElement;
		type Fragment = DocumentFragment;

		type IntrinsicElements = {
			[TKey in keyof HTMLElementTagNameMap]?: Attributes;
		};

		interface ElementAttributesProperty {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			props: any;
		}
		interface ElementChildrenAttribute {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			children: any;
		}
	}
}
