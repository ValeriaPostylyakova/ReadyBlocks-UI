import { FC, ReactNode } from 'react'
import { hexToRgba } from '../../lib/generate-rgb'
import styles from './Modal.module.css'

export interface WrapperStyles extends React.CSSProperties {
	'--bg-wrapper': string
	'--blur-wrapper'?: string
}

export interface ModalStyles extends React.CSSProperties {
	'--bg-modal': string
	'--border-radius-modal': string
	'--padding-modal': string
	'--box-shadow-modal': string
	'--width-modal'?: string
	'--height-modal'?: string
}

export interface Props {
	children: ReactNode
	open: boolean
	setOpen: (open: boolean) => void
	bgModal?: string
	bgWrapper?: string
	blurWrapper?: string
	borderRadiusModal?: string
	paddingModal?: string
	width?: string
	height?: string
}

export const Modal: FC<Props> = ({
	children,
	open,
	setOpen,
	bgModal = '#fff',
	bgWrapper = 'rgba(0, 0, 0, 0.5)',
	borderRadiusModal = '5px',
	paddingModal = '20px',
	blurWrapper = '0px',
	...props
}) => {
	const modalWrapperClassName = `${styles.modalWrapper} ${
		open ? styles.open : ''
	}`

	const modalClassName = `${styles.modal} ${open ? styles.open : ''}`

	const boxShadowModal = hexToRgba(bgModal, 0.2)

	const wrapperStyle: WrapperStyles = {
		'--bg-wrapper': bgWrapper,
		'--blur-wrapper': blurWrapper,
	}

	const modalStyle: ModalStyles = {
		'--bg-modal': bgModal,
		'--border-radius-modal': borderRadiusModal,
		'--padding-modal': paddingModal,
		'--box-shadow-modal': boxShadowModal ? boxShadowModal : '',
		'--width-modal': props.width ? props.width : '',
		'--height-modal': props.height ? props.height : '',
	}

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			setOpen(false)
		}
	}

	const handleClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
	}

	return (
		<>
			<div
				style={wrapperStyle}
				onClick={handleOverlayClick}
				className={modalWrapperClassName}
			>
				<div
					onClick={handleClickModal}
					style={modalStyle}
					className={modalClassName}
				>
					{children}
				</div>
			</div>
		</>
	)
}
