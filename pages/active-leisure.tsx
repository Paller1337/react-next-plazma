import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import PromoMin from '../components/PromoMin'
import ColumnCard from '../components/ColumnCard'
import RowCard from '../components/RowCard'
// import { images } from 'imageImports'




export default function PageActiveLeisure() {

    return (
        <>
            <Head>
                <title>Активный отдых в парк-отеле «PLAZMA»</title>
                <meta name='description' content='это проект парк-отеля Plazma, 
                расположенного в Тульской области в 220 км. от Москвы, 
                ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.' />

                <meta
                    property='og:title'
                    content='Активный отдых в парк-отеле «PLAZMA»' />
                <meta
                    property='og:description'
                    content='это проект парк-отеля Plazma, 
                    расположенного в Тульской области в 220 км. от Москвы, 
                    ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-events'>
                <div className='relative main-wrap' data-scroll-container>


                    <PromoMin imgUrl={'/img/backgrounds/active-leisure-min.webp'}
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
                                <h2>Уличные тренажеры</h2>
                                <span>Оборудование, специально разработанное для тренировки на открытом воздухе.</span>
                                <div className='btn btn_black'>Подробнее</div>
                            </div>
                            <div className='about-quatr__image'>
                                {/* <Image src={images.activeLeisure.img1Png} width={970} height={700} alt='' placeholder='blur' /> */}
                                <Image src={'/img/active-leisure/1.webp'} width={970} height={700} alt=''
                                //  placeholder='blur' 
                                />
                            </div>
                        </div>
                    </div>



                    <div className='column-cards--wrapper container'>

                        <ColumnCard
                            title='площадка с резиновым покрытием'
                            desc={`Безопасная и удобная площадка с резиновым покрытием для волейбола, 
                            баскетбола, мини-футбола и других активностей. Износостойкость, долговечность и 
                            экологичность. Идеально подходит для детей и взрослых.`}
                            // img={{ h: 770, w: 570, src: images.activeLeisure.imgcol1Png }}
                            img={{ h: 770, w: 570, src: '/img/active-leisure/col-1.webp' }}

                        />

                        <ColumnCard
                            title='игровая площадка для детей'
                            desc={`Безопасная игровая площадка с разными развлечениями 
                            для детей. Качественное оборудование, способствующее активности 
                            и творчеству. Там создается дружба и хорошее настроение`}
                            // img={{ h: 770, w: 570, src: images.activeLeisure.imgcol2Png }}
                            img={{ h: 770, w: 570, src: '/img/active-leisure/col-2.webp' }}
                        />

                        <ColumnCard
                            title='площадка для пляжных видов спорта'
                            desc={`Отличное место для пляжного волейбола, футбола и других активных 
                            игр на песке. На ней вы сможете провести товарищеский матч, соревнования 
                            или просто повесилиться с друзьями.`}
                            // img={{ h: 770, w: 570, src: images.activeLeisure.imgcol3Png }}
                            img={{ h: 770, w: 570, src: '/img/active-leisure/col-3.webp' }}
                        />
                    </div>

                    <div className='row-cards--wrapper container'>

                        <RowCard
                            title='пляжный корт'
                            desc={`Первый в Тульской области крытый зал для пляжных видов спорта с кварцевым подогреваемым 
                            песком. Глубина песка 40 см, фракция 0.1-0.63. В зале 4 пляжные площадки с местом для забега, 
                            2 раздевалки, трибуны на 100 человек. В летний период у нас работает 7 открытых площадок для 
                            пляжного волейбола с кварцевым песком.`}
                            // img={{ h: 510, w: 770, src: images.activeLeisure.imgrow1Png }}
                            img={{ h: 770, w: 570, src: '/img/active-leisure/row-1.webp' }}
                        />

                        <RowCard reverse
                            title='Универсальный спортивный зал'
                            desc={`Размер манежа составляет 25х44 метра, высота — 11 метров. Зал предназначен для мини-футбола, 
                            волейбола, баскетбола, танцев, гимнастики, единоборств. В манеже 2 раздевалки на 60 человек, 2 
                            кабинета для тренеров, трибуны и новейший мобильный инвентарь.`}
                            // img={{ h: 510, w: 770, src: images.activeLeisure.imgrow2Png }}
                            img={{ h: 770, w: 570, src: '/img/active-leisure/row-2.webp' }}
                        />

                        <RowCard
                            title='Теннисный корт'
                            desc={`Площадь манежа составляет 2600 м2, куда входит 4 теннисные площадки с покрытием 
                            хард, 2 раздевалки с душевыми, кабинет судьи и медицинский кабинет.`}
                            // img={{ h: 510, w: 770, src: images.activeLeisure.imgrow3Png }}
                            img={{ h: 770, w: 570, src: '/img/active-leisure/row-3.webp' }}
                        />
                    </div>


                </div >

                {/* <Footer /> */}
            </main>

        </>

    )
}
