import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../../components/Button'
import PlazmaSlider from '../../components/PlazmaSlider'

export default function PageBanquetHall() {



    return (
        <>

            <main className='page page-smash'>
                <div className='relative' data-scroll-container>
                    <div className='main__promo' data-scroll-section>
                        <Header />
                        {/* @@include('./../components/_header.html',{ }) */}
                        <div className="main__video-wrapper">
                            <div className="main__video-box">
                                {/* <!-- <video className="main__video" muted loop autoplay>
                                <source src="video/bgvideo.webm" type="video/webm">

                                    <source src="video/bgvideo.mp4" type="video/mp4">
                                    </video> --> */}
                                <div className='main__welcome-bg welcome-banquet-hall'></div>
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
                                Наш банкетный зал - отличное место для особых событий и торжеств любого уровня. 
                                Он находится в отдельном здании, чтобы никто вам не помешал. 
                                Просторный и элегантный, он подарит вам ощущение особенности вашего события.  
                                У нас вы сможете провести свою свадьбу, юбилей, корпоративное мероприятие или что-то другое. 
                                Мы предлагаем разнообразные варианты оформления и меню, чтобы каждый гость остался доволен. 
                                Наш профессиональный персонал будет обслуживать вас с начала мероприятия до самого конца, 
                                мы готовы воплотить ваши идеи и позаботиться о каждой детали, чтобы ваше мероприятие было таким, как вы его задумали. 
                                
                            </span>

                            <div className='btn btn_black big-p__btn'>Наше меню</div>
                        </div>


                        <PlazmaSlider data='banquetHall' />

                        {/* 
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
                        </div> */}
                    </div>


                    <div className='footnote container' data-scroll-section>
                        <div className='text'>Пригласите своих гостей в наш банкетный зал и создайте яркие воспоминания.</div>
                    </div>
                    <Footer />
                </div >
            </main>
        </>

    )
}
