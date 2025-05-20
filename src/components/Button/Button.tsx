import { FC, ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
	children: ReactNode
	type?: 'solid' | 'outlined' | 'dashed' | 'filled'
	onClick?: () => void
	bgColor?: string
	fontSize?: string
	disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
	children,
	onClick,
	type = 'solid',
	bgColor,
	fontSize,
	disabled,
}) => {
	const classes = `${styles.button} ${styles[type]}`

	return (
		<button
			disabled={disabled}
			className={classes}
			onClick={onClick}
			style={
				{
					'--button-background-color': bgColor,
					'--font-size': fontSize,
				} as React.CSSProperties
			}
		>
			{children}
		</button>
	)
}
