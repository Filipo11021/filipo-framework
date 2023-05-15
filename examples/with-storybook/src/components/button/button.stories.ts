import { Button } from './button';

import type { StoryObj, Meta } from '@storybook/html';

type ButtonProps = Parameters<typeof Button>[0];

const meta = {
	title: 'Button',
	render: (props) => Button(props),
	argTypes: {
		children: { control: 'text' },
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success'],
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		onClick: { action: 'clicked' },
	},
	args: {
		children: 'halo',
		size: 'medium',
		variant: 'primary',
	},
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		variant: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
};

export const Success: Story = {
	args: {
		variant: 'success',
	},
};

export const Small: Story = {
	args: {
		size: 'small',
	},
};

export const Medium: Story = {
	args: {
		size: 'medium',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
	},
};
