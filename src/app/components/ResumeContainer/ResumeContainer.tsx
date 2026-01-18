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
    gridarea?: string
}

export const ResumeContainer = ( {gridarea}: ResumeProps) => {
    const state = useResume()
    return (
        <div className={styles.resume_container} style={{ gridArea: gridarea }} >
            <h2>Ödeme Özeti</h2>
            <div className={styles.resume_list}>
                <ul>
                    <li>
                        <p>Fatura n </p>
                        <p>{state?.idInvoice}</p>
                    </li>
                    <li>
                        <p>Value</p>
                        <p>R$ {state.invoiceValue}</p>
                    </li>
                    <li>
                        <p>Discount</p>
                        <p>{state?.formattDiscount}%</p>
                    </li>
                    <li>
                        <p>Total</p>
                        <p>R$ {state?.valueWithDiscount}</p>
                    </li>
                </ul>
            </div>

            <footer className={styles.total_container}>
                <span className={styles.total}>
                    <p>Ödenecek Tutar</p>
                    <p>$ {state?.valueWithDiscount}</p>
                </span>
                <span>
                    <FileText size={48} />
                </span>
            </footer>
        </div>
    )
}