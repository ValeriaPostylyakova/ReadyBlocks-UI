import { FC, useState } from 'react'
import { hexToRgba } from '../../lib/generate-rgb'
import styles from './Checkbox-Radio-Item.module.css'

export interface Props {
	id: string
	label?: string
	checked?: boolean
	disabled?: boolean
	bgColor?: string
	borderColor?: string
	size?: string
	type: 'radio' | 'checkbox'
	className?: string
}

interface ToggleItemStyles extends React.CSSProperties {
	'--bg-color-rgba'?: string
	'--item-size'?: string
	'--item-background-color'?: string
	'--item-border-color'?: string
}

export const CheckboxRadioItem: FC<Props> = ({
	id,
	label,
	checked = false,
	disabled,
	bgColor = '#39349a',
	borderColor = '#39349a',
	size = '14px',
	type,
	className,
}) => {
	const [isChecked, setIsChecked] = useState(checked)

	const handleChange = () => {
		setIsChecked(prevChecked => !prevChecked)
	}

	const bgColorRgba = hexToRgba(bgColor, 0.25)

	const itemStyle: ToggleItemStyles = {
		'--bg-color-rgba': bgColorRgba || '',
		'--item-size': size,
		'--item-background-color': bgColor,
		...(type === 'radio' ? { '--item-border-color': borderColor } : {}),
	}

	const labelStyles = {
		cursor: disabled ? 'not-allowed' : 'pointer',
		opacity: disabled ? 0.5 : 1,
		fontSize: size,
	}

	const itemClassName =
		type === 'radio' ? styles.radioItem : styles.checkboxItem
	const inputClassName =
		type === 'radio' ? styles.radioInput : styles.checkboxInput
	const labelClassName =
		type === 'radio' ? styles.radioLabel : styles.checkboxLabel
	return (
		<div>
			<div className={itemClassName}>
				<input
					id={id}
					type={type}
					className={`${inputClassName} ${className}`}
					disabled={disabled}
					checked={isChecked}
					onChange={handleChange}
					style={itemStyle}
				/>
				<label style={labelStyles} htmlFor={id} className={labelClassName}>
					{label}
				</label>
			</div>
		</div>
	)
}
