import { Info } from 'lucide-react'
import styles from './tooltip.module.scss'
type TooltipProps = {
    content?: string
}
export const Tooltip = ({ content }: TooltipProps) => {
    return (
        <div className={styles.tooltip_container}>
            <Info size={16} className={styles.tooltip} />
            {
                content &&
                <div className={styles.tooltip_content}>
                    {content}
                </div>
            }
        </div>
    )
}