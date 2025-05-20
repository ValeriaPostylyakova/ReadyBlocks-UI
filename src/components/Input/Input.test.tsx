import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
	it('Рендеринг без label и с применением default variant', () => {
		render(
			<Input type='text' id='input' variant='solid' placeholder='Placeholder' />
		)

		const inputElem = screen.getByPlaceholderText('Placeholder')
		expect(inputElem).toBeInTheDocument()
	})

	it('Рендеринг с label', () => {
		render(
			<Input
				label='label'
				type='text'
				id='input'
				variant='solid'
				placeholder='Placeholder'
			/>
		)

		const inputElem = screen.getByLabelText('label')
		expect(inputElem).toBeInTheDocument()
	})

	it('Применение свойства disabled', () => {
		render(
			<Input
				disabled
				type='text'
				id='input'
				variant='solid'
				placeholder='Placeholder'
			/>
		)

		const inputElem = screen.getByPlaceholderText('Placeholder')
		expect(inputElem).toBeDisabled()
	})

	it('Применение стилей outlined', () => {
		render(
			<Input
				type='text'
				id='input'
				variant='outlined'
				placeholder='Placeholder'
			/>
		)

		const inputElem = screen.getByPlaceholderText('Placeholder')
		expect(inputElem).toHaveClass('outlined')
	})
})
