'use client'
import styles from './form_container.module.scss'
import { Input } from '../Input/Input'

import { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { Button } from '../Button'

import { CreditCard} from 'lucide-react'


export type ResumeProps = {
    gridarea?: string
}

export const FormContainer = ({  gridarea }: ResumeProps) => {
    const {register, handleSubmit} = useForm()
    const [data, setData] = useState()
    useEffect(() => {
        console.log(data)
    },[data])
    return (
        <div className={styles.form_container} style={{ gridArea: gridarea }} >
            <h2>  <CreditCard/> Ödeme </h2>
          <p>Ödemenin gerçekleşmesi için lütfen bilgileri eksiksiz giriniz.</p>

            <form onSubmit={handleSubmit((data) => setData(data))}>
             <Input {...register("nome_titular")}  placeholder='Maria José dos Santos' label='Nome do Títular'/>   
             <Input {...register("credit_card")} mask='____ ____ ____ ____' replacement={{ _:/\d/ }} placeholder='5555 1234 5678 9876' label='Credit Card'/>   
          <span className={styles.input_row}>
             <Input {...register("ccv")} mask='___' replacement={{ _:/\d/ }} placeholder='555' label='CCV'/>   
             <Input {...register("data_vencimento")} mask='mm/yy' replacement={{ m:/\d/, y:/\d/ }} placeholder='Data' label='Data de Expiração'/> 
          </span>
             <br/>  
             <Button text='Pagar' onClick={handleSubmit((data) => setData(data))}/>
            </form>
    
   
        </div>
    )
}