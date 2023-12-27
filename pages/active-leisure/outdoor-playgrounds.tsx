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
import SportObjectsMenu from '@/components/SportObjectsMenu'




export default function PageOutdoorPlaygrounds() {
    return (
        <>
            <Head>
                <title>Уличные спортивные площадки в парк-отеле «PLAZMA»</title>
                <meta name='description' content='это проект парк-отеля Plazma, 
                расположенного в Тульской области в 220 км. от Москвы, 
                ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.' />

                <meta
                    property='og:title'
                    content='Уличные спортивные площадки в парк-отеле «PLAZMA»' />
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
                        image='outdoor-playgrounds'
                        title='Уличные спортивные площадки'
                        description={`Наши спортивные площадки — это сочетание функциональности, 
                        безопасности и комфорта. Созданы для тех, кто стремится к победам и ценит качество каждой игры.`} />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-index__about-hotel about-hotel container' data-scroll-section>
                        <div className='about-hotel__wrapper'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__text'>«PLAZMA.SPORT»</span>
                                <span className='about-hotel__desc'>
                                    Откройте для себя наши универсальные открытые спортивные площадки, идеально подходящие для баскетбола,
                                    мини-футбола и классического волейбола. С идеальным освещением и просторным размером, наши площадки
                                    обеспечивают комфортные условия для любителей и профессионалов.
                                </span>

                            </div>

                            <picture className='about-hotel__img img_min'>
                                <Image width={670} height={420} src={'/img/active-leisure/outdoor-playgrounds/1.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                        </div>


                        <div className='about-hotel__wrapper reverse'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__desc'>
                                    Любителям пляжного волейбола мы предлагаем корты с качественным кварцевым песком, подходящие для игр
                                    и тренировок на открытом воздухе. Наши площадки, оборудованные для дневных сессий,
                                    ждут вас для проведения как тренировок, так и полноценных турниров.
                                </span>
                            </div>
                            <picture className='about-hotel__img img_min'>
                                <Image width={670} height={420} src={'/img/active-leisure/outdoor-playgrounds/2.webp'} alt=''
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

                    <div className='gallery-cards two-cards container'>
                        <Swiper
                            {...({
                                modules: [FreeMode, Pagination],
                                spaceBetween: 20,
                                breakpoints: {
                                    1: {
                                        centeredSlides: false,
                                        enabled: true,
                                        slidesPerView: 1.1,
                                    },
                                    500: {
                                        slidesPerView: 1.3,
                                    },
                                    800: {
                                        slidesPerView: 1.6,
                                    },
                                    1100: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        initialSlide: 2,
                                        enabled: false,
                                        onchange: (swiper) => swiper.update()
                                    },
                                },

                            } as any)}
                        >
                            <SwiperSlide>
                                <div className='gallery-card'
                                    data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                    <picture className='gallery-card__img'>
                                        <Image width={570} height={390} src={'/img/active-leisure/outdoor-playgrounds/3.webp'} alt=''
                                            loader={vkCloudLoader}
                                        />
                                    </picture>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='gallery-card'
                                    data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                    <picture className='meals-preview-card__img'>
                                        <Image width={570} height={390} src={'/img/active-leisure/outdoor-playgrounds/4.webp'} alt=''
                                            loader={vkCloudLoader}
                                        />
                                    </picture>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    <SportObjectForm obj={'ПЛЯЖНЫЙ ЦЕНТР'} />

                    <SportObjectsMenu />
                </div >
            </main >

        </>

    )
}
