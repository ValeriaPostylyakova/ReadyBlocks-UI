import { FC, useState } from 'react'
import { hexToRgba } from '../../lib/generate-rgb'
import styles from './Checkbox.module.css'

export interface Props {
	id: string
	label?: string
	bgColor?: string
	size?: string
	disabled?: boolean
	checked?: boolean
}

export interface CheckboxStyles extends React.CSSProperties {
	'--checkbox-background-color': string
	'--checkbox-size': string
	'--bg-color-rgba': string
}

export const Checkbox: FC<Props> = ({
	id,
	label,
	bgColor = '#373295',
	size = '20px',
	disabled,
	checked,
}) => {
	const [isChecked, setIsChecked] = useState(checked)

	const handleChange = () => {
		setIsChecked(prevChecked => !prevChecked)
	}

	const bgColorRgba = hexToRgba(bgColor, 0.25)

	const checkboxStyle: CheckboxStyles = {
		'--bg-color-rgba': bgColorRgba ? bgColorRgba : '',
		'--checkbox-size': size,
		'--checkbox-background-color': bgColor,
	}

	return (
		<div className={styles.checkboxItem}>
			<input
				id={id}
				type='checkbox'
				className={styles.checkboxInput}
				disabled={disabled}
				checked={isChecked}
				onChange={handleChange}
				style={checkboxStyle}
			/>
			<label
				style={{
					cursor: disabled ? 'not-allowed' : 'pointer',
					opacity: disabled ? 0.5 : 1,
					fontSize: size,
				}}
				htmlFor={id}
				className={styles.checkboxLabel}
			>
				{label}
			</label>
		</div>
	)
}
