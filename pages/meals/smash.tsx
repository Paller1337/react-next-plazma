import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PromoBackground from '../../components/PromoBackground'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../../components/Button'
import PlazmaSlider from '../../components/PlazmaSlider'

export default function PageSmash() {



    return (
        <>

            <main className='page page-smash'>
                <div className='relative' data-scroll-container>
                    <div className='main__promo' data-scroll-section>

                        <Header />
                        <div className="main__video-wrapper">
                            <div className="main__video-box">
                                {/* <!-- <video className="main__video" muted loop autoplay>
                                <source src="video/bgvideo.webm" type="video/webm">

                                    <source src="video/bgvideo.mp4" type="video/mp4">
                                    </video> --> */}
                                <div className='main__welcome-bg welcome-smash'></div>
                                <div className='main__video-overlay'></div>
                            </div>
                        </div>
                        <div className='main__promo-logo'>
                            <h1>
                                <span>парк-отель</span>
                                <span>plazma</span>
                            </h1>
                        </div>

                        {/* @@include('./../components/_promo-action.html',{ }) */}
                    </div>

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-rest__welcome rest-welcome' data-scroll-section>
                        <div className='big-p big-p_border container'>
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
                        </div>

                        <PlazmaSlider data='smashSlider' />



                        <div className='rest-welcome__work-time worktime-section container'>
                            <div className='worktime-section__about'>
                                <span className='worktime-section__title'>Столовая «SMASH»</span>
                                <span className='worktime-section__desc'>Ресторан Adachi - это ресторан в японском стиле, расположенный
                                    в
                                    самом сердце Бирмингема, штат Мичиган, в викторианском особняке Пибоди. </span>
                            </div>

                            <div className='worktime-section__timetable'>
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
                                        <span className='worktime-section__timetable-text'>11:00 - 23:00</span>
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


                    <div className='footnote container' data-scroll-section>
                        <div className='text'>Ресторан Adachi - это ресторан в японском стиле, расположенный в самом сердце.</div>
                    </div>
                    <Footer />
                </div >
            </main>
        </>

    )
}
