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
import { Group, List, Stack, Title, useMantineTheme, Text } from '@mantine/core'
import PlazmaSertItem from '@/components/PlazmaSertItem'
import SNW from '@/components/SNW'
import { useMediaQuery } from '@mantine/hooks'




export default function PageSportsHall() {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    return (
        <>
            <Head>
                <title>Универсальный спортивный зал в парк-отеле «PLAZMA»</title>
                <meta name='description' content='это проект парк-отеля Plazma, 
                расположенного в Тульской области в 220 км. от Москвы, 
                ориентированный на проведение спортивных сборов, турниров и товарищеских матчей.' />

                <meta
                    property='og:title'
                    content='Универсальный спортивный зал в парк-отеле «PLAZMA»' />
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
                        image='sports-hall'
                        title='УНИВЕРСАЛЬНЫЙ СПОРТИВНЫЙ ЗАЛ'
                        description={`Размер манежа составляет 25х44 метра, высота — 11 метров. Зал предназначен для мини-футбола, 
                        волейбола, баскетбола, танцев, гимнастики, единоборств.`} />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-index__about-hotel about-hotel container' data-scroll-section>
                        <div className='about-hotel__wrapper'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__text'>«PLAZMA.SPORT»</span>
                                <span className='about-hotel__desc'>
                                    В манеже есть мобильный инвентарь, которым вы сможете пользоваться во время сборов и соревнований.
                                </span>
                                <span className='about-hotel__desc'>
                                    У нас также есть мячи для классического волейбола, футбола, баскетбола, ролл-маты,
                                    ковры для гимнастики, электронное табло, техника для музыкального сопровождения.
                                </span>

                            </div>

                            <picture className='about-hotel__img img_min'>
                                <Image width={670} height={420} src={'/img/active-leisure/sports-hall/1.webp'} alt=''
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
                                <Image width={670} height={420} src={'/img/active-leisure/sports-hall/2.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                        </div>
                    </div>

                    <YoutubeVideo
                        src='0WquoVgdKgg'
                        title='Высококачественный паркет'
                        desc={`Паркет <b>прошёл испытания</b> Центральной научно-исследовательской лабораторией в области физической культуры и спорта. </br></br>
                        Лаборатория одобрила проведение тренировок и турниров на нашем паркете для спортсменов разных возрастов и уровней физической подготовки. </br></br>
                        <b>Параметры испытний по ГОСТу:</b></br>
                        поглощение удара — 61%,</br>
                        вертикальный отскок мяча — 93,7%,</br>
                        сопротивление скольжению — 83.</br>
                        `}
                    />
                    <TextBlock title={{ type: 'h3', text: 'Раздевалки и душевые' }}
                        description={[
                            `Две просторные раздевалки, вместимостью по 30 человек, </br>
                            которыми вы сможете пользоваться во время тренировок.</br></br>
                            В каждой раздевалке есть несколько комфортных душевых.`,
                        ]}
                        style={{ paddingBottom: 0 }}
                    />

                    <div className='gallery-cards three-cards container'>
                        <Swiper
                            {...({
                                modules: [FreeMode, Pagination],
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
                                        // centeredSlides: true,
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
                                <div className='gallery-card'
                                    data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                    <picture className='gallery-card__img'>
                                        <Image width={370} height={520} src={'/img/active-leisure/sports-hall/showers-1.webp'} alt=''
                                            loader={vkCloudLoader}
                                        />
                                    </picture>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='gallery-card'
                                    data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                    <picture className='gallery-card__img'>
                                        <Image width={370} height={520} src={'/img/active-leisure/sports-hall/showers-2.webp'} alt=''
                                            loader={vkCloudLoader}
                                        />
                                    </picture>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='gallery-card'
                                    data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                    <picture className='gallery-card__img'>
                                        <Image width={370} height={520} src={'/img/active-leisure/sports-hall/showers-3.webp'} alt=''
                                            loader={vkCloudLoader}
                                        />
                                    </picture>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    <TextBlock title={{ type: 'h3', text: 'Кабинет для тренеров' }}
                        description={[
                            `Кабинет на втором ярусе манежа — это рабочая зона для </br>
                            администрации команды. Вы сможете им воспользоваться в любой </br>
                             момент тренировки.`,
                        ]}
                        style={{ paddingBottom: 0, marginTop: 50 }}
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
                                        <Image width={570} height={390} src={'/img/active-leisure/sports-hall/trainer-1.webp'} alt=''
                                            loader={vkCloudLoader}
                                        />
                                    </picture>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='gallery-card'
                                    data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                    <picture className='gallery-card__img'>
                                        <Image width={570} height={390} src={'/img/active-leisure/sports-hall/trainer-2.webp'} alt=''
                                            loader={vkCloudLoader}
                                        />
                                    </picture>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <Group gap={12} justify={mobile ? 'center' : 'space-between'} py={mobile ? 48 : 96} maw={1170} m={'0 auto'}>
                        <Stack gap={12} maw={mobile ? '100%' : '70%'}>
                            <Title style={{ fontFamily: 'Lora' }} fw={400} tt={'uppercase'} c={'#252525'} order={4} size={mobile ? 20 : 'h4'}>Сертифицированный спортивный объект</Title>
                            <Text style={{ fontFamily: 'Lora' }} lh={'140%'} c={'#252525'} fw={400} size={mobile ? '15px' : '17px'}>
                                Многофункциональный спортивный зал, расположенный по адресу: Тульская область, г. Донской, микрорайон Центральный, ул. Никольская, прошёл добровольную сертификацию по системе <b>«РОССПОРТСЕРТИФИКАТ. БЕЗОПАСНОСТЬ, КАЧЕСТВО, ДОСТУПНОСТЬ»</b>.
                            </Text>

                            <Stack gap={4} py={12}>
                                <Text lh={'140%'} c={'#252525'} fw={500} size={mobile ? '15px' : '17px'}>Объект соответствует требованиям:</Text>
                                <List size={'xs'} styles={{ itemLabel: { fontSize: mobile ? 15 : 17 }, item: { paddingBlock: 2 } }}>
                                    <List.Item><SNW>п. 5.1, 5.3 ГОСТ Р 52025-2021</SNW></List.Item>
                                    <List.Item><SNW>п. 5 ГОСТ Р 55529-2013</SNW></List.Item>
                                </List>
                            </Stack>

                            <Stack gap={2}>
                                <Text lh={'140%'} c={'#252525'} fw={400} size={mobile ? '15px' : '17px'}>
                                    Срок действия сертификата: <b> с 14 февраля 2025 г. по 14 февраля 2028 г.</b>
                                </Text>
                                <Text lh={'140%'} c={'#252525'} fw={400} size={mobile ? '15px' : '17px'}>
                                    Орган по сертификации: ООО «НИИ ПБСС»
                                </Text>
                            </Stack>

                            <Text lh={'140%'} c={'#252525'} fw={400} size={mobile ? '15px' : '17px'}>
                                Сертификация подтверждает соответствие спортивного зала современным требованиям безопасности и качества.
                            </Text>


                        </Stack>

                        <PlazmaSertItem img={'/img/certificate.webp'} />
                    </Group>

                    <SportObjectForm obj={'УНИВЕРСАЛЬНЫЙ СПОРТИВНЫЙ ЗАЛ'} />
                    <SportObjectsMenu />
                </div >
            </main >

        </>

    )
}
