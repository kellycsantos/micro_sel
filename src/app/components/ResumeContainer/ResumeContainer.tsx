import styles from './resume_container.module.scss'
import { FileText } from 'lucide-react'



type ListItems = {
    idFatura: number,
    value: number,
    discount: number,
    resume: number
}

type ResumeProps = {
    listItems: ListItems,

}

export const ResumeContainer = ({listItems}: ResumeProps) => {
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
                        <p>{listItems?.discount}%</p>
                    </li>
                    <li>
                        <p>Total</p>
                        <p>R$ {listItems?.resume}</p>
                    </li>

                </ul>
            </div>


            <footer className={styles.total_container}>
                <span className={styles.total}>
                    <p>Ödenecek Tutar</p>
                    <p>$ {listItems?.resume}</p>
                </span>

                <span>
                    <FileText size={48} />
                </span>

            </footer>

        </div>
    )
}