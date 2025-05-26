import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxRadioItem } from '../Checkbox-Radio-Item'
const meta: Meta<typeof CheckboxRadioItem> = {
	title: 'Components/Inputs/Radio',
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
		type: 'radio',
		size: '20px',
	},
}

export const Label: Story = {
	args: {
		id: 'label',
		type: 'radio',
		label: 'Radio',
		size: '18px',
	},
}

export const LabelDisabled: Story = {
	args: {
		id: 'label-disabled',
		type: 'radio',
		label: 'Radio Disabled',
		disabled: true,
		checked: true,
	},
}

export const Checked: Story = {
	args: {
		id: 'checked',
		type: 'radio',
		size: '1.5rem',
		checked: true,
	},
}

export const Disabled: Story = {
	args: {
		id: 'disabled',
		type: 'radio',
		size: '1.5rem',
		disabled: true,
	},
}

export const DisabledChecked: Story = {
	args: {
		id: 'disabled-checked',
		type: 'radio',
		size: '1.5rem',
		disabled: true,
		checked: true,
	},
}
