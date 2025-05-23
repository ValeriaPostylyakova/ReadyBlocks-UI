import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Typography } from './Typography'

describe('Typography Component', () => {
	it('renders h1 element with correct text and default styles', () => {
		render(<Typography variant='h1'>Test H1 Heading</Typography>)
		const h1Element = screen.getByRole('heading', { level: 1 })
		expect(h1Element).toBeInTheDocument()
		expect(h1Element).toHaveTextContent('Test H1 Heading')
		expect(h1Element).toHaveStyle({ '--color': '#000000', '--font-size': '' })
	})

	it('renders p element with correct text and default styles when variant is not specified', () => {
		render(<Typography>Test Paragraph</Typography>)
		const pElement = screen.getByText('Test Paragraph')
		expect(pElement).toBeInTheDocument()
		expect(pElement.tagName).toBe('P')
		expect(pElement).toHaveStyle({ '--color': '#000000', '--font-size': '' })
	})

	it('renders h2 element with correct text and custom styles', () => {
		render(
			<Typography variant='h2' color='#ff0000' fontSize='20px'>
				Test H2 Heading
			</Typography>
		)
		const h2Element = screen.getByRole('heading', { level: 2 })
		expect(h2Element).toBeInTheDocument()
		expect(h2Element).toHaveTextContent('Test H2 Heading')
		expect(h2Element).toHaveStyle({
			'--color': '#ff0000',
			'--font-size': '20px',
		})
	})

	it('renders h3 element with className', () => {
		render(
			<Typography variant='h3' className='custom-class'>
				Test H3 Heading
			</Typography>
		)
		const h3Element = screen.getByRole('heading', { level: 3 })
		expect(h3Element).toBeInTheDocument()
		expect(h3Element).toHaveClass('custom-class')
	})

	it('renders h4, h5, and h6 elements correctly', () => {
		render(
			<>
				<Typography variant='h4'>Test H4 Heading</Typography>
				<Typography variant='h5'>Test H5 Heading</Typography>
				<Typography variant='h6'>Test H6 Heading</Typography>
			</>
		)

		const h4Element = screen.getByRole('heading', { level: 4 })
		const h5Element = screen.getByRole('heading', { level: 5 })
		const h6Element = screen.getByRole('heading', { level: 6 })

		expect(h4Element).toBeInTheDocument()
		expect(h5Element).toBeInTheDocument()
		expect(h6Element).toBeInTheDocument()

		expect(h4Element).toHaveTextContent('Test H4 Heading')
		expect(h5Element).toHaveTextContent('Test H5 Heading')
		expect(h6Element).toHaveTextContent('Test H6 Heading')
	})

	it('renders p element with custom color and font size', () => {
		render(
			<Typography variant='p' color='#00ff00' fontSize='14px'>
				Test Paragraph with styles
			</Typography>
		)
		const pElement = screen.getByText('Test Paragraph with styles')
		expect(pElement).toBeInTheDocument()
		expect(pElement.tagName).toBe('P')
		expect(pElement).toHaveStyle({
			'--color': '#00ff00',
			'--font-size': '14px',
		})
	})

	it('renders p element with custom className', () => {
		render(
			<Typography variant='p' className='custom-paragraph'>
				Test Paragraph
			</Typography>
		)
		const pElement = screen.getByText('Test Paragraph')
		expect(pElement).toBeInTheDocument()
		expect(pElement).toHaveClass('custom-paragraph')
	})
})
