import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Input>

export const Solid: Story = {
	args: {
		id: 'basic',
		placeholder: 'Placeholder',
		variant: 'solid',
	},
}

export const Outlined: Story = {
	args: {
		id: 'outlined',
		placeholder: 'Placeholder',
		variant: 'outlined',
	},
}

export const Filled: Story = {
	args: {
		id: 'filled',
		placeholder: 'Placeholder',
		variant: 'filled',
	},
}

export const LabeInline: Story = {
	args: {
		id: 'label-inline',
		label: 'label:',
		labelDisplay: 'inline',
		placeholder: 'Placeholder',
		variant: 'solid',
	},
}

export const LabelBlock: Story = {
	args: {
		id: 'label-block',
		label: 'label:',
		labelDisplay: 'block',
		placeholder: 'Placeholder',
		variant: 'solid',
	},
}

export const Disabled: Story = {
	args: {
		id: 'disabled',
		placeholder: 'Placeholder',
		disabled: true,
		variant: 'outlined',
	},
}
