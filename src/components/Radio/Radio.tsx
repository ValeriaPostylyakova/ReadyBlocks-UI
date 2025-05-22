import { FC, useState } from 'react'
import { hexToRgba } from '../../lib/generate-rgb'
import styles from './Radio.module.css'

export interface Props {
	id: string
	label?: string
	bgColor?: string
	size?: string
	disabled?: boolean
	checked?: boolean
	borderColor?: string
}

export interface RadioStyle extends React.CSSProperties {
	'--bg-color-rgba': string
	'--radio-size': string
	'--radio-background-color': string
	'--radio-border-color': string
}

export const Radio: FC<Props> = ({
	id,
	label,
	bgColor = '#373295',
	borderColor = '#dee2e6',
	size = '16px',
	disabled,
	checked,
}) => {
	const [isChecked, setIsChecked] = useState(checked)

	const handleChange = () => {
		setIsChecked(prevChecked => !prevChecked)
	}

	const bgColorRgba = hexToRgba(bgColor, 0.25)

	const radioStyle: RadioStyle = {
		'--bg-color-rgba': bgColorRgba ? bgColorRgba : '',
		'--radio-size': size,
		'--radio-background-color': bgColor,
		'--radio-border-color': borderColor,
	}

	const labelStyles = {
		cursor: disabled ? 'not-allowed' : 'pointer',
		opacity: disabled ? 0.5 : 1,
		fontSize: size,
	}

	return (
		<div className={styles.radioItem}>
			<input
				id={id}
				type='radio'
				className={styles.radioInput}
				disabled={disabled}
				checked={isChecked}
				onChange={handleChange}
				style={radioStyle}
			/>
			<label style={labelStyles} htmlFor={id} className={styles.radioLabel}>
				{label}
			</label>
		</div>
	)
}
