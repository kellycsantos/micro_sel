import { CSSProperties } from 'react'
import styles from './spinner.module.scss'
import Image from 'next/image'
import checked from '../../../../public/check-icon.svg' 

type SpinnerProps = {
    size: number,
    finished? : boolean
}

export const Spinner = ({ size, finished = false }: SpinnerProps) => {
   const heightWidth: CSSProperties = { ['--size' as keyof CSSProperties]: `${size}px` };
    return (
        <div className={`${styles.spinner} ${finished && styles.finished}` } style={heightWidth}>
           <Image src={checked} alt='success'/>
        </div>
    )
}