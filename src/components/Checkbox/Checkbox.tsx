import { FC, useState } from 'react'
import styles from './Checkbox.module.css'

export interface Props {
	id: string
	label?: string
	bgColor?: string
	size?: string
	disabled?: boolean
	checked?: boolean
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

	return (
		<div className={styles.checkboxItem}>
			<input
				id={id}
				type='checkbox'
				className={styles.checkboxInput}
				disabled={disabled}
				checked={isChecked}
				onChange={handleChange}
				style={
					{
						'--checkbox-background-color': bgColor,
						'--checkbox-size': size,
					} as React.CSSProperties
				}
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
