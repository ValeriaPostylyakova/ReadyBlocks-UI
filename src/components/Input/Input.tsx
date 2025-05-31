import React, { FC } from 'react'
import styles from './Input.module.css'

export interface Props {
	id: string
	type: 'text' | 'password' | 'email'
	variant?: 'solid' | 'outlined' | 'filled'
	label?: string
	labelDisplay?: 'inline' | 'block'
	display?: 'inline' | 'block' | 'inline-block'
	placeholder?: string
	value?: string
	disabled?: boolean
	autoFocus?: boolean
	autoComplete?: string
	bgColor?: string
	borderColor?: string
	padding?: string
	radius?: string
	fontSize?: string
	focusColor?: string
	focusBorderColor?: string
	className?: string
	width?: string
}

export interface LabelStyle extends React.CSSProperties {
	'--label-color': string
}

export interface InputStyle extends React.CSSProperties {
	'--bg-color': string
	'--border-color': string
	'--radius': string
	'--padding': string
	'--focus-color': string
	'--focus-border-color': string
	'--width'?: string
	'--display'?: string
}

export const Input: FC<Props> = ({
	type = 'text',
	bgColor = '#f9f9f9',
	borderColor = '#4a4a4a',
	radius = '0.3rem',
	padding = '3px 10px',
	variant = 'solid',
	focusColor = '#373b3e',
	focusBorderColor = '#090909',
	className,
	display = 'inline',
	...props
}) => {
	const labelStyle: LabelStyle = {
		'--label-color': borderColor,
	}

	const inputStyle: InputStyle = {
		'--bg-color': bgColor,
		'--border-color': borderColor,
		'--radius': radius,
		'--padding': padding,
		'--focus-color': focusColor,
		'--focus-border-color': focusBorderColor,
		'--width': props.width,
		'--display': display,
	}

	return (
		<>
			<label
				htmlFor={props.id}
				className={`${styles.label} ${styles[props.labelDisplay!]}`}
				style={labelStyle}
			>
				{props.label}
			</label>
			<input
				type={type}
				className={`${styles.input} ${styles[variant]} ${className}`}
				{...props}
				style={inputStyle}
			/>
		</>
	)
}
