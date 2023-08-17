import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { saunaObjData } from '../data/saunaObj'
import SaunaObject from '../components/objects/SaunaObject'
import Promo from '../components/Promo'
import { DEFAULTS } from 'defaults'
import TextBlock from '@/components/TextBlock'


export default function PageSauna() {
    return (
        <>
            <Head>
                <title>Сауна «PLAZMA»</title>
                <meta name='description' content='Добро пожаловать в наш парк-отель, где время замедляется, 
                а умиротворение становится вашим верным спутником. Всегда было так, что именно в саунах и 
                банях люди находили путь к полному расслаблению и восстановлению души и тела.' />

                <meta
                    property='og:title'
                    content='Парк-отель «PLAZMA»' />
                <meta
                    property='og:description'
                    content='Добро пожаловать в наш парк-отель, где время замедляется, 
                    а умиротворение становится вашим верным спутником. Всегда было так, что именно в саунах и 
                    банях люди находили путь к полному расслаблению и восстановлению души и тела.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-saunas'>
                <div className='relative main-wrap' data-scroll-container>

                    <Promo image='saunas' bg='welcome-saunas'
                        btnGroup={{ text: 'Уточнить наличие свободных бань или забронировать', callbackBtn: true }}
                    />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-saunas__welcome text-section text-section_big container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
                        data-aos-once={DEFAULTS.AOS.once}>
                        <span className='h2-title'>Сауна «PLAZMA»</span>
                        <span className='text'>
                            Мы приглашаем вас в наш парк-отель, где каждый посетитель является гостем, а каждая сауна и баня
                            - уголком покоя и гармонии. Будьте готовы окунуться в исцеляющую атмосферу, которая наполнит вас
                            энергией и придаст новое сияние вашей жизни.
                        </span>
                    </div>

                    <div className='page-saunas__attention container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
                        data-aos-once={DEFAULTS.AOS.once} style={{ paddingTop: 0 }}>
                        <TextBlock title={{ type: 'h3', text: 'Правила бронирования' }}
                            style={{ paddingBottom: 10, paddingTop: 0 }}
                        />
                        <div className='text-column'>
                            <span className='text-normal'>
                                Бронирование бани осуществляется на основании задатка, внесённого гостем заблаговременно.
                            </span>
                            <span className='text-normal'>
                                При отмене бронирования менее, чем за 7 суток до даты посещения, задаток не возвращается, кроме случаев, обговариваемых с
                                администратором индивидуально.
                            </span>
                            <div className='text-list'>
                                <span className='text-list__title'>В иных случаях задаток возвращается при условии:</span>
                                <li className='text-list__item'>Cдачи бани на забронированное вами время другому гостю</li>
                                <li className='text-list__item'>Подтверждение диагноза COVID-19</li>
                            </div>

                            <span className='text-normal'>
                                Для возврата денежных средств, позвоните по телефонам  +7(48746) 5-18-24; +7(930) 897-77-01;
                                +7 (910) 168-17-61 администраторам (круглосуточно).<br />
                            </span>
                            <span className='text-normal'>
                                При посещении бани с гостя (заказчика) берётся страховочный залог от 2000 до 10000 рублей.
                            </span>
                            <span className='text-normal'>
                                Страховочный залог не возвращается или возвращается частично в случае порчи имущества или
                                сильного загрязнения помещения бани
                            </span>
                        </div>
                    </div>

                    <TextBlock title={{ type: 'h2', text: 'Бани' }}
                        style={{ paddingBottom: 10, paddingTop: 0 }}
                    />

                    {saunaObjData.map((x, i) =>
                        <SaunaObject
                            key={'sauna-' + x.id.toString()}
                            id={x.id}
                            name={x.name}
                            description={x.description}
                            aboutSize={x.aboutSize}
                            price={x.price}
                            sliderData={x.sliderData}
                        />
                    )}


                </div >
            </main>
        </>

    )
}
