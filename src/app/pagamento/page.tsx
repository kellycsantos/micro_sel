'use client'
import styles from '../page.module.scss'
import { Container } from "../components/Container/Container";
import { Spinner } from '../components/Spinner/Spinner';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useInvoice } from '../stores/store';


export default function AguardandoPagamento() {
    const router = useRouter()
    const { loading, paymentStatus, finishPayment } = useInvoice()

    useEffect(() => {
        setTimeout(() => {
            paymentStatus === 'processing' && finishPayment()
        }, 2500)
    }, [loading, paymentStatus])

    useEffect(() => {
        if (paymentStatus === 'completed') {
            setTimeout(() => {
                router.push('/')
            }, 1100)
        }
        if (paymentStatus === 'pending') {
            setTimeout(() => {
                router.push('/')
            }, 1500)
        }
    }, [paymentStatus])

    return (
        <main className={styles.main}>

            <Container classname="one-column">
                {
                    paymentStatus === 'pending' ?
                       <h1>Você não possui pagamento em andamento !</h1> :

                        <>
                            <h1>MicroSEL</h1>
                            <span className={styles.waitingText}>
                                {
                                    loading ?

                                        <p >İşleminiz gerçekleştiriliyor. Lütfen Bekleyiniz</p> :
                                        <p>Ödeme başaryla gerçekleşti.Teşekkür Ederiz</p>
                                }
                            </span>
                            <Spinner size={85} finished={!loading} />
                        </>
                }

            </Container>
        </main>
    )
}