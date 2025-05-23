import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const AvatarBackground: Story = {
	args: {
		children: 'R',
		bgColor: '#39349a',
	},
}

export const AvatarImage: Story = {
	args: {
		src: '/src/static/images/avatar/avatar-1.avif',
	},
}
