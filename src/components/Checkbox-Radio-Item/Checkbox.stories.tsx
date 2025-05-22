import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxRadioItem } from './Checkbox-Radio-Item'

const meta: Meta<typeof CheckboxRadioItem> = {
	title: 'Components/Checkbox',
	component: CheckboxRadioItem,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CheckboxRadioItem>

export const Basic: Story = {
	args: {
		id: 'basic',
		type: 'checkbox',
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
