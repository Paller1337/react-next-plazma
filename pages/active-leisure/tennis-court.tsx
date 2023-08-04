import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import PromoMin from '@/components/PromoMin'
import ColumnCard from '@/components/ColumnCard'
import RowCard from '@/components/RowCard'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination } from 'swiper'
import { useDeviceDetect } from '@/components/hooks/useDeviceDetect'
import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults'
import copy from '@/components/functions/copy'
import YoutubeVideo from '@/components/YoutubeVideo'
import TextBlock from '@/components/TextBlock'
import SportObjectForm from '@/components/SportObjectForm'




export default function PageTennisCourt() {
    const [objectsContent, setObjectsContent] = useState<JSX.Element>()
    const { isMobile, isDesktop } = useDeviceDetect()

    const mobileObjects =
        <div id='SportsObjects' className='column-cards--wrapper container --swiper-container'>
            <Swiper

                {...({
                    modules: [FreeMode, Pagination],
                    // slidesPerView: slidesInPreview,
                    spaceBetween: 20,
                    breakpoints: {
                        1: {
                            slidesPerView: 1.1,
                            centeredSlides: false,
                            enabled: true
                        },
                        420: {
                            slidesPerView: 1.2,
                            enabled: true
                        },
                        768: {
                            slidesPerView: 2.2,
                            centeredSlides: true,
                            enabled: true
                        },
                        1100: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            initialSlide: 2,
                            enabled: false,
                            onchange: (swiper) => swiper.update()
                        },
                    },

                } as any)}
            >
                <SwiperSlide>
                    <ColumnCard
                        title='площадка с резиновым покрытием'
                        desc={`Безопасная и удобная площадка с резиновым покрытием для волейбола, 
                                            баскетбола, мини-футбола и других активностей. Износостойкость, долговечность и 
                                            экологичность. Идеально подходит для детей и взрослых.`}
                        italicDesc={`Цена: от 700 руб/час`}
                        img={[
                            { h: 770, w: 570, src: '/img/active-leisure/col-1/1.webp' },
                            { h: 770, w: 570, src: '/img/active-leisure/col-1/2.webp' },
                            { h: 770, w: 570, src: '/img/active-leisure/col-1/3.webp' },
                            { h: 770, w: 570, src: '/img/active-leisure/col-1/4.webp' },
                        ]}
                        inSlider
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <ColumnCard
                        title='площадка для пляжных видов спорта'
                        desc={`Отличное место для пляжного волейбола, футбола и других активных 
                                            игр на песке. На ней вы сможете провести товарищеский матч, соревнования 
                                            или просто повесилиться с друзьями.`}
                        italicDesc={`Цена: от 700 руб/час`}
                        img={[
                            { h: 770, w: 570, src: '/img/active-leisure/col-3/1.webp' },
                            { h: 770, w: 570, src: '/img/active-leisure/col-3/2.webp' },
                            { h: 770, w: 570, src: '/img/active-leisure/col-3/3.webp' },
                        ]}
                        inSlider
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ColumnCard
                        title='Уличные тренажеры'
                        desc={`Оборудование, специально разработанное для тренировки на открытом воздухе.`}
                        italicDesc={`Цена: бесплатно`}
                        img={[
                            { h: 770, w: 570, src: '/img/active-leisure/col-2/1.webp' },
                            { h: 770, w: 570, src: '/img/active-leisure/col-2/2.webp' },
                            { h: 770, w: 570, src: '/img/active-leisure/col-2/3.webp' },
                        ]}
                        inSlider
                    />
                </SwiperSlide>
            </Swiper>
        </div>

    const desktopObjects =
        <div id='SportsObjects' className='column-cards--wrapper container'>
            <ColumnCard
                title='площадка с резиновым покрытием'
                desc={`Безопасная и удобная площадка с резиновым покрытием для волейбола, 
                                баскетбола, мини-футбола и других активностей. Износостойкость, долговечность и 
                                экологичность. Идеально подходит для детей и взрослых.`}
                italicDesc={`Цена: от 700 руб/час`}
                img={[
                    { h: 770, w: 570, src: '/img/active-leisure/col-1/1.webp' },
                    { h: 770, w: 570, src: '/img/active-leisure/col-1/2.webp' },
                    { h: 770, w: 570, src: '/img/active-leisure/col-1/3.webp' },
                    { h: 770, w: 570, src: '/img/active-leisure/col-1/4.webp' },
                ]}

            />

            <ColumnCard
                title='площадка для пляжных видов спорта'
                desc={`Отличное место для пляжного волейбола, футбола и других активных 
                                игр на песке. На ней вы сможете провести товарищеский матч, соревнования 
                                или просто повесилиться с друзьями.`}
                italicDesc={`Цена: от 700 руб/час`}
                img={[
                    { h: 770, w: 570, src: '/img/active-leisure/col-3/1.webp' },
                    { h: 770, w: 570, src: '/img/active-leisure/col-3/2.webp' },
                    { h: 770, w: 570, src: '/img/active-leisure/col-3/3.webp' },
                ]}
            />

            <ColumnCard
                title='Уличные тренажеры'
                desc={`Оборудование, специально разработанное для тренировки на открытом воздухе.`}
                italicDesc={`Цена: бесплатно`}
                img={[
                    { h: 770, w: 570, src: '/img/active-leisure/col-2/1.webp' },
                    { h: 770, w: 570, src: '/img/active-leisure/col-2/2.webp' },
                    { h: 770, w: 570, src: '/img/active-leisure/col-2/3.webp' },
                ]}
            />

        </div>

    useEffect(() => {
        if (isMobile) setObjectsContent(mobileObjects)
        else setObjectsContent(desktopObjects)
    }, [isMobile])

    return (
        <>
            <Head>
                <title>Теннисные корты в парк-отеле «PLAZMA»</title>
                <meta name='description' content='это проект парк-отеля Plazma, 
                расположенного в Тульской области в 220 км. от Москвы, 
                ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.' />

                <meta
                    property='og:title'
                    content='Теннисные корты в парк-отеле «PLAZMA»' />
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
                    <PromoMin
                        image='tennis-court'
                        title='ТЕННИСНЫЕ КОРТЫ'
                        description={`Мы любим спорт и поэтому предоставляем нашим единомышленникам 
                        комфортабельные условия для тренировок, питания и проживания.`} />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-index__about-hotel about-hotel container' data-scroll-section>
                        <div className='about-hotel__wrapper'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__text'>«PLAZMA.SPORT»</span>
                                <span className='about-hotel__desc'>
                                    Теннисный манеж располагает площадью 2600 м², включающей в
                                    себя 4 теннисные площадки с покрытием хард, 2 просторные раздевалки с душевыми,
                                    а также кабинет судьи и медицинский кабинет.
                                </span>

                                <span className='about-hotel__desc'>
                                    Мы готовы предложить вам комфортное и функциональное пространство для занятий теннисом на высшем уровне.
                                </span>
                            </div>

                            <picture className='about-hotel__img img_min'>
                                <Image width={670} height={420} src={'/img/active-leisure/tennis-court/1.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                        </div>


                        <div className='about-hotel__wrapper reverse'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-hotel__about'>
                                <div className='plazma-ui__list'>
                                    <span className='plazma-ui__list-title centered'>ХАРАКТЕРИСТИКИ</span>
                                    <ul>
                                        <li className='plazma-ui__list-item'>размер 25х44</li>
                                        <li className='plazma-ui__list-item'>высота потолка - 11 метров в коньке</li>
                                        <li className='plazma-ui__list-item'>профессиональное освещение</li>
                                        <li className='plazma-ui__list-item'>две раздевалки с душевыми вместимостью по 30 человек</li>
                                        <li className='plazma-ui__list-item'>смотровые трибуны вместимостью 58 человек</li>
                                        <li className='plazma-ui__list-item'>административный кабинет</li>
                                        <li className='plazma-ui__list-item'>медицинский кабинет</li>
                                        <li className='plazma-ui__list-item'>просторная зона ожидания с видео-трансляцией зала</li>
                                        <li className='plazma-ui__list-item'>спортивный паркет из бразильской гевеи</li>
                                    </ul>
                                </div>
                            </div>

                            <picture className='about-hotel__img img_min'>
                                <Image width={670} height={420} src={'/img/active-leisure/tennis-court/2.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                        </div>
                    </div>

                    <TextBlock title={{ type: 'h3', text: 'Медицинский кабинет' }}
                        description={[
                            `На территории теннисного корта есть медицинский кабинет. </br>
                            В нем присутствует все необходимое для оказания первой </br>
                            помощи спортсменам.`,
                        ]}
                        style={{ paddingBottom: 0 }}
                    />


                    <div className='gallery-cards container'>
                        <div className='gallery-card'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='gallery-card__img'>
                                <Image width={570} height={390} src={'/img/active-leisure/tennis-court/med-1.webp'} alt=''
                                    loader={vkCloudLoader}
                                />
                            </picture>
                        </div>

                        <div className='gallery-card'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='meals-preview-card__img'>
                                <Image width={570} height={390} src={'/img/active-leisure/tennis-court/med-2.webp'} alt=''
                                    loader={vkCloudLoader}
                                />
                            </picture>
                        </div>
                    </div>

                    <SportObjectForm />


                </div >
            </main >

        </>

    )
}
