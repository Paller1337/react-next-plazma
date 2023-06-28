import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import PromoMin from '../components/PromoMin'
import ColumnCard from '../components/ColumnCard'
import RowCard from '../components/RowCard'




export default function PageActiveLeisure() {

    return (
        <>
            <main className='page page-events'>
                <div className='relative main-wrap' data-scroll-container>


                    <PromoMin imgUrl='/img/backgrounds/active-leisure-min.png'
                        title='АКТИВНЫЙ ОТДЫХ В ПАРК-ОТЕЛЕ PLAZMA'
                        description={`Мы любим спорт и поэтому предоставляем нашим единомышленникам 
                        комфортабельные условия для тренировок, питания и проживания.`} />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-events__welcome text-section text-section_big container' data-scroll-section>
                        <span className='h2-title'>«PLAZMA.SPORT»</span>
                        <span className='text'>
                            это проект парк-отеля Plazma, расположенного в Тульской области в 220 км. от
                            Москвы, ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.
                        </span>
                    </div>

                    <div className='page-events__about-quatr about-quatr' data-scroll-section>
                        <div className='about-quatr__wrapper'>
                            <div className='about-quatr__text'>
                                <h2>семейные торжества</h2>
                                <span>Сыграйте свадьбу. Отпразднуйте день рождения или юбилей.</span>
                                <div className='btn btn_black'>Подробнее</div>
                            </div>
                            <div className='about-quatr__image'>
                                <Image src='/img/active-leisure/1.png' width={970} height={700} alt='' />
                            </div>
                        </div>
                    </div>



                    <div className='column-cards--wrapper container'>

                        <ColumnCard
                            title='площадка с резиновым покрытием'
                            desc={`это проект парк-отеля Plazma, расположенного в Тульской области в 220 км.
                                    от Москвы, ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.`}
                            img={{ h: 770, w: 570, src: '/img/active-leisure/col-1.png' }}
                        />

                        <ColumnCard
                            title='игровая площадка для детей'
                            desc={`это проект парк-отеля Plazma, расположенного в Тульской области в 220 км.
                                    от Москвы, ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.`}
                            img={{ h: 770, w: 570, src: '/img/active-leisure/col-2.png' }}
                        />

                        <ColumnCard
                            title='площадка для пляжных видов спорта'
                            desc={`это проект парк-отеля Plazma, расположенного в Тульской области в 220 км.
                                    от Москвы, ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.`}
                            img={{ h: 770, w: 570, src: '/img/active-leisure/col-3.png' }}
                        />
                    </div>

                    <div className='row-cards--wrapper container'>

                        <RowCard
                            title='площадка для пляжных видов спорта'
                            desc={`это проект парк-отеля Plazma, расположенного в Тульской области в 220 км.
                                    от Москвы, ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.`}
                            img={{ h: 510, w: 770, src: '/img/active-leisure/row-1.png' }}
                        />

                        <RowCard reverse
                            title='площадка для пляжных видов спорта'
                            desc={`это проект парк-отеля Plazma, расположенного в Тульской области в 220 км.
                                    от Москвы, ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.`}
                            img={{ h: 510, w: 770, src: '/img/active-leisure/row-2.png' }}
                        />

                        <RowCard
                            title='площадка для пляжных видов спорта'
                            desc={`это проект парк-отеля Plazma, расположенного в Тульской области в 220 км.
                                    от Москвы, ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.`}
                            img={{ h: 510, w: 770, src: '/img/active-leisure/row-3.png' }}
                        />
                    </div>


                </div >

                <Footer />
            </main>

        </>

    )
}
