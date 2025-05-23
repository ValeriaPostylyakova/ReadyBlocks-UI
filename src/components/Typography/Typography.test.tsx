import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Typography } from './Typography'

describe('Typography', () => {
	it('Рендеринг с содержимым', () => {
		render(<Typography variant='h1'>Typography</Typography>)

		const typographyElem = screen.getByText(/Typography/i)
		expect(typographyElem).toBeInTheDocument()
	})

	it('Соответствие font-size переданному variant h2', () => {
		render(<Typography variant='h2'>Typography h2</Typography>)

		const typographyElem = screen.getByText(/Typography h2/i)
		expect(typographyElem).toHaveClass('h2')
	})

	it('Соответствие font-size переданному variant p', () => {
		render(<Typography variant='p'>Typography p</Typography>)

		const typographyElem = screen.getByText(/Typography p/i)
		expect(typographyElem).toHaveClass('p')
	})

	it('Применение кастомных стилей font-size и color', () => {
		render(
			<Typography variant='h3' fontSize='2rem' color='#ff0000'>
				Typography p
			</Typography>
		)

		const typographyElem = screen.getByText(/Typography p/i)
		const color = getComputedStyle(typographyElem).getPropertyValue('--color')
		const fontFize =
			getComputedStyle(typographyElem).getPropertyValue('--font-size')

		expect(color).toBe('#ff0000')
		expect(fontFize).toBe('2rem')
	})
})
