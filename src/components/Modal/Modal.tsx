import { FC, useState } from 'react'
import { hexToRgba } from '../../lib/generate-rgb'
import { Button } from '../Button/Button'
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
}

export interface Props {
	open: boolean
	setOpen: (open: boolean) => void
	bgModal?: string
	bgWrapper?: string
	blurWrapper?: string
	borderRadiusModal?: string
	paddingModal?: string
}

export const Modal: FC<Props> = ({
	open,
	setOpen,
	bgModal = '#fff',
	bgWrapper = 'rgba(0, 0, 0, 0.5)',
	borderRadiusModal = '5px',
	paddingModal = '20px',
	blurWrapper = '0px',
}) => {
	const [modal, setModal] = useState<boolean>(false)

	const modalWrapperClassName = `${styles.modalWrapper} ${
		modal ? styles.open : ''
	}`

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
	}

	return (
		<>
			<Button onClick={() => setModal(true)}>Open Modal</Button>

			<div
				style={wrapperStyle}
				onClick={() => setModal(false)}
				className={modalWrapperClassName}
			>
				<div style={modalStyle} className={styles.modal}>
					Modal
				</div>
			</div>
		</>
	)
}
