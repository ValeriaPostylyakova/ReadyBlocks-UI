import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { CheckboxRadioItem } from './Checkbox-Radio-Item'

describe('Checkbox', () => {
	const id = 'checkbox'
	const label = 'label'

	it('Рендеринг без label', () => {
		render(<CheckboxRadioItem type='checkbox' id={id} />)

		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toBeInTheDocument()
		expect(checkbox).not.toBeChecked()
	})

	it('Рендеринг с label', () => {
		render(<CheckboxRadioItem type='checkbox' id={id} label={label} />)

		const checkbox = screen.getByLabelText('label')
		expect(checkbox).toBeInTheDocument()
		expect(checkbox).not.toBeChecked()
	})

	it('Рендеринг disabled', () => {
		render(<CheckboxRadioItem type='checkbox' id={id} disabled />)

		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toBeDisabled()
	})

	it('Рендеринг checked', () => {
		render(<CheckboxRadioItem type='checkbox' id={id} checked />)

		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toBeChecked()
	})

	it('Рендеринг checked и disabled', () => {
		render(<CheckboxRadioItem type='checkbox' id={id} checked disabled />)

		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toBeDisabled()
		expect(checkbox).toBeChecked()
	})

	it('состояние checked при клике на чекбокс', () => {
		render(<CheckboxRadioItem type='checkbox' id={id} />)

		const checkbox = screen.getByRole('checkbox')
		fireEvent.click(checkbox)

		expect(checkbox).toBeChecked()
	})

	it('состояние checked при клике на label', () => {
		render(<CheckboxRadioItem type='checkbox' id={id} label={label} />)

		const checkbox = screen.getByRole('checkbox')
		const labelElement = screen.getByText(label)
		fireEvent.click(labelElement)
		expect(checkbox).toBeChecked()
	})

	it('Применение inline-стиля для bgColor', () => {
		const customColor = '#000000'
		render(<CheckboxRadioItem type='checkbox' id={id} bgColor={customColor} />)
		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toHaveStyle(`--item-background-color: ${customColor}`)
	})

	it('inline-стиля для fontSize', () => {
		const customSize = '1.5rem'
		render(<CheckboxRadioItem type='checkbox' id={id} size={customSize} />)
		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toHaveStyle(`--item-size: ${customSize}`)
	})
})
