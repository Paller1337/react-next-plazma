import Head from 'next/head'
import Image from 'next/image'
import { aquatoryObjData } from '../data/aquatoryObj'
import AquatoryObject from '../components/objects/AquatoryObject'
import Promo from '../components/Promo'
import PlazmaSertItem from '../components/PlazmaSertItem'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { FreeMode, Lazy, Navigation, Pagination } from 'swiper'
import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults'
import RulesModal from '@/components/modals/Rules'
import { useState } from 'react'
import { Group, Stack, Text } from '@mantine/core'
import Link from 'next/link'


export default function PageAquatory() {

    return (
        <>
            <Head>
                <title>Акватория «PLAZMA»</title>
                <meta name='description' content='Plazma Акватория – это оазис внутри города, место, где гости могут 
                отвлечься от шума и суеты повседневной жизни и отдохнуть в объятиях природы.' />

                <meta
                    property='og:title'
                    content='Акватория «PLAZMA»' />
                <meta
                    property='og:description'
                    content='Plazma Акватория – это оазис внутри города, место, где гости могут 
                    отвлечься от шума и суеты повседневной жизни и отдохнуть в объятиях природы.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-aquatory'>
                <div className='relative main-wrap' data-scroll-container>
                    <Promo image='aquatory' />

                    <div className='base-bg' data-scroll-section></div>

                    <div id='AboutAquatory' className='page-aquatory__welcome text-section text-section_big container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                        <span className='h2-title'>Акватория «PLAZMA»</span>
                        <span className='text'>
                            Plazma Акватория – это оазис внутри города, место, где гости могут отвлечься от шума и суеты повседневной жизни и отдохнуть в объятиях природы.
                        </span>
                    </div>

                    <Stack m={'0 auto'} maw={690} px={12} pb={48}>
                        <Stack p={24} gap={8} bd={'1px solid #252525'}>
                            <Text fz={16}>
                                Вход в зону полуострова с бассейном доступен без проживания <b>при предварительной записи</b> по телефону 89101681761.
                            </Text>

                            <Text fz={16}>
                                Количество мест ограничено, чтобы поддерживать комфортное количество посетителей и создать для вас условия для приятного отдыха.
                            </Text>

                            <Text fz={16}>
                                <b>Стоимость входа (браслета): </b><br />
                                ▪ 1500₽ на весь день — для гостей от 5 лет<br />
                                ▪ До 5 лет — бесплатно (без шезлонга)
                            </Text>

                            <Text fz={16}>
                                Детям до 14 лет вход доступен только в сопровождении взрослого, имеющего браслет 👭
                            </Text>

                            <Text fz={16}>
                                <b>Включено:</b><br />
                                ▪ Пользование подогреваемым бассейном на полуострове<br />
                                ▪ Пользование водоемом<br />
                                ▪ Лежак<br />
                                ▪ Зонт<br />
                                ▪ Полотенце <br />(если желаете воспользоваться полотенцем, будет нужен депозит 1500 рублей наличным, которые вернутся вам после сдачи карты на полотенце)
                            </Text>

                            <Text fz={16}>
                                <b>Для проживающих в отеле гостей зона с бассейном доступна бесплатно</b>
                            </Text>
                        </Stack>
                    </Stack>







                    <div className='page-aquatory__promo-info promo-info container' data-scroll-section>
                        <div className='promo-info__upper'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='promo-info__text-wrapper'>
                                <span className='text-title uppercase'>Отдых для всей семьи</span>
                                <span className='text'>Акватория объединяет людей с разными интересами, у нас найдется занятие для каждого члена вашей семьи.
                                    Дети заводят новые знакомства на детской площадке или катаются на самокатах, подростки играют в волейбол или устраивают пикник,
                                    родители с удовольствием жарят шашлык на мангале, а бабушки и дедушки могут отдохнуть в тени под соснами, наслаждаясь природой.
                                </span>
                            </div>

                            {/* <picture className='img-big'>
                                <Image height={550} width={770} src={'/img/aquatory/1.webp'} alt='' />
                            </picture> */}

                            <div className='img-big'>

                                <Swiper
                                    {...({
                                        modules: [Lazy, FreeMode, Pagination, Navigation],
                                        navigation: {
                                            enable: true
                                        },

                                        spaceBetween: 20,
                                        breakpoints: {
                                            1: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                                height: 340
                                            },
                                            991: {
                                                slidesPerView: 1,
                                                centeredSlides: false,
                                                spaceBetween: 20,
                                                height: 360
                                            },
                                            1100: {
                                                slidesPerView: 1,
                                                initialSlide: 1,
                                            },
                                        },

                                    } as SwiperProps)}
                                >
                                    <SwiperSlide>
                                        <Image height={550} width={770} src={'/img/aquatory/0-1.webp'} alt=''
                                            loader={vkCloudLoader} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image height={550} width={770} src={'/img/aquatory/0-2.webp'} alt=''
                                            loader={vkCloudLoader} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image height={550} width={770} src={'/img/aquatory/0-3.webp'} alt=''
                                            loader={vkCloudLoader} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image height={550} width={770} src={'/img/aquatory/1.webp'} alt=''
                                            loader={vkCloudLoader} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image height={550} width={770} src={'/img/aquatory/1-2.webp'} alt=''
                                            loader={vkCloudLoader} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                        <div className='promo-info__bottom'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='img-med'>
                                <Image height={470} width={760} src={'/img/aquatory/2.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>

                            <picture className='img-low'>
                                <Image height={470} width={370} src={'/img/aquatory/3.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>

                        </div>

                        <div className='flex-row'>
                            <span className='footnote-text text-normal'>На территории работают аттестованные охранники-спасатели!</span>
                        </div>
                    </div>

                    {/* <div id='AquatoryPrice' className='page-aquatory__price container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                        <div className='worktime-section'>
                            <div className='aquatory-worktime__heading'>
                                <span className='title'>Время работы акватории</span>
                                <span className='text-normal'>с 10:00 до 22:00</span>
                            </div>

                            <span className='worktime-section__text' style={{ maxWidth: '100%' }}>
                                Вы можете посетить наш парк-отель, не проживая в
                                гостинице, воспользовавшись функцией дневного посещения. </span>

                            <div className='worktime-section__timetable'>
                                <span className='worktime-section__timetable-title'>Стоимость посещения</span>
                                <div className='worktime-section__timetable-content'>
                                    <div className='worktime-section__timetable-row'>
                                        <div className='worktime-section__timetable-box'>
                                            <span className='worktime-section__timetable-text'>Взрослые</span>
                                            <span className='worktime-section__timetable-text'>(11 лет и старше)</span>
                                        </div>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>400 рублей</span>
                                    </div>

                                    <div className='worktime-section__timetable-row'>
                                        <div className='worktime-section__timetable-box'>
                                            <span className='worktime-section__timetable-text'>Дети</span>
                                            <span className='worktime-section__timetable-text'>(5 - 10 лет)</span>
                                        </div>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>300 рублей</span>
                                    </div>

                                    <div className='worktime-section__timetable-row'>
                                        <div className='worktime-section__timetable-box'>
                                            <span className='worktime-section__timetable-text'>Дети</span>
                                            <span className='worktime-section__timetable-text'>(до 5 лет)</span>
                                        </div>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>бесплатно</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <picture className='page-aquatory__price-img'>
                            <Image width={1170} height={700} src={'/img/aquatory/5.webp'} alt='' loader={vkCloudLoader} />
                        </picture>
                    </div> */}


                    <div id='AquatoryPrice' className='page-aquatory__price reverse container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                        <div className='worktime-section'>
                            <div className='aquatory-worktime__heading'>
                                <span className='title'>Правила посещения акватории</span>
                            </div>

                            <div className='worktime-section__timetable rules-section'>
                                <div className='worktime-section__timetable-content'>
                                    <div className='worktime-section__timetable-row'>
                                        <ul>
                                            <li className='page-aquatory__list-item'>Приглашать диджеев, музыкантов гостям строго запрещено!</li>
                                            <li className='page-aquatory__list-item'>Запрещено использование личной музыкальной аппаратуры.</li>
                                            <li className='page-aquatory__list-item'>На всей территории Парк-отеля фото и видеосъёмка с
                                                дальнейшим использованием материалов в коммерческих целях запрещена!</li>
                                            <li className='page-aquatory__list-item'>Купание в водоёме лицам до 18 лет без сопровождения взрослых запрещено!</li>
                                            <li className='page-aquatory__list-item'>Вход на территорию в состоянии алкогольного опьянения запрещен.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <picture className='page-aquatory__price-img vert'>
                            <Image className='vert' width={470} height={700} src={'/img/aquatory/5-1.webp'} alt='' loader={vkCloudLoader} />
                        </picture>

                        <picture className='page-aquatory__price-img hor'>
                            <Image className='hor' width={1170} height={700} src={'/img/aquatory/5-2.webp'} alt='' loader={vkCloudLoader} />
                        </picture>
                    </div>

                    <div className='page-aquatory__props aquatory-props container separator-after' data-scroll-section>
                        <div className='aquatory-props__first'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='page-aquatory__list'>
                                <span className='page-aquatory__list-title'>На территории:</span>
                                <ul>

                                    <li className='page-aquatory__list-item'>Искусственный живой водоём 12000 кв.м.</li>
                                    <li className='page-aquatory__list-item'>Пляж</li>
                                    <li className='page-aquatory__list-item'>Кабинки для переодевания</li>
                                    <li className='page-aquatory__list-item'>Туалет</li>
                                    <li className='page-aquatory__list-item'>Душ</li>
                                    <li className='page-aquatory__list-item'>Столовая Smash</li>
                                    <li className='page-aquatory__list-item'>Шатёр-ресторан</li>
                                    <li className='page-aquatory__list-item'>Большие шахматы</li>
                                    <li className='page-aquatory__list-item'>Мини-зоопарк</li>
                                    <li className='page-aquatory__list-item'>2 детские площадки</li>
                                    <li className='page-aquatory__list-item'>Детская песочница</li>
                                    <li className='page-aquatory__list-item'>Воркаут площадка</li>
                                    {/* <li className='page-aquatory__list-item'>Беседки с мангалом (оплачивается дополнительно)
                                    </li> */}
                                    <li className='page-aquatory__list-item'>Полуостров с бассейном (оплачивается дополнительно)
                                    </li>
                                    <li className='page-aquatory__list-item'>Универсальные спортивные площадки (оплачивается дополнительно)</li>
                                    <li className='page-aquatory__list-item'>Волейбольные площадки (оплачивается дополнительно)
                                    </li>
                                </ul>
                            </div>

                            <picture className='aquatory-props__img'>
                                <Image width={1170} height={660} src={'/img/aquatory/6.webp'} alt='' loader={vkCloudLoader} />
                            </picture>
                        </div>

                        {/* <div className='aquatory-props__second'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='aquatory-props__img'>
                                <Image width={1170} height={638} src={'/img/aquatory/7.webp'} alt='' loader={vkCloudLoader} />
                            </picture>

                            <div className='page-aquatory__list'>
                                <span className='page-aquatory__list-title'>Дополнительно:</span>
                                <ul>
                                    <li className='page-aquatory__list-item'>Аренда шезлонга – 150 рублей.</li>
                                    <li className='page-aquatory__list-item'>Аренда полотенца (180х100) – 200 рублей + залог
                                        1000 рублей наличными.</li>
                                    <li className='page-aquatory__list-item'>Прокат веломобилей – 300 рублей (20 минут, 1 человек)</li>
                                    <li className='page-aquatory__list-item'>Прокат электролодок  – 300 рублей (5 минут, 2 человека)</li>
                                    <li className='page-aquatory__list-item'>Для детей в продаже имеются нарукавники, жилеты,
                                        круги для плавания, водяные пистолеты.</li>
                                    <li className='page-aquatory__list-item'>Масла для загара</li>
                                    <li className='page-aquatory__list-item'>Для игры в волейбол имеются мячи (на прокат)</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>

                    {aquatoryObjData.map((x, i) =>
                        <AquatoryObject
                            key={i}
                            id={x.id}
                            title={x.title}
                            description={x.description}
                            images={x.images}
                            priceTitleAdditional={x.priceTitleAdditional}
                            additionalItems={x.additionalItems}
                            includedImg={x.includedImg}
                            includedItems={x.includedItems}
                            priceCards={x.priceCards}
                            additionalText={x.additionalText}
                            attentionText={x.attentionText}
                            warningText={x.warningText}
                        />)}


                    <div className='aquatory-sert container'
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                        <span className='text'>Территория и бассейн зоны отдыха соответствуют всем санитарно-эпидемиологическим нормам.</span>
                        <span className='text'> По всем лабораторным исследованиям и анализам вода в нашем водоеме имеет самые лучшие показатели в Тульской области .</span>
                        <Group gap={32}>
                            <PlazmaSertItem img={'/img/aqua-san.webp'} />
                            <Stack>
                                <Link href={'/pdf/aquatory/Протокол-испытаний-воды.pdf'} target='_blank'>
                                    <Text fz={16} c='#252525' td={'underline'}>
                                        Протокол испытаний воды
                                    </Text>
                                </Link>

                                <Link href={'/pdf/aquatory/Протокол-испытаний-почвы.pdf'} target='_blank'>
                                    <Text fz={16} c='#252525' td={'underline'}>
                                        Протокол испытаний почвы
                                    </Text>
                                </Link>

                                <Link href={'/pdf/aquatory/Экспертное-заключение.pdf'} target='_blank'>
                                    <Text fz={16} c='#252525' td={'underline'}>
                                        Экспертное заключение
                                    </Text>
                                </Link>
                            </Stack>
                        </Group>
                    </div>
                </div >
            </main>
        </>

    )
}
