import styles from './button.module.scss'


type Button = {
    text?: string,
    onClick? : () => void,
    variant? : 'primary' | 'ghost' ,
    disabled?: boolean

}


export const Button = ({text, onClick, variant, disabled } : Button) => {
    return (
        <button className={`${styles.button} ${styles[variant ?? 'primary']}`} onClick={() => onClick} disabled={disabled ?? false}>
           {text ?? 'Click here'}
        </button>
    )
}