import React, { FC } from 'react'
import { hexToRgba } from '../../lib/generate-rgb'
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
	bgColor?: string
	borderColor?: string
	padding?: string
	radius?: string
	fontSize?: string
	focusColor?: string
	focusBorderColor?: string
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
	'--border-color-rgba': string
}

export const Input: FC<Props> = ({
	type = 'text',
	bgColor = '#f9f9f9',
	borderColor = '#4a4a4a',
	radius = '0.3rem',
	padding = '8px 10px',

	focusColor = '#373b3e',
	focusBorderColor = '#5d5d5d',
	...props
}) => {
	const colorBoxShadow = hexToRgba(focusColor, 0.1)

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
		'--border-color-rgba': colorBoxShadow ? colorBoxShadow : '',
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
				className={`${styles.input} ${styles[props.variant]}`}
				{...props}
				style={inputStyle}
			/>
		</>
	)
}
