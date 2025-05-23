import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar Component', () => {
	it('renders with default props and correct styles', () => {
		render(<Avatar size='medium'>JD</Avatar>)

		const avatarElement = screen.getByText('JD')

		expect(avatarElement).toBeInTheDocument()
		expect(avatarElement).toHaveClass('avatar')
		expect(avatarElement).toHaveClass('medium')
		expect(avatarElement).toHaveStyle({
			'--bg-color': '#39349a',
			'--width': undefined,
			'--image-url': 'url(undefined)',
			'--font-size': undefined,
		})
	})

	it('renders with custom background color, width, font size, and src', () => {
		render(
			<Avatar
				size='large'
				bgColor='#ff0000'
				width='50px'
				fontSize='24px'
				src='https://example.com/image.jpg'
			>
				AB
			</Avatar>
		)

		const avatarElement = screen.getByText('AB')

		expect(avatarElement).toBeInTheDocument()
		expect(avatarElement).toHaveClass('avatar')
		expect(avatarElement).toHaveClass('large')
		expect(avatarElement).toHaveStyle({
			'--bg-color': '#ff0000',
			'--width': '50px',
			'--image-url': 'url(https://example.com/image.jpg)',
			'--font-size': '24px',
		})
	})

	it('renders with small size', () => {
		render(<Avatar size='small'>XS</Avatar>)
		const avatarElement = screen.getByText('XS')
		expect(avatarElement).toHaveClass('small')
	})

	it('renders with large size', () => {
		render(<Avatar size='large'>XL</Avatar>)
		const avatarElement = screen.getByText('XL')
		expect(avatarElement).toHaveClass('large')
	})

	it('renders with children', () => {
		render(<Avatar size='medium'>Custom Content</Avatar>)
		const avatarElement = screen.getByText('Custom Content')
		expect(avatarElement).toBeInTheDocument()
	})
})
