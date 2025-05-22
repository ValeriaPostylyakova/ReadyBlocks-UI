import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { CheckboxRadioItem } from './Checkbox-Radio-Item'

describe('Radio', () => {
	it('Рендеринг без label', () => {
		render(<CheckboxRadioItem type='radio' id='radio' />)

		const radio = screen.getByRole('radio')
		expect(radio).toBeInTheDocument()
		expect(radio).not.toBeChecked()
	})

	it('Рендеринг с label', () => {
		render(<CheckboxRadioItem type='radio' id='radio' label='Radio' />)

		const radioElem = screen.getByLabelText('Radio')
		expect(radioElem).toBeInTheDocument()
		expect(radioElem).not.toBeChecked()
	})

	it('Рендеринг disabled', () => {
		render(<CheckboxRadioItem type='radio' id='radio' disabled />)

		const radioElem = screen.getByRole('radio')
		expect(radioElem).toBeDisabled()
	})

	it('Рендеринг checked', () => {
		render(<CheckboxRadioItem type='radio' id='radio' checked />)

		const radioElem = screen.getByRole('radio')
		expect(radioElem).toBeChecked()
	})

	it('cостояние cheked при клике на radio', () => {
		render(<CheckboxRadioItem type='radio' id='radio' />)

		const radioElem = screen.getByRole('radio')
		fireEvent.click(radioElem)
		expect(radioElem).toBeChecked()
	})

	it('состояние checked при клике на label', () => {
		render(<CheckboxRadioItem type='radio' id='radio' label='Radio' />)

		const radioElem = screen.getByLabelText('Radio')
		fireEvent.click(radioElem)
		expect(radioElem).toBeChecked()
	})
})
