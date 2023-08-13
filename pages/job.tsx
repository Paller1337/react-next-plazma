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
                                name: 'Администраторы',
                                price: '~ 40.000 - 43.000',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Отличные коммуникативные навыки, организаторские способности, хорошее настроение - остальному научим.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    Скользящий (есть дневные и ночные смены).
                                </JobText>
                            </Job>

                            <Job job={{
                                name: 'Горничные',
                                price: '2000 р./смена, ~ 40.000',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Добросовестность, внимательность к деталям, физическая выносливость.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    Смена 12 часов, график скользящий (есть дневные и ночные смены).
                                </JobText>
                            </Job>

                            <Job job={{
                                name: 'Повар в ресторан',
                                price: '~ 40.000 - 50.000',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Опыт работы, физическая выносливость.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    Скользящий.
                                </JobText>
                            </Job>

                            <Job job={{
                                name: 'Посудомойщицы',
                                price: '1600 р./смена, ~ 30.000',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Добросовестность, внимательность к деталям, физическая выносливость.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    Смена 12 часов, график 3/2 (есть дневные и ночные смены).
                                </JobText>
                            </Job>

                            <Job job={{
                                name: 'Сотрудник на раздачу в столовую',
                                price: '1400 р./смена, ~ 22.000',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Добросовестность, внимательность к деталям, физическая выносливость.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    2/2.
                                </JobText>
                            </Job>

                            <Job job={{
                                name: 'Повар в столовую',
                                price: '1700 р./смена, ~ 25.500 - 37.400',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Опыт работы, физическая выносливость.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    2/2 или 5/2.
                                </JobText>
                            </Job>

                            <Job job={{
                                name: 'Официант на постоянную работу',
                                price: ' 1200 р./смена, ~ 24.000',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Честность, физическая выносливость.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    Скользящий.
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
