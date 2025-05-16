import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Solid: Story = {
	args: {
		children: 'Button',
		type: 'solid',
	},
}

export const Outlined: Story = {
	args: {
		children: 'Button',
		type: 'outlined',
	},
}

export const Dashed: Story = {
	args: {
		children: 'Button',
		type: 'dashed',
	},
}

export const Filled: Story = {
	args: {
		children: 'Button',
		type: 'filled',
	},
}
