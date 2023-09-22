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
import SportNews from '@/components/SportNews'
import TextBlock from '@/components/TextBlock'




export default function PageActiveLeisure() {
    const [objectsContent, setObjectsContent] = useState<JSX.Element>()
    const [vkGroudPosts, setVkGroudPosts] = useState()
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
                        italicDesc={`Цена: 700 руб/час`}
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
                        desc={`Отличное место с кварцевым песком для пляжного волейбола, футбола и других активных 
                            игр. На ней вы сможете провести товарищеский матч, соревнования 
                            или просто повесилиться с друзьями.`}
                        italicDesc={`Цена: 700 руб/час`}
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
                italicDesc={`Цена: 700 руб/час`}
                img={[
                    { h: 770, w: 570, src: '/img/active-leisure/col-1/1.webp' },
                    { h: 770, w: 570, src: '/img/active-leisure/col-1/2.webp' },
                    { h: 770, w: 570, src: '/img/active-leisure/col-1/3.webp' },
                    { h: 770, w: 570, src: '/img/active-leisure/col-1/4.webp' },
                ]}

            />

            <ColumnCard
                title='площадка для пляжных видов спорта'
                desc={`Отличное место с кварцевым песком для пляжного волейбола, футбола и других активных 
                    игр. На ней вы сможете провести товарищеский матч, соревнования 
                    или просто повесилиться с друзьями.`}
                italicDesc={`Цена: 700 руб/час`}
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
                    <PromoMin
                        image='active-leisure'
                        title='АКТИВНЫЙ ОТДЫХ В ПАРК-ОТЕЛЕ PLAZMA'
                        description={`Мы любим спорт и поэтому предоставляем нашим единомышленникам 
                        комфортабельные условия для тренировок, питания и проживания.`} />

                    <div className='base-bg' data-scroll-section></div>

                    
                    <SportNews />

                    <div id='AboutSport' className='page-events__welcome text-section text-section_big container' data-scroll-section>
                        <span className='h2-title'>«PLAZMA.SPORT»</span>
                        <span className='text'>
                            это проект парк-отеля Plazma, расположенного в Тульской области в 220 км. от
                            Москвы, ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.
                        </span>
                    </div>


                    <YoutubeVideo
                        title='Спорт в «PLAZMA»'
                        src='VVBzBIcLERU'
                        reverse
                    />

                    <div className='page-events__about-quatr about-quatr' data-scroll-section>
                        <div className='about-quatr__wrapper'
                            data-aos={'fade-right'} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-quatr__text'>
                                <h2>игровая площадка для детей</h2>
                                <span>Безопасная игровая площадка с разными развлечениями
                                    для детей. Качественное оборудование, способствующее активности
                                    и творчеству. Там создается дружба и хорошее настроение</span>
                                {/* <div className='btn btn_black popover pop-top'
                                    popover-data={'+7 (910) 168-17-61'}
                                    onClick={() => copy('+79101681761', 'Номер скопирован.', { metric: 'number' })}>
                                    Подробнее</div> */}
                            </div>
                            {/* <div className='about-quatr__image'
                                data-aos={'fade-left'} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                <Image src={images.activeLeisure.img1Png} width={970} height={700} alt='' placeholder='blur' />

                            </div> */}
                            <div className='about-quatr__slider'>
                                <Swiper
                                    {...({
                                        modules: [FreeMode, Pagination, Navigation],
                                        navigation: {
                                            enable: true
                                        },
                                        pagination: {
                                            enabled: true
                                        },
                                        spaceBetween: 20,
                                        slidesPerView: 1,
                                        // breakpoints: {
                                        //     1: {
                                        //         centeredSlides: false,
                                        //         enabled: true
                                        //     },
                                        //     420: {
                                        //         enabled: true
                                        //     },
                                        //     768: {
                                        //         centeredSlides: true,
                                        //         enabled: true
                                        //     },
                                        // },

                                    } as SwiperProps)}
                                >
                                    <SwiperSlide>
                                        <div style={{ position: 'relative', display: 'flex' }}>
                                            <Image src={'img/active-leisure/quatr-1/1.webp'} width={970} height={700} alt=''
                                                loader={vkCloudLoader}
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{ position: 'relative', display: 'flex' }}>
                                            <Image src={'img/active-leisure/quatr-1/2.webp'} width={970} height={700} alt=''
                                                loader={vkCloudLoader}
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{ position: 'relative', display: 'flex' }}>
                                            <Image src={'img/active-leisure/quatr-1/3.webp'} width={970} height={700} alt=''
                                                loader={vkCloudLoader}
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{ position: 'relative', display: 'flex' }}>
                                            <Image src={'img/active-leisure/quatr-1/4.webp'} width={970} height={700} alt=''
                                                loader={vkCloudLoader}
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{ position: 'relative', display: 'flex' }}>
                                            <Image src={'img/active-leisure/quatr-1/5.webp'} width={970} height={700} alt=''
                                                loader={vkCloudLoader}
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                        </div>
                    </div>

                    {objectsContent}

                    <div className='row-cards--wrapper container'>
                        <RowCard
                            title='пляжный корт'
                            desc={`Первый в Тульской области крытый зал для пляжных видов спорта с кварцевым подогреваемым 
                            песком. Глубина песка 40 см, фракция 0.1-0.63. В зале 4 пляжные площадки с местом для забега, 
                            2 раздевалки, трибуны на 100 человек. В летний период у нас работает 7 открытых площадок для 
                            пляжного волейбола с кварцевым песком.`}
                            italicDesc={`Цена: от 800 до 2000 руб/час`}
                            // img={{ h: 510, w: 770, src: images.activeLeisure.imgrow1Png }}
                            img={{ w: 770, h: 570, src: ['/img/active-leisure/row-1.webp'] }}
                            btn={{
                                link: '/active-leisure/beach-center',
                                text: 'Подробнее',
                            }}
                        />

                        <RowCard reverse
                            title='Универсальный спортивный зал'
                            desc={`Размер манежа составляет 25х44 метра, высота — 11 метров. Зал предназначен для мини-футбола, 
                            волейбола, баскетбола, танцев, гимнастики, единоборств. В манеже 2 раздевалки на 60 человек, 2 
                            кабинета для тренеров, трибуны и новейший мобильный инвентарь.`}
                            italicDesc={`Цена: до 2500 руб/час`}
                            // img={{ h: 510, w: 770, src: images.activeLeisure.imgrow2Png }}
                            img={{ w: 770, h: 570, src: ['/img/active-leisure/row-2.webp'] }}
                            btn={{
                                link: '/active-leisure/sports-hall',
                                text: 'Подробнее',
                            }}
                        />

                        <RowCard
                            title='Теннисный корт'
                            desc={`Площадь манежа составляет 2600 м2, куда входит 4 теннисные площадки с покрытием 
                            хард, 2 раздевалки с душевыми, кабинет судьи и медицинский кабинет.`}
                            italicDesc={`Цена: от 1400 до 1700 руб/час`}
                            // img={{ h: 510, w: 770, src: images.activeLeisure.imgrow3Png }}
                            img={{ w: 770, h: 570, src: ['/img/active-leisure/row-3.webp'] }}
                            btn={{
                                link: '/active-leisure/tennis-court',
                                text: 'Подробнее',
                            }}
                        />
                    </div>
                </div >
            </main >

        </>

    )
}
