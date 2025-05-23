import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
	title: 'Components/Typography',
	component: Typography,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Typography>

export const H1: Story = {
	args: {
		children: 'Typography h1',
		variant: 'h1',
	},
}

export const H2: Story = {
	args: {
		children: 'Typography h2',
		variant: 'h2',
	},
}

export const H3: Story = {
	args: {
		children: 'Typography h3',
		variant: 'h3',
	},
}

export const H4: Story = {
	args: {
		children: 'Typography h4',
		variant: 'h4',
	},
}

export const H5: Story = {
	args: {
		children: 'Typography h5',
		variant: 'h5',
	},
}

export const H6: Story = {
	args: {
		children: 'Typography h6',
		variant: 'h6',
	},
}

export const P: Story = {
	args: {
		children: 'Typography p',
		variant: 'p',
	},
}

export const Custom: Story = {
	args: {
		children: 'Typography h2',
		variant: 'h2',
		color: '#632d98',
		fontSize: '1.2rem',
	},
}
