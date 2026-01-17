import { Spinner } from '../Spinner/Spinner'
import styles from './button.module.scss'


type Button = {
    text?: string,
    onClick?: () => void,
    variant?: 'primary' | 'ghost' | 'loading',
    disabled?: boolean,
    isLoading?: boolean
}

const getVariant = (variant: string | undefined, loading: boolean): string => {
    if(loading){
       return 'ghost'
    }
    return variant ?? 'primary'
}


export const Button = ({ text, onClick, variant, disabled, isLoading = false }: Button) => {
    return (
        <button data-testid="main_button" className={`${styles.button} ${styles[getVariant(variant, isLoading)]}`} onClick={onClick} disabled={disabled ?? false}>
            {isLoading ?
                <Spinner size={20} /> : <> {text ?? 'click'}</>
            }
        </button>
    )
}