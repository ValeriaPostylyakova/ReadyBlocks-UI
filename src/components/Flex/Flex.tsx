import { FC, ReactNode } from 'react'
import styles from './Flex.module.css'

export interface Props {
	children: ReactNode
}

export const Flex: FC<Props> = ({ children }) => {
	return <div className={styles.flexContainer}>{children}</div>
}
