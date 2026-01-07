import { CSSProperties } from 'react'
import styles from './spinner.module.scss'

type SpinnerProps = {
    size: number
}

export const Spinner = ({ size }: SpinnerProps) => {
   const heightWidth: CSSProperties = { ['--size' as keyof CSSProperties]: `${size}px` };
    return (
        <div className={styles.spinner} style={heightWidth}>
            <div className={styles.spinner_inner}></div>
        </div>
    )
}