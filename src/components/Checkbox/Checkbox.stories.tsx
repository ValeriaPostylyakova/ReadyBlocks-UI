import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
	title: 'Components/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Basic: Story = {
	args: {
		id: 'basic',
		size: '25px',
	},
}

export const Label: Story = {
	args: {
		id: 'label',
		label: 'Checkbox',
		size: '20px',
	},
}

export const LabelDisabled: Story = {
	args: {
		id: 'label-disabled',
		label: 'Checkbox Disabled',
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
