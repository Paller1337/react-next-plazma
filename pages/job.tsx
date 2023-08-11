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
    job: { name: string, price: number }
    children: any
}

const Job = (props: IJob) => {
    return (
        <div className='job-item'>
            <div className='job-item__header'>
                <span className='job-item__job-name'>{props.job.name}</span>
                <span className='job-item__job-price'>от {props.job.price} руб.</span>
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
                    <div className='job-page container'>
                        <div className='job-page__heading'>
                            <h1 className='h1-title'>Вакансии в «PLAZMA»</h1>
                            <span className='job-page__description'>
                                Если вас заинтересовала одна из предложнных вакансий - звоните по номеру:
                                <b> +7 (910) 168-17-61</b>
                            </span>
                        </div>

                        <div className='job-page__content'>
                            <Job job={{
                                name: 'Повар ~',
                                price: 40000,
                            }}>
                                <JobText bold>
                                    Что мы от вас ждем:
                                </JobText>
                                <JobText>
                                    Мы немного заскучали пока ждали именно тебя! <br></br>
                                    Но, так счастливы, что наконец-то нашли!
                                </JobText>
                            </Job>
                        </div>
                    </div>
                    <div className='base-bg' data-scroll-section></div>
                </div >
            </main>
        </>

    )
}
