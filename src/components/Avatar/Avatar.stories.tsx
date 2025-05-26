import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
	title: 'Components/Data display/Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Background: Story = {
	args: {
		children: 'pv',
		bgColor: '#39349a',
		size: 'small',
	},
}

export const Image: Story = {
	args: {
		src: '/src/static/images/avatar/avatar-1.avif',
		size: 'medium',
	},
}

export const Small: Story = {
	args: {
		children: 'pv',
		bgColor: '#39349a',
		size: 'small',
	},
}

export const Medium: Story = {
	args: {
		children: 'pv',
		bgColor: '#39349a',
		size: 'medium',
	},
}

export const Large: Story = {
	args: {
		children: 'pv',
		bgColor: '#39349a',
		size: 'large',
	},
}

export const CustomSize: Story = {
	args: {
		children: 'pv',
		bgColor: '#39349a',
		width: '25px',
		fontSize: '14px',
	},
}
