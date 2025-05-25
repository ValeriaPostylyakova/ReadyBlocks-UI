import { FC, ReactNode } from 'react'
import { hexToRgba } from '../../lib/generate-rgb'
import styles from './Button.module.css'

interface ButtonProps {
	children: ReactNode
	variant?: 'solid' | 'outlined' | 'dashed' | 'filled'
	onClick?: () => void
	bgColor?: string
	fontSize?: string
	padding?: string
	disabled?: boolean
	className?: string
}

interface ButtonStyles extends React.CSSProperties {
	'--button-background-color': string
	'--button-background-color-grba': string | null
	'--font-size'?: string
	'--padding'?: string
}

export const Button: FC<ButtonProps> = ({
	children,
	onClick,
	variant = 'solid',
	bgColor = '#39349a',
	fontSize,
	padding,
	disabled,
	className,
}) => {
	const bgColorGrba = hexToRgba(bgColor, 0.3)

	const buttonStyle: ButtonStyles = {
		'--button-background-color': bgColor,
		'--button-background-color-grba': bgColorGrba,
		...(fontSize ? { '--font-size': fontSize } : {}),
		...(padding ? { '--padding': padding } : { '--padding': '8px 10px' }),
	}

	return (
		<button
			disabled={disabled}
			className={`${styles.button} ${styles[variant]} ${className}`}
			onClick={onClick}
			style={buttonStyle}
		>
			{children}
		</button>
	)
}
