import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
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

	it('Изменение стилей при фокусе', () => {
		render(
			<Input type='text' id='input' variant='solid' placeholder='Placeholder' />
		)

		const inputElem = screen.getByPlaceholderText('Placeholder')
		fireEvent.focus(inputElem)

		const focusColor =
			getComputedStyle(inputElem).getPropertyValue('--focus-color')

		const focusBorderColor = getComputedStyle(inputElem).getPropertyValue(
			'--focus-border-color'
		)

		expect(focusBorderColor).toBe('#ffffff')
		expect(focusColor).toBe('#090909')
	})
})
