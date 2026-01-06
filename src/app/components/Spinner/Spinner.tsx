import styles from './spinner.module.scss'

type SpinnerProps = {
    size: number
}

export const Spinner = ({ size }: SpinnerProps) => {
    return (
        <div className={styles.spinner} data-size={size}>
            <div className={styles.spinner_inner}>
            </div>
        </div>
    )
}