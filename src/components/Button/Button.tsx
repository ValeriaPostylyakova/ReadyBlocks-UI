import { FC, ReactNode } from 'react'
import { hexToRgba } from '../../lib/generate-rgb'
import styles from './Button.module.css'

interface ButtonProps {
	children: ReactNode
	type?: 'solid' | 'outlined' | 'dashed' | 'filled'
	onClick?: () => void
	bgColor?: string
	fontSize?: string
	disabled?: boolean
}

interface ButtonStyles extends React.CSSProperties {
	'--button-background-color': string
	'--button-background-color-grba': string | null
	'--font-size'?: string
}

export const Button: FC<ButtonProps> = ({
	children,
	onClick,
	type = 'solid',
	bgColor = '#39349a',
	fontSize,
	disabled,
}) => {
	const bgColorGrba = hexToRgba(bgColor, 0.3)

	const buttonStyle: ButtonStyles = {
		'--button-background-color': bgColor,
		'--button-background-color-grba': bgColorGrba,
		...(fontSize ? { '--font-size': fontSize } : {}),
	}

	return (
		<button
			disabled={disabled}
			className={`${styles.button} ${styles[type]}`}
			onClick={onClick}
			style={buttonStyle}
		>
			{children}
		</button>
	)
}
