import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Modal, Props } from './Modal'
import styles from './Modal.module.css'

jest.mock('./Modal.module.css', () => ({
	modalWrapper: 'modalWrapper',
	modal: 'modal',
	open: 'open',
}))

describe('Modal', () => {
	const mockSetOpen = jest.fn()
	const defaultProps: Props = {
		open: false,
		setOpen: mockSetOpen,
		children: 'Test Content',
	}

	it('renders children correctly', () => {
		render(<Modal {...defaultProps}>Test Children</Modal>)
		expect(screen.getByText('Test Children')).toBeInTheDocument()
	})

	it('applies the correct styles', () => {
		const { container } = render(
			<Modal
				{...defaultProps}
				bgModal='red'
				bgWrapper='blue'
				borderRadiusModal='10px'
				paddingModal='20px'
				blurWrapper='5px'
			/>
		)
		const modalWrapper = container.querySelector(
			`.${styles.modalWrapper}`
		) as HTMLElement

		expect(modalWrapper?.style.getPropertyValue('--bg-wrapper')).toBe('blue')
	})

	it('applies the "open" class when open is true', () => {
		const { container } = render(<Modal {...defaultProps} open={true} />)
		const modalWrapper = container.querySelector(
			`.${styles.modalWrapper}`
		) as HTMLElement
		expect(modalWrapper).toHaveClass(styles.open)
	})

	it('calls setOpen with false when clicking outside the modal', () => {
		render(
			<Modal {...defaultProps} open={true}>
				Test Content
			</Modal>
		)
		fireEvent.click(
			screen
				.getByText('Test Content')
				.closest(`.${styles.modalWrapper}`) as Element
		)
		expect(mockSetOpen).toHaveBeenCalledWith(false)
	})

	it('renders with custom width and height', () => {
		const width = '500px'
		const height = '300px'
		const { container } = render(
			<Modal {...defaultProps} open={true} width={width} height={height}>
				Test Content
			</Modal>
		)
		const modal = container.querySelector(`.${styles.modal}`) as HTMLElement

		expect(modal?.style.getPropertyValue('--width-modal')).toBe(width)
		expect(modal?.style.getPropertyValue('--height-modal')).toBe(height)
	})
})
