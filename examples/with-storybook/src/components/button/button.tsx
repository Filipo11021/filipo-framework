import { type Children } from '@filipo/framework';

import classes from './button.module.css';

type ButtonProps = {
	children: Children;
	variant?: 'primary' | 'secondary' | 'success';
	size?: 'small' | 'medium' | 'large';
	class?: string;
} & Record<string, any>;

export function Button({
	children,
	variant = 'primary',
	size = 'medium',
	class: className,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			class={`${className} ${classes.btn} ${classes[`btn-${variant}`]} ${
				classes[`btn-${size}`]
			}`}
		>
			{children}
		</button>
	);
}
