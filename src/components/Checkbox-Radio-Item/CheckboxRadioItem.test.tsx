import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CheckboxRadioItem } from './Checkbox-Radio-Item'

describe('CheckboxRadioItem Component', () => {
	it('renders without errors', () => {
		render(<CheckboxRadioItem id='test' type='checkbox' />)
	})

	it('displays the correct label', () => {
		render(<CheckboxRadioItem id='test' label='Test Label' type='checkbox' />)
		expect(screen.getByText('Test Label')).toBeInTheDocument()
	})

	it('toggles the checked state (checkbox)', async () => {
		render(
			<CheckboxRadioItem id='test' type='checkbox' label='Test Checkbox' />
		)
		const checkbox = screen.getByLabelText('Test Checkbox')
		expect(checkbox).not.toBeChecked()

		await userEvent.click(checkbox)

		expect(checkbox).toBeChecked()

		await userEvent.click(checkbox)
		expect(checkbox).not.toBeChecked()
	})

	it('does not toggle the checked state when disabled', async () => {
		render(
			<CheckboxRadioItem
				id='test'
				type='checkbox'
				label='Test Checkbox'
				disabled
			/>
		)
		const checkbox = screen.getByLabelText('Test Checkbox')

		expect(checkbox).not.toBeChecked()
		await userEvent.click(checkbox)

		expect(checkbox).not.toBeChecked()
	})

	it('applies styles correctly when type is radio', () => {
		render(<CheckboxRadioItem id='test' type='radio' label='Test Radio' />)
		const radioItem = screen.getByRole('radio')

		expect(radioItem.closest('div')).toHaveClass('radioItem')
	})

	it('applies styles correctly when type is checkbox', () => {
		render(
			<CheckboxRadioItem id='test' type='checkbox' label='Test Checkbox' />
		)
		const checkbox = screen.getByRole('checkbox')

		expect(checkbox.closest('div')).toHaveClass('checkboxItem')
	})
})
