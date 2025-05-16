import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
	it('Рендеринг с содержимым', () => {
		render(<Button>Click Me</Button>)
		const buttonElement = screen.getByText(/Click Me/i)
		expect(buttonElement).toBeInTheDocument()
	})
	it('Вызов onClick при клике', () => {
		const handleClick = jest.fn()
		render(<Button onClick={handleClick}>Clickable</Button>)
		const buttonElement = screen.getByText(/Clickable/i)
		fireEvent.click(buttonElement)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it('Применение дефолтного класса варианта solid', () => {
		render(<Button>Default Type</Button>)

		const buttonElement = screen.getByText(/Default Type/i)

		expect(buttonElement).toHaveClass('solid')
		expect(buttonElement).toHaveClass('button')
	})

	it('Применение различных классов вариантов', () => {
		const { rerender } = render(<Button type='outlined'>Outlined</Button>)
		let buttonElement = screen.getByText(/Outlined/i)
		expect(buttonElement).toHaveClass('outlined')

		rerender(<Button type='dashed'>Dashed</Button>)
		buttonElement = screen.getByText(/Dashed/i)
		expect(buttonElement).toHaveClass('dashed')

		rerender(<Button type='filled'>Filled</Button>)
		buttonElement = screen.getByText(/Filled/i)
		expect(buttonElement).toHaveClass('filled')
	})

	it('Обработка состояния disabled', () => {
		render(<Button disabled>Disabled Button</Button>)
		const buttonElement = screen.getByText(/Disabled Button/i)
		expect(buttonElement).toBeDisabled()
	})

	it('Не вызывать onClick, если кнопка disabled', () => {
		const handleClick = jest.fn()

		render(
			<Button disabled onClick={handleClick}>
				Disabled Click
			</Button>
		)

		const buttonElement = screen.getByText(/Disabled Click/i)
		fireEvent.click(buttonElement)
		expect(handleClick).not.toHaveBeenCalled()
	})

	it('Применение inline-стиля для bgColor', () => {
		const customColor = '#000000'
		render(<Button bgColor={customColor}>Custom Color</Button>)
		const buttonElement = screen.getByText(/Custom Color/i)
		expect(buttonElement).toHaveStyle(
			`--button-background-color: ${customColor}`
		)
	})

	it('inline-стиля для fontSize', () => {
		const customSize = '20px'
		render(<Button fontSize={customSize}>Custom Font Size</Button>)
		const buttonElement = screen.getByText(/Custom Font Size/i)
		expect(buttonElement).toHaveStyle(`--font-size: ${customSize}`)
	})
})
