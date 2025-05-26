import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { Modal, Props } from './Modal'

const meta: Meta<typeof Modal> = {
	title: 'Components/Feedback/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
}

export default meta

const Template: StoryFn<Props> = args => {
	const [isOpen, setIsOpen] = useState(args.open || false)

	return (
		<div>
			<Button
				padding='8px 20px'
				fontSize='18px'
				onClick={() => setIsOpen(true)}
			>
				Open modal
			</Button>
			<Modal {...args} open={isOpen} setOpen={setIsOpen}>
				Modal
			</Modal>
		</div>
	)
}

export const Background: StoryFn<Props> = args => Template({ ...args })
Background.args = {
	open: false,
	children: 'Modal',
} as Props

export const Blur: StoryFn<Props> = args => Template({ ...args })
Blur.args = {
	open: false,
	blurWrapper: '6px',
	bgWrapper: 'transperent',
	bgModal: '#eee',
} as Props
