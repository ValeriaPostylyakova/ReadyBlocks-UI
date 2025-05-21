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
			<Input
				type='text'
				id='input'
				variant='solid'
				placeholder='Placeholder'
				focusColor='#373b3e'
				focusBorderColor='#5d5d5d'
			/>
		)

		const inputElem = screen.getByPlaceholderText('Placeholder')
		fireEvent.focus(inputElem)

		expect(inputElem).toHaveStyle({
			borderColor: '#5d5d5d',
			color: '#373b3e',
		})
	})
})
