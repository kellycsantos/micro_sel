import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PaymentData = {
    cardholderName: string,
    creditCard: number,
    ccv: number,
    expirationDate: string
}

type InvoiceData = {
    idInvoice: number,
    value: number,
    discount: string | 0,
}

type InvoiceState = {

    createNewInvoice: () => void,
    addPaymentData: (payload: PaymentData) => void,
    addName: (payload: string) => void
    paymentData?: PaymentData
    paymentStatus: 'pending' | 'processing' | 'completed'
    invoiceData?: InvoiceData
    name: string | undefined
}


export const useInvoice = create<InvoiceState>()(
    persist(
        (set) => ({
            name: undefined,
            invoiceData: undefined,
            paymentData: undefined,
            paymentStatus: 'pending',

            addName: (payload) => set(() => ({ name: payload })),

            addPaymentData: (payload) =>
                set(() => ({
                    paymentData: payload,
                    paymentStatus: 'processing'
                })),

            createNewInvoice: () =>
                set(() => ({
                    invoiceData: {
                        idInvoice: Math.floor((Math.random() * 100000000)),
                        value: Math.floor((Math.random() * 1000)),
                        discount: (Math.random() * 1).toFixed(2),
                    }
                }))
        }),

        { name: 'invoice-storage' }
    )
)
