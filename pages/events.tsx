import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import PromoMin from '../components/PromoMin'

export default function PageEvents() {



    return (
        <>
            <main className='page page-events'>
                <div className='relative' data-scroll-container>
                    

                    <PromoMin imgUrl='/img/backgrounds/hotel-events-min.png' />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-events__welcome text-section text-section_big container' data-scroll-section>
                        <span className='h2-title'>Мероприятия в «PLAZMA»</span>
                        <span className='text'>
                            Акватория парк-отеля «PLAZMA» – это настоящий оазис, место, где гости могут отвлечься от шума и
                            суеты повседневной жизни и отдохнуть в успокаивающих объятиях природы. Если вы хотите
                            неторопливо искупаться или просто понежиться на солнце, акватория является идеальным местом,
                            чтобы расслабиться и зарядиться энергией. И когда день закончится, вы можете уединиться в
                            комфорте своего домика или роскошной гостевой комнаты, зная, что вы действительно нашли кусочек
                            рая на земле.
                        </span>
                    </div>

                    <div className='page-events__about-quatr about-quatr' data-scroll-section>
                        <div className='about-quatr__wrapper'>
                            <div className='about-quatr__text'>
                                <h2>семейные торжества</h2>
                                <span>Сыграйте свадьбу. Отпразднуйте день рождения или юбилей.</span>
                                <div className='btn btn_black'>Подробнее</div>
                            </div>
                            <div className='about-quatr__image'></div>
                        </div>
                    </div>

                    <div className='page-events__about-img-bg about-img-bg' data-scroll-section>
                        <picture className='about-img-bg__img' data-scroll data-scroll-speed="-4">
                            <img className='js--mobile-parallax' src='/img/events/about-img.png' alt='Мероприятия в парк-отеле Plazma' />
                        </picture>


                        <div className='about-img-bg__inner'>
                            <picture className='about-img-bg__in-img'>
                                <img src='/img/events/about-img-bg-inner.png' alt='' />
                            </picture>
                            <div className='about-img-bg__text'>
                                <h2>Праздничные и тематические мероприятия</h2>
                                <span>Вас ждет заветное событие на курорте One&Only. Отпразднуйте день рождения, юбилей или
                                    воссоединение семьи в самых эксклюзивных местах. Спланируйте свадьбу и медовый месяц
                                    своей мечты для действительно особенного начала вашей совместной жизни и позвольте нашей
                                    команде создать незабываемое и по-настоящему особенное событие.</span>
                                <div className='btn btn_black'>Подробнее</div>
                            </div>

                        </div>
                    </div>

                    <div className='page-events__about-two-col about-two-col container' data-scroll-section>
                        <div className='about-two-col__left'>
                            <picture className='about-two-col__img'>
                                <img src='/img/events/corp-1.png' alt='Мероприятия в парк-отеле Plazma' />
                            </picture>

                            <div className='about-two-col__text'>
                                <h2>Корпоративные мероприятия</h2>
                                <span>Конференц-зал вместимостью до 10 человек. <br />
                                    Проектор с выдвижным экраном и звуковое оборудование.<br />
                                    Возможность организации фуршета.
                                </span>
                                {/* <!-- <div className='btn btn_black'>Подробнее</div> --> */}
                            </div>
                        </div>
                        <div className='about-two-col__right'>
                            <picture className='about-two-col__img'>
                                <img src='/img/events/corp-2.png' alt='Мероприятия в парк-отеле Plazma' />
                            </picture>
                        </div>
                    </div>
                    <Footer />
                </div >
            </main>
        </>

    )
}
