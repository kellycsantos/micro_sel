import { InputMask, Replacement } from '@react-input/mask'
import { InputHTMLAttributes } from 'react'
import styles from './input.module.scss'
import { Tooltip } from '../Tooltip/Tooptip'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    mask?: string,
    replacement?: Replacement,
    tooltip?: string
    onChange?: (e: any) => void,

}
export const Input = ({ label, mask, replacement, onChange, tooltip, ...rest }: InputProps) => {
    return (

        <label className={styles.label}>
            <p> {label} {tooltip && <Tooltip content={tooltip} />}</p>
         {
            mask ? 
            <InputMask {...rest} mask={mask} replacement={replacement} separate onChange={onChange} className={styles.input} /> :
            <input {...rest} className={styles.input}/>
         }
        </label>

    )
}