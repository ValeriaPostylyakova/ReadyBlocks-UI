import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
	title: 'Feedback/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Modal>

export const ModalBackground: Story = {
	args: {},
}
