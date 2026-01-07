'use client'

import { convertPercentValue, convertMoney } from "@/app/utils";
import { useInvoice } from "@/app/stores/store";


export function useResume() {
    const invoiceState = useInvoice()
    const state = invoiceState.invoiceData
    
    const idInvoice = state?.idInvoice
    const value = state?.value || 0
    const formattDiscount = convertPercentValue(Number(state?.discount) || 0 )

    const calc_valueWithDiscount = () => {
        return (value - (value * Number(state?.discount))).toFixed(2)
    }
    const valueWithDiscount = convertMoney(calc_valueWithDiscount(), 'de-DE')
    const invoiceValue = convertMoney(value)

    return {

        formattDiscount,
        valueWithDiscount,
        invoiceValue,
        idInvoice
    }
}
