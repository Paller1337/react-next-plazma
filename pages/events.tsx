import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import PromoMin from '../components/PromoMin'
import vkCloudLoader from '@/mw/utils/imageLoader'
// import { images } from 'imageImports'

export default function PageEvents() {



    return (
        <>
            <Head>
                <title>Мероприятия в «PLAZMA»</title>
                {/* <meta name='description' content='Место отлично подходит для семейного 
                отдыха на природе, романтических выходных, торжественных и деловых мероприятий.' /> */}

                <meta
                    property='og:title'
                    content='Мероприятия в «PLAZMA»' />
                {/* <meta
                    property='og:description'
                    content='Место отлично подходит для семейного 
                    отдыха на природе, романтических выходных, торжественных и деловых мероприятий.' /> */}
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-events'>
                <div className='relative main-wrap' data-scroll-container>


                    <PromoMin
                        // imgUrl={images.backgrounds.imghotelEventsMinPng}
                        image='events'
                        title='МЕРОПРИЯТИЯ В ПАРК-ОТЕЛЕ PLAZMA'
                        description={`Мы можем стать площадкой, где вы сможете организовать мероприятия любого уровня, 
                        насладиться изысканной кухней и праздничной атмосферой.`} />

                    <div className='base-bg' data-scroll-section></div>

                    <div id='AboutEvents' className='page-events__welcome text-section text-section_big container' data-scroll-section>
                        <span className='h2-title'>Мероприятия в «PLAZMA»</span>
                        <span className='text'>
                            Вы можете использовать в качестве площадки наш банкетный зал, который трансформируется в конференц-зал,
                            пространство для дефиле, столовую для спортсменов. Вы можете найти места для выездной регистрации
                            или вручения дипломом и аттестатов на территории. У нас также есть ресторан, шатер на воде, летнее кафе.
                            Мероприятия для самых маленьких можно проводить на детских площадках. Организуйте день рождения или
                            девичник в беседке на набережной. Для групповых занятий для йоги у нас есть большой травяной пляж.
                            Для командных игр у нас универсальные спортивные площадки и крытые и открытые пляжные корты. Мы
                            открыты для обсуждения любых мероприятий.
                        </span>
                    </div>

                    <div className='page-events__about-quatr about-quatr' data-scroll-section>
                        <div className='about-quatr__wrapper'>
                            <div className='about-quatr__text'>
                                <h2>семейные торжества</h2>
                                <span>Сыграйте свадьбу. Отпразднуйте день рождения или юбилей с нами.</span>
                                {/* <div className='btn btn_black'>Подробнее</div> */}
                            </div>
                            <div className='about-quatr__image'>
                                <Image src='/img/events/family.webp' width={970} height={700} alt='' loader={vkCloudLoader}/>
                            </div>
                        </div>
                    </div>

                    <div id='PlazmaCelebrate' className='page-events__about-img-bg about-img-bg' data-scroll-section>
                        <picture className='about-img-bg__img' data-scroll data-scroll-speed="-4">
                            <img className='js--mobile-parallax' src='/img/events/about-img.webp' alt='Мероприятия в парк-отеле Plazma' />
                        </picture>


                        <div className='about-img-bg__inner'>
                            <picture className='about-img-bg__in-img'>
                                <img src='/img/events/about-img-bg-inner.webp' alt='' />
                            </picture>
                            <div className='about-img-bg__text'>
                                <h2>Праздничные и тематические мероприятия</h2>
                                <span>Детские площадки, пляж, шатер-ресторан или другие площадкимогут стать
                                    пространством для вашего тематического мероприятия, например, годовщины
                                    свадьбы, гендер-пати или детского дня рождения в стиле Смурфиков.</span>
                                {/* <div className='btn btn_black'>Подробнее</div> */}
                            </div>

                        </div>
                    </div>

                    <div id='Conferences' className='page-events__about-two-col about-two-col container' data-scroll-section>
                        <div className='about-two-col__left'>
                            <picture className='about-two-col__img'>
                                <img src='/img/events/corp-1.webp' alt='Мероприятия в парк-отеле Plazma' />
                            </picture>

                            <div className='about-two-col__text'>
                                <h2>Корпоративные мероприятия</h2>
                                <span>Конференц-зал вместимостью до 100 человек.<br />
                                    Проектор с выдвижным экраном и звуковое оборудование.<br />
                                    Возможность организации фуршета.<br />
                                </span>
                                {/* <!-- <div className='btn btn_black'>Подробнее</div> --> */}
                            </div>
                        </div>
                        <div className='about-two-col__right'>
                            <picture className='about-two-col__img'>
                                <img src='/img/events/corp-2.webp' alt='Мероприятия в парк-отеле Plazma' />
                            </picture>
                        </div>
                    </div>
                </div >
                {/* <Footer /> */}
            </main>
        </>

    )
}
