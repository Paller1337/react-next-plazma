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




export default function PageBeachCenter() {
    return (
        <>
            <Head>
                <title>Пляжный центр в парк-отеле «PLAZMA»</title>
                <meta name='description' content='это проект парк-отеля Plazma, 
                расположенного в Тульской области в 220 км. от Москвы, 
                ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.' />

                <meta
                    property='og:title'
                    content='Пляжный центр в парк-отеле «PLAZMA»' />
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
                        image='beach-center'
                        title='ПЛЯЖНЫЙ ЦЕНТР'
                        description={`Первый в Тульской области крытый зал для пляжных видов спорта с кварцевым подогреваемым песком.`} />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-index__about-hotel about-hotel container' data-scroll-section>
                        <div className='about-hotel__wrapper'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__text'>«PLAZMA.SPORT»</span>
                                <span className='about-hotel__desc'>
                                    Первый в Тульской области крытый зал для пляжных видов спорта с кварцевым подогреваемым песком.
                                    Глубина песка 40 см, фракция 0.1-0.63. В зале 4 пляжные площадки с местом для забега, 2 раздевалки,
                                    трибуны на 100 человек. В летний период у нас работает 7 открытых площадок для пляжного
                                    волейбола с кварцевым песком.
                                </span>

                            </div>

                            <picture className='about-hotel__img img_min'>
                                <Image width={670} height={420} src={'/img/active-leisure/beach/1.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                        </div>


                        <div className='about-hotel__wrapper reverse'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__desc'>
                                    У нас также есть мячи для пляжного футбола, для пляжного волейбола, мяч для регби, 
                                    судейское перекидное табло, электронное табло, техника для музыкального сопровождения.
                                </span>
                            </div>
                            <picture className='about-hotel__img img_min'>
                                <Image width={670} height={420} src={'/img/active-leisure/beach/2.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                        </div>
                    </div>

                    <TextBlock title={{ type: 'h3', text: 'Раздевалки и душевые' }}
                        description={[
                            `Две просторные раздевалки, вместимостью по 30 человек, </br>
                            которыми вы сможете пользоваться во время тренировок.</br></br>
                            В каждой раздевалке есть несколько комфортных душевых.`,
                        ]}
                        style={{ paddingBottom: 0 }}
                    />
                    <div className='gallery-cards three-cards container'>
                        <div className='gallery-card'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='gallery-card__img'>
                                <Image width={370} height={520} src={'/img/active-leisure/sports-hall/showers-1.webp'} alt=''
                                    loader={vkCloudLoader}
                                />
                            </picture>
                        </div>

                        <div className='gallery-card'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='gallery-card__img'>
                                <Image width={370} height={520} src={'/img/active-leisure/sports-hall/showers-2.webp'} alt=''
                                    loader={vkCloudLoader}
                                />
                            </picture>
                        </div>

                        <div className='gallery-card'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='gallery-card__img'>
                                <Image width={370} height={520} src={'/img/active-leisure/sports-hall/showers-3.webp'} alt=''
                                    loader={vkCloudLoader}
                                />
                            </picture>
                        </div>
                    </div>


                    <SportObjectForm obj={'ПЛЯЖНЫЙ ЦЕНТР'}/>

                    <SportObjectsMenu />
                </div >
            </main >

        </>

    )
}
