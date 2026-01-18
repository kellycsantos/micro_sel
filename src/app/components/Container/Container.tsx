import {ReactNode} from "react"
import styles from './container.module.scss'
type ContainerProps = {
    children: ReactNode,
    classname: string
}

export const Container = ({ children,classname } : ContainerProps) => {
    return (
        <section className={`${styles.container} ${styles[classname]}`}>
            {children}
        </section>
    )
}