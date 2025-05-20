import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
	const id = 'checkbox'
	const label = 'label'

	it('Рендеринг без label', () => {
		render(<Checkbox id={id} />)

		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toBeInTheDocument()
		expect(checkbox).not.toBeChecked()
	})

	it('Рендеринг с label', () => {
		render(<Checkbox id={id} label={label} />)

		const checkbox = screen.getByLabelText('label')
		expect(checkbox).toBeInTheDocument()
		expect(checkbox).not.toBeChecked()
	})

	it('Рендеринг disabled', () => {
		render(<Checkbox id={id} disabled />)

		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toBeDisabled()
	})

	it('Рендеринг checked', () => {
		render(<Checkbox id={id} checked />)

		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toBeChecked()
	})

	it('Рендеринг checked и disabled', () => {
		render(<Checkbox id={id} checked disabled />)

		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toBeDisabled()
		expect(checkbox).toBeChecked()
	})

	it('состояние checked при клике на чекбокс', () => {
		render(<Checkbox id={id} />)

		const checkbox = screen.getByRole('checkbox')
		fireEvent.click(checkbox)

		expect(checkbox).toBeChecked()
	})

	it('состояние checked при клике на label', () => {
		render(<Checkbox id={id} label={label} />)

		const checkbox = screen.getByRole('checkbox')
		const labelElement = screen.getByText(label)
		fireEvent.click(labelElement)
		expect(checkbox).toBeChecked()
	})

	it('Применение inline-стиля для bgColor', () => {
		const customColor = '#000000'
		render(<Checkbox id={id} bgColor={customColor} />)
		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toHaveStyle(`--checkbox-background-color: ${customColor}`)
	})

	it('inline-стиля для fontSize', () => {
		const customSize = '1.5rem'
		render(<Checkbox id={id} size={customSize} />)
		const checkbox = screen.getByRole('checkbox')
		expect(checkbox).toHaveStyle(`--checkbox-size: ${customSize}`)
	})
})
