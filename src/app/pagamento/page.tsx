'use client'
import styles from '../page.module.scss'
import { Container } from "../components/Container/Container";
import { Spinner } from '../components/Spinner/Spinner';
import { useEffect, useState } from 'react';
import { boolean } from 'zod';
import { useInvoice } from '../stores/store';


export default function AguardandoPagamento() {
    const { loading, finishPayment, addPaymentData } = useInvoice()
    const data = {
        "nome_titular": "",
        "credit_card": "",
        "ccv": "",
        "data_vencimento": ""
    }

    useEffect(() => {

        setTimeout(() => {
            finishPayment()
        }, 2500)

    }, [loading])


    return (
        <main className={styles.main}>
            <Container classname="one-column">
                <h1>MicroSEL</h1>
                <span className={styles.waitingText}>
                    {
                        loading ?

                            <p >İşleminiz gerçekleştiriliyor. Lütfen Bekleyiniz</p> :
                            <p>Ödeme başaryla gerçekleşti.Teşekkür Ederiz</p>
                    }
                </span>
                <Spinner size={85} finished={!loading} />


            </Container>
        </main>
    )
}