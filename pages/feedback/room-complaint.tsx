import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import vkCloudLoader from '@/mw/utils/imageLoader'
import TextBlock from '@/components/TextBlock'



const JobText = (props: { children: any, bold?: boolean }) => {
    return (
        <span className={`job-item__text ${props.bold ? 'text_bold' : ''}`}>{props.children}</span>
    )
}

interface IJob {
    job: { name: string, price: string }
    children: any
}

const Job = (props: IJob) => {
    return (
        <div className='job-item'>
            <div className='job-item__header'>
                <span className='job-item__job-name'>{props.job.name}</span>
                <span className='job-item__job-price'>{props.job.price} р./месяц.</span>
            </div>
            <div className='job-item__body'>
                {props.children}
            </div>
        </div>
    )
}


export default function PageJob() {
    return (
        <>
            <Head>
                <title>Ваканции в парк-отеле «PLAZMA»</title>
                {/* <meta name='description' content='' /> */}

                <meta
                    property='og:title'
                    content='Ваканции в парк-отеле «PLAZMA»' />
                {/* <meta
                    property='og:description'
                    content='' /> */}
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-meals'>
                <div className='relative main-wrap' data-scroll-container>
                    <div className='feedback-page container'>
                        <div className='feedback-page__heading'>
                            <h1 className='h1-title'>Нужна помощь?<br/> Свяжитесь с нами прямо сейчас!</h1>
                            <span className='feedback-page__description'>
                                Если у вас возникли какие-либо проблемы или вам нужна срочная помощь, заполните эту форму,
                                и мы немедленно к вам придем. Ваш комфорт — наш приоритет!
                            </span>
                        </div>

                        <div className='feedback-page__content'>

                        </div>
                    </div>
                    <div className='base-bg' data-scroll-section></div>
                </div >
            </main>
        </>

    )
}
