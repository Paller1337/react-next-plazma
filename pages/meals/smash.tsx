import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
// import PromoBackground from '../../components/PromoBackground'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../../components/Button'
import PlazmaSlider from '../../components/PlazmaSlider'
import Promo from '../../components/Promo'
import { DEFAULTS } from 'defaults'
// import { images } from 'imageImports'

export default function PageSmash() {



    return (
        <>
            <Head>
                <title>Кафе SMASH в «PLAZMA»</title>
                <meta name='description' content='Кафе SMASH предлагает быструю и вкусную еду на завтрак,
                обед, ужин. Кроме того, вы можете прийти к нам на поздний ужин и перекусить роллами и пиццей.' />

                <meta
                    property='og:title'
                    content='Кафе «SMASH»' />
                <meta
                    property='og:description'
                    content='Кафе SMASH предлагает быструю и вкусную еду на завтрак,
                    обед, ужин. Кроме того, вы можете прийти к нам на поздний ужин и перекусить роллами и пиццей.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-smash'>
                <div className='relative main-wrap' data-scroll-container>

                    {/* <Promo imgUrl={images.backgrounds.imghotelSmashPng} /> */}

                    <Promo image='smash' />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-rest__welcome rest-welcome' data-scroll-section>
                        {/* <div className='big-p big-p_border container'>
                            <span className='big-p__title'>Мы рады каждому гостю.</span>
                            <span className='big-p__desc'>
                                Ресторан Adachi - это ресторан в японском стиле, расположенный в самом сердце
                                Бирмингема, штат Мичиган, в викторианском особняке Пибоди. Шеф-повар Ллойд Робертс
                                привносит с собой многолетний опыт и возглавляет команду кухни с инновациями и
                                превосходной техникой. Adachi предлагает множество гастрономических приключений с
                                множеством маленьких и больших тарелок, фирменными коктейлями и полным суши-баром,
                                оборудованным блюдами сашими и нигири, привезенными из Японии.
                            </span>

                            <div className='btn btn_black big-p__btn'>Наше меню</div>
                        </div> */}



                        <div className='rest-welcome__work-time worktime-section mb container'>
                            <div className='worktime-section__about'
                                data-aos={'fade-right'} data-aos-duration={DEFAULTS.AOS.duration}
                                data-aos-once={DEFAULTS.AOS.once}>
                                <span className='worktime-section__title'>Кафе «SMASH»</span>
                                <span className='worktime-section__desc'>Кафе SMASH предлагает быструю и вкусную еду на завтрак,
                                    обед, ужин. Кроме того, вы можете прийти к нам на поздний ужин и перекусить роллами и пиццей.
                                </span>
                            </div>

                            <div className='worktime-section__timetable'
                                data-aos={'fade-left'} data-aos-duration={DEFAULTS.AOS.duration}
                                data-aos-once={DEFAULTS.AOS.once}>
                                <span className='worktime-section__timetable-title'>Часы работы</span>
                                <div className='worktime-section__timetable-content'>
                                    <div className='worktime-section__timetable-row'>
                                        <span className='worktime-section__timetable-text'>Пн. - Вс.:</span>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>07:00 - 23:00</span>
                                    </div>
                                    <div className='worktime-section__timetable-row'>
                                        <span className='worktime-section__timetable-text'>Перерыв:</span>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>12:30 - 13:30</span>
                                    </div>
                                </div>

                                <span className='worktime-section__timetable-title'>Расписание кухни</span>
                                <div className='worktime-section__timetable-content'>
                                    <div className='worktime-section__timetable-row'>
                                        <span className='worktime-section__timetable-text'>Все меню:</span>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>07:00 - 19:00</span>
                                    </div>

                                    <div className='worktime-section__timetable-row'>
                                        <span className='worktime-section__timetable-text'>Роллы и пицца:</span>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>11:00 - 23:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <PlazmaSlider data='smashSlider' />
                    </div>

                </div >
            </main>
        </>

    )
}
