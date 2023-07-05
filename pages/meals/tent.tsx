import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../../components/Button'
import PlazmaSlider from '../../components/PlazmaSlider'
import Promo from '../../components/Promo'
// import { images } from 'imageImports'

export default function PageTent() {



    return (
        <>
            <Head>
                <title>Летний шатер «PLAZMA»</title>
                <meta name='description' content='Расположенный на полуострове, 
                он предлагает неповторимую атмосферу и вид на водоем. В нашем 
                шатре вы сможете насладиться прохладными напитками и изысканными 
                блюдами, приготовленными нашими опытными поварами.' />

                <meta
                    property='og:title'
                    content='Летний шатер «PLAZMA»' />
                <meta
                    property='og:description'
                    content='Расположенный на полуострове, 
                    он предлагает неповторимую атмосферу и вид на водоем. В нашем 
                    шатре вы сможете насладиться прохладными напитками и изысканными 
                    блюдами, приготовленными нашими опытными поварами.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-smash'>
                <div className='relative main-wrap' data-scroll-container>
                    {/* <Promo imgUrl={images.backgrounds.imgtentJpg} /> */}
                    
                    <Promo imgUrl={'/img/backgrounds/tent.webp'} />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-rest__welcome rest-welcome' data-scroll-section>
                        <div className='big-p big-p_border container'>
                            <span className='big-p__title'>Мы рады каждому гостю.</span>
                            <span className='big-p__desc'>
                                Расположенный на полуострове, он предлагает неповторимую атмосферу и вид на водоем.
                                В нашем шатре вы сможете насладиться прохладными напитками и изысканными блюдами, приготовленными нашими опытными поварами.
                                Мы стремимся создать комфортное пространство, где вы сможете расслабиться и насладиться приятной беседой с друзьями или близкими.
                                Независимо от того, ищете ли вы место для романтического ужина или большой семейной встречи,
                                наш летний шатер-ресторан позволит насладиться приятными моментами на свежем воздухе в уютной обстановке.
                            </span>

                            <div className='btn btn_black big-p__btn'>Наше меню</div>
                        </div>



                        <PlazmaSlider data='summerTentSlider' />


                        {/* <div className='rest-welcome__work-time worktime-section container'>
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
                        <div className='text'>Ресторан Adachi - это ресторан в японском стиле, расположенный в самом сердце.</div>
                    </div>
                </div >
                {/* <Footer /> */}
            </main>
        </>

    )
}
