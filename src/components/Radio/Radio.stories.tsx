import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
	title: 'Components/Radio',
	component: Radio,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Radio>

export const Basic: Story = {
	args: {
		id: 'basic',
		size: '20px',
	},
}

export const Label: Story = {
	args: {
		id: 'label',
		label: 'Radio',
		size: '18px',
	},
}

export const LabelDisabled: Story = {
	args: {
		id: 'label-disabled',
		label: 'Radio Disabled',
		disabled: true,
		checked: true,
	},
}

export const Checked: Story = {
	args: {
		id: 'checked',
		size: '1.5rem',
		checked: true,
	},
}

export const Disabled: Story = {
	args: {
		id: 'disabled',
		size: '1.5rem',
		disabled: true,
	},
}

export const DisabledChecked: Story = {
	args: {
		id: 'disabled-checked',
		size: '1.5rem',
		disabled: true,
		checked: true,
	},
}
