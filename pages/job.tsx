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
    job: { name: string, price: string, tag?: string }
    children: any
}

const Job = (props: IJob) => {
    return (
        <div className='job-item'>
            {props.job.tag ? <span className='job-item__job-name-tag mobile'>{props.job.tag}</span> : <></>}
            <div className='job-item__header'>
                <span className='job-item__job-name'>{props.job.name}{props.job.tag ? <span className='job-item__job-name-tag'>{props.job.tag}</span> : <></>}</span>
                <span className='job-item__job-price'>{props.job.price} р./месяц.</span>
            </div>
            <div className='job-item__body'>
                {props.children}
            </div>
        </div >
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
                            {/* <Job job={{
                                name: 'Посудомойщица',
                                tag: 'на лето',
                                price: '2100 р./смена, 37.800',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Добросовестность, физическая выносливость.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    3/2 - день, день, ночь. По 12 часов.
                                </JobText>
                            </Job> */}

                            {/* <Job job={{
                                name: 'Уборщица в столовую',
                                tag: 'на лето',
                                price: '1500 р./смена, 22.500',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Физическая выносливость, добросовестность.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    2/2 с 6:00 до 17:00 (11 часов).
                                </JobText>
                            </Job> */}
                            {/* 
                            <Job job={{
                                name: 'Повар',
                                tag: 'на лето',
                                price: '3000 р./смена, 45.000 - 63.000',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Опыт работы, физическая выностивость, ответственность, честность.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    4/2 и 2/2. Дневные и ночные смены с 8:00 до 20:00, с 10:00 до 22:00, с 20:00 до 8:00.
                                </JobText>
                            </Job> */}

                            {/* <Job job={{
                                name: 'Кухонный работник',
                                tag: 'на лето',
                                price: '2400 р./смена, 36.000 - 50.400',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Физическая выносливость, честность.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    4/2 и 2/2. Дневные и ночные смены с 8:00 до 20:00, с 20:00 до 8:00.
                                </JobText>
                            </Job> */}

                            {/* <Job job={{
                                name: 'Работник зала в столовую',
                                tag: 'на лето',
                                price: '2000 р./смена, 30.000 - 42.000',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Физическая выностивость, добросовестность.
                                </JobText>
                            </Job> */}

                            <Job job={{
                                name: 'Администраторы',
                                price: 'до 60.000',
                            }}>
                                <JobText bold>Мы предлагаем: </JobText>
                                <JobText>
                                    Своевременную выплату зарплаты, оплачиваемую стажировку, такси до дома в вечернее время, корпоративное питание, парковку для сотрудников, авансы, подарки сотрудникам и детям на Новый Год.
                                </JobText>
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
                                name: 'Дневные горничные',
                                price: 'до 78.000',
                            }}>
                                <JobText bold>Ставки по графику: </JobText>
                                <JobText>
                                    с 8:00 до 17:00 3000/смена
                                </JobText>
                                <JobText>
                                    с 8:00 до 20:00 3600/смена
                                </JobText>
                                <JobText>
                                    + квартальная премия
                                </JobText>
                                <JobText bold>Мы предлагаем: </JobText>
                                <JobText>
                                    Своевременную выплату зарплаты, оплачиваемую стажировку, такси до дома в вечернее время, корпоративное питание, авансы, парковка для сотрудников, подарки сотрудникам на Новый Год.
                                </JobText>
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
                                name: 'Официант на постоянную работу',
                                price: ' 1800 р./смена, ~ 27.000-29.000',
                            }}>
                                <JobText bold>Мы предлагаем: </JobText>
                                <JobText>
                                    Своевременную выплату зарплаты, такси до дома в вечернее время, корпоративное питание, авансы, парковка для сотрудников, подарки сотрудникам на Новый Год.
                                </JobText>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Честность, физическая выносливость.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    Скользящий. Смены с 7:00 до 19:00, с 11:00 до 23:00, с 14:00 до 02:00.
                                </JobText>
                            </Job>

                            {/* <Job job={{
                                name: 'Повар в ресторан',
                                price: '~ 40.000 - 60.000',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Опыт работы, физическая выносливость.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    Скользящий.
                                </JobText>
                            </Job> */}

                            {/* <Job job={{
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
                            </Job> */}

                            {/* <Job job={{
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
                            </Job> */}

                            {/* <Job job={{
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
                            </Job> */}


                            {/* <Job job={{
                                name: 'Менеджер по подбору персонала',
                                price: '~ 40.000',
                            }}>
                                <JobText bold>Требования: </JobText>
                                <JobText>
                                    Опыт работы, честность, отличные коммуникативные навыки.
                                </JobText>
                                <JobText bold>График: </JobText>
                                <JobText>
                                    5/2.
                                </JobText>
                            </Job> */}
                        </div>
                    </div>
                    <div className='base-bg' data-scroll-section></div>
                </div >
            </main>
        </>

    )
}
