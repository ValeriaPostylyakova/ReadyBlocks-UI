import { FC, ReactNode } from 'react'
import styles from './Typography.module.css'

export interface Props {
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
	children?: ReactNode
	color?: string
	fontSize?: string
	className?: string
}

export interface TypographyStyles extends React.CSSProperties {
	'--color': string
	'--font-size': string
}

export const Typography: FC<Props> = ({
	variant = 'p',
	children,
	color = '#000000',
	fontSize,
	className,
}) => {
	const stylesTypography: TypographyStyles = {
		'--color': color,
		'--font-size': fontSize ? fontSize : '',
	}

	switch (variant) {
		case 'h1':
			return (
				<h1
					className={`${styles.typography} ${styles.h1} ${styles.className}`}
					style={stylesTypography}
				>
					{children}
				</h1>
			)
		case 'h2':
			return (
				<h2
					style={stylesTypography}
					className={`${styles.typography} ${styles.h2} ${className}`}
				>
					{children}
				</h2>
			)
		case 'h3':
			return (
				<h3
					style={stylesTypography}
					className={`${styles.typography} ${styles.h3} ${className}`}
				>
					{children}
				</h3>
			)
		case 'h4':
			return (
				<h4
					style={stylesTypography}
					className={`${styles.typography} ${styles.h4} ${className}`}
				>
					{children}
				</h4>
			)
		case 'h5':
			return (
				<h5
					style={stylesTypography}
					className={`${styles.typography} ${styles.h5} ${className}`}
				>
					{children}
				</h5>
			)
		case 'h6':
			return (
				<h6
					style={stylesTypography}
					className={`${styles.typography} ${styles.h6} ${className}`}
				>
					{children}
				</h6>
			)
		case 'p':
			return (
				<p
					style={stylesTypography}
					className={`${styles.typography} ${styles.p} ${className}`}
				>
					{children}
				</p>
			)
	}
}
