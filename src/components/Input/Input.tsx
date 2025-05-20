import { FC } from 'react'
import styles from './Input.module.css'

export interface Props {
	id: string
	type: 'text' | 'password' | 'email'
	variant: 'solid' | 'outlined' | 'filled'
	label?: string
	labelDisplay?: 'inline' | 'block'
	placeholder?: string
	value?: string
	disabled?: boolean
	autoFocus?: boolean
	autoComplete?: string
	borderColor?: string
	padding?: string
	radius?: string
	fontSize?: string
	color?: string
}

export const Input: FC<Props> = ({
	type = 'text',
	color,
	borderColor = '#7f7f7f',
	radius = '0.3rem',
	padding = '8px 10px',
	labelDisplay = 'inline',
	...props
}) => {
	return (
		<>
			<label
				htmlFor={props.id}
				className={`${styles.label} ${styles[labelDisplay]}`}
			>
				{props.label}
			</label>
			<input
				type={type}
				className={`${styles.input} ${styles[props.variant]}`}
				{...props}
				style={
					{
						'--color': color,
						'--border-color': borderColor,
						'--radius': radius,
						'--padding': padding,
					} as React.CSSProperties
				}
			/>
		</>
	)
}
