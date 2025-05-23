import { FC, ReactNode } from 'react'
import styles from './Avatar.module.css'

export interface Props {
	children?: ReactNode
	bgColor?: string
	width?: string
	src?: string
	fontSize?: string
	size: 'small' | 'medium' | 'large'
}

export interface AvatarStyles extends React.CSSProperties {
	'--bg-color': string
	'--width'?: string
	'--image-url': string
	'--font-size'?: string
}

export const Avatar: FC<Props> = ({ bgColor = '#39349a', size, ...props }) => {
	const style: AvatarStyles = {
		'--bg-color': bgColor,
		'--width': props.width,
		'--image-url': `url(${props.src})`,
		'--font-size': props.fontSize,
	}

	return (
		<div style={style} className={`${styles.avatar} ${styles[size]}`}>
			{props.children}
		</div>
	)
}
