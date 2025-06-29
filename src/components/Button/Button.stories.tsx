import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'Components/Inputs/Button',
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
	},
}

export const Outlined: Story = {
	args: {
		children: 'Button',
		variant: 'outlined',
	},
}

export const Dashed: Story = {
	args: {
		children: 'Button',
		variant: 'dashed',
	},
}

export const Filled: Story = {
	args: {
		children: 'Button',
		variant: 'filled',
	},
}
