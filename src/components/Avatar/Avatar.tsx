import { FC, ReactNode } from 'react'
import styles from './Avatar.module.css'

export interface Props {
	children?: ReactNode
	bgColor?: string
	width?: string
	src?: string
}

export interface AvatarStyles extends React.CSSProperties {
	'--bg-color': string
	'--width': string
	'--image-url': string
}

export const Avatar: FC<Props> = ({
	children,
	bgColor = '#39349a',
	width = '50px',
	src,
}) => {
	const style: AvatarStyles = {
		'--bg-color': bgColor,
		'--width': width,
		'--image-url': `url(${src})`,
	}

	return (
		<div style={style} className={styles.avatar}>
			{children}
		</div>
	)
}
