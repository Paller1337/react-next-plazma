import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
// import PromoBackground from '../../components/PromoBackground'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../../components/Button'
import PlazmaSlider from '../../components/PlazmaSlider'
import Promo from '../../components/Promo'
import Link from 'next/link'
import { DEFAULTS } from 'defaults'
// import { images } from 'imageImports'

export default function PageRestaurant() {



    return (
        <>
            <Head>
                <title>Ресторан «SMASH»</title>
                <meta name='description' content='Мы очень заботимся о качестве наших услуг, 
                поэтому практически все заказы мы делаем из-под ножа, используя самые свежие продукты, 
                чтобы гость не усомнился, что это блюдо было приготовлено специально для него.' />

                <meta
                    property='og:title'
                    content='Ресторан «SMASH»' />
                <meta
                    property='og:description'
                    content='Мы очень заботимся о качестве наших услуг, 
                    поэтому практически все заказы мы делаем из-под ножа, используя самые свежие продукты, 
                    чтобы гость не усомнился, что это блюдо было приготовлено специально для него.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-rest'>
                <div className='relative main-wrap' data-scroll-container>
                    {/* <Promo imgUrl={images.backgrounds.imghotelRestaurantPng} /> */}
                    <Promo image='rest' />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-rest__welcome rest-welcome' data-scroll-section>
                        <div className='big-p big-p_border container'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
                            data-aos-once={DEFAULTS.AOS.once}>
                            <span className='big-p__title'>Мы рады каждому гостю.</span>
                            <span className='big-p__desc'>
                                Мы очень заботимся о качестве наших услуг, поэтому практически все заказы мы делаем из-под ножа, используя самые свежие продукты,
                                чтобы гость не усомнился, что это блюдо было приготовлено специально для него.
                                Ресторан оформлен в темных коричневых тонах, предлагая укрыться от солнца летом и насладиться уютной обстановкой с камином зимой.
                            </span>

                            {/* <Link className='btn btn_black big-p__btn'
                                href={'https://disk.yandex.ru/i/Ppnk2wOmcpd01Q'}
                                target='_blank' rel='noopener noreferrer'>
                                Барное меню
                            </Link> */}

                            <Link className='btn btn_black big-p__btn'
                                href={'https://disk.yandex.ru/i/peP4mC-yM1HJqw'}
                                target='_blank' rel='noopener noreferrer'>
                                Меню ресторана
                            </Link>
                        </div>


                        {/* <!-- <div className='rest-welcome__images'>
                        <img className='visual visual-1' src='/img/rest/promo-1.png' alt='' data-scroll data-scroll-speed="5">
                            <img className='visual visual-2' src='/img/rest/promo-2.png' alt='' data-scroll data-scroll-speed="1">
                                <img className='visual visual-3' src='/img/rest/promo-3.png' alt='' data-scroll data-scroll-speed="2">
                                </div> --> */}

                        <PlazmaSlider key={'restSlider'} data='restSlider' />

                        <div className='rest-welcome__work-time worktime-section container'>
                            <div className='worktime-section__about'
                                data-aos={'fade-right'} data-aos-duration={DEFAULTS.AOS.duration}
                                data-aos-once={DEFAULTS.AOS.once}>
                                <span className='worktime-section__title'>Ресторан «PLAZMA»</span>
                                <span className='worktime-section__desc'>
                                    У нас есть столы на большие и маленькие компании, а также отдельные кабинки.
                                </span>
                            </div>

                            <div className='worktime-section__timetable'
                                data-aos={'fade-left'} data-aos-duration={DEFAULTS.AOS.duration}
                                data-aos-once={DEFAULTS.AOS.once}>
                                <span className='worktime-section__timetable-title'>Часы работы</span>
                                <div className='worktime-section__timetable-content'>
                                    <div className='worktime-section__timetable-row'>
                                        <span className='worktime-section__timetable-text'>Пн. - Пт.:</span>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>11:00 - 23:00</span>
                                    </div>

                                    <div className='worktime-section__timetable-row'>
                                        <span className='worktime-section__timetable-text'>Суббота:</span>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>11:00 - 02:00</span>
                                    </div>

                                    <div className='worktime-section__timetable-row'>
                                        <span className='worktime-section__timetable-text'>Воскресенье:</span>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>11:00 - 23:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='text-section text-section_med container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
                        data-aos-once={DEFAULTS.AOS.once}>
                        <span className='h2-title'>Банкеты и мероприятия</span>
                        <span className='text'>
                            В ресторане возможна организация мероприятий любого уровня.
                        </span>

                        <div className='btn-container'>
                            <div className='btn btn_black'>Банкетное меню</div>
                            <div className='btn btn_black'>Позвонить</div>
                        </div>
                    </div>


                    {/* <div className='footnote container' data-scroll-section>
                        <div className='text'>Ресторан Adachi - это ресторан в японском стиле, расположенный в самом сердце.
                        </div>
                    </div> */}
                </div >
            </main>
        </>

    )
}
