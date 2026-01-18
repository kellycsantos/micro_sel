'use client'
import styles from './form_container.module.scss'
import { Input } from '../Input/Input'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Button'

import { CreditCard } from 'lucide-react'
import { useInvoice } from '@/app/stores/store'


export type ResumeProps = {
    gridarea?: string
}

type TFormData = {
  holdername: string
  credit_card: string
  ccv: string
  due_date: string
}

const formSchema = z.object({
    holdername: z.string().transform((name) => name.trim()).refine((name) => name.length >= 10, 'O nome deve conter 10 caracteres ou mais'),
    credit_card: z.string()
        .transform((value) =>
            value.replace(/[\s_]/g, ""))
        .refine((v) => v.length === 16, {
            message: "Seu cartão deve conter 16 dígitos",
        }),
    ccv: z.string().regex(/^\d{3,4}$/, "CCV deve conter 3 ou 4 números"),
    due_date: z.string().refine((data) => {
        const [month, year] = data.split("/").map(Number);
        const currentYear = Number(new Date().getFullYear().toString().substring(2))
        const currentMonth = new Date().getMonth() + 1

        const validMonth = month >= 1 && month <= 12
        const validYear = year >= currentYear


        if (validMonth && validYear) {
            if (month <= currentMonth && year === currentYear) {
                return false
            }
            return true
        }
    }, 'Data do vencimento incorreta')
})

type FormData = z.infer<typeof formSchema>

export const FormContainer = ({ gridarea }: ResumeProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(formSchema) })
    const [data, setData] = useState<FormData>()
    const router = useRouter()

    const invoiceData = useInvoice()
    const [loading, setLoading] = useState(false)

    function makePayment(data: any) {
        setLoading(true)
        let processData;
        if (processData) {
            return clearTimeout(processData)
        }
        processData = () =>
            setTimeout(() => (
                invoiceData?.addPaymentData(data),
                router.push('./pagamento'),
                setLoading(false)
            ), 500)
        processData()
    }

    return (
        <div className={styles.form_container} style={{ gridArea: gridarea }} >
            <h2><CreditCard /> Ödeme </h2>
            <p className={styles.introduction}>Ödemenin gerçekleşmesi için lütfen bilgileri eksiksiz giriniz.</p>

            <form onSubmit={handleSubmit((data) => setData(data))}>
                <Input {...register("holdername")}  placeholder='Maria José dos Santos' label='Nome do Títular' error={errors?.holdername?.message} />
                <Input {...register("credit_card")} mask='____ ____ ____ ____' replacement={{ _: /\d/ }} placeholder='5555 1234 5678 9876' label='Credit Card' error={errors?.credit_card?.message} />
                <span className={styles.input_row}>
                    <Input {...register("ccv")} mask='___' replacement={{ _: /\d/ }} placeholder='555' label='CCV' error={errors?.ccv?.message} />

                    <Input {...register("due_date")} mask='mm/yy' replacement={{ m: /\d/, y: /\d/ }} placeholder='Data' label='Data de Expiração' error={errors?.due_date?.message} />
                </span>

                <Button text='Efetuar pagamento' isLoading={loading} onClick={handleSubmit(makePayment)} />
                <Button type="button" text='Gerar nova fatura' onClick={() => invoiceData.createNewInvoice()} variant='ghost' />
            </form>


        </div>
    )
}