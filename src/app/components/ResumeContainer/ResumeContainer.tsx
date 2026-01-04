'use client'
import styles from './resume_container.module.scss'
import { FileText } from 'lucide-react'

import { useResume } from './hooks/useResumeContainer'

export type ListItems = {
    idFatura: number,
    value: number,
    discount: number,
    resume: number
}

export type ResumeProps = {
    listItems: ListItems,
}

export const ResumeContainer = ({ listItems }: ResumeProps) => {
    const use = useResume({ listItems })
    return (
        <div className={styles.resume_container}>
            <h2>Ödeme Özeti</h2>
            <div className={styles.resume_list}>
                <ul>
                    <li>
                        <p>Fatura n </p>
                        <p>{listItems?.idFatura}</p>
                    </li>
                    <li>
                        <p>Value</p>
                        <p>{listItems?.value}</p>
                    </li>
                    <li>
                        <p>Discount</p>
                        <p>{use?.discountValue}%</p>
                    </li>
                    <li>
                        <p>Total</p>
                        <p>R$ {use?.valueWithDiscount}</p>
                    </li>
                </ul>
            </div>

            <footer className={styles.total_container}>
                <span className={styles.total}>
                    <p>Ödenecek Tutar</p>
                    <p>$ {use?.valueWithDiscount}</p>
                </span>
                <span>
                    <FileText size={48} />
                </span>
            </footer>
        </div>
    )
}