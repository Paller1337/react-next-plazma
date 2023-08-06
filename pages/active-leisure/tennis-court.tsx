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




export default function PageTennisCourt() {
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
                        description={`Площадь манежа составляет 2600 м2, куда входит 4 теннисные площадки с покрытием хард, 
                        2 раздевалки с душевыми, кабинет судьи и медицинский кабинет.`} />

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

                            </div>

                            <picture className='about-hotel__img img_min'>
                                <Image width={670} height={420} src={'/img/active-leisure/tennis-court/1.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                        </div>


                        <div className='about-hotel__wrapper reverse'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__desc'>
                                    Мы готовы предложить вам комфортное и функциональное пространство для занятий теннисом на высшем уровне.
                                </span>
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


                    <div className='gallery-cards two-cards container'>
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

                    <SportObjectsMenu />
                </div >
            </main >

        </>

    )
}
