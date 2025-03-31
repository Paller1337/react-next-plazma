import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { hotelRooms } from '../data/hotelRooms'
import { RoomObjectProps } from '../components/objects/RoomObject'
import PlazmaSlider from '../components/PlazmaSlider'
import BookingPromo from '../components/bnovo/BookingPromo'
import Promo from '../components/Promo'
// import { images } from 'imageImports'
import React, { Suspense, lazy, useEffect, useMemo } from 'react'
import BlockLoader from '@/components/BlockLoader'
import { Rings } from 'react-loader-spinner'

import RoomObject from '../components/objects/RoomObject'
import { DEFAULTS } from 'defaults'
import TextBlock from '@/components/TextBlock'
import { Group, List, Stack, Text } from '@mantine/core'
import PetsRulesModal from '@/components/modals/PetsRulesModal'
import { useMediaQuery } from '@mantine/hooks'

// const RoomObject = lazy(() => import('../components/objects/RoomObject'))
// const PlazmaSlider = lazy(() => import('../components/PlazmaSlider'))

export async function getStaticProps() {
    return {
        props: {
            rooms: hotelRooms,
        },
    };
}


interface PageHotelProps {
    rooms: RoomObjectProps[]
}

const SNW = ({ children }: { children: string | React.ReactNode }) => {
    return (
        <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
    )
}

export default function PageHotel(props: PageHotelProps) {
    const isMobile = useMediaQuery('(max-width: 620px)')

    // const rooms = useMemo(() => hotelRooms.map(x => x), [])
    const rooms = props.rooms

    return (
        <>
            <Head>
                <title>Размещение в парк-отеле «PLAZMA»</title>
                <meta name='description' content='Место отлично подходит для семейного 
                отдыха на природе, романтических выходных, торжественных и деловых мероприятий.' />

                <meta
                    property='og:title'
                    content='Размещение в парк-отеле «PLAZMA»' />
                <meta
                    property='og:description'
                    content='Место отлично подходит для семейного 
                    отдыха на природе, романтических выходных, торжественных и деловых мероприятий.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-hotel'>
                <div className='relative main-wrap' data-scroll-container>
                    <Promo image='hotel' booking />

                    <div className='base-bg' data-scroll-section></div>


                    <div id='HotelPlacement' className='page-hotel__placement hotel-placement' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                        <span className='hotel-placement__title' data-scroll>Размещение</span>



                        <PlazmaSlider key={'hotelPromoSlider'} data='hotelPromoSlider' />

                        <span className='text' data-scroll
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            Вне зависимости от выбранного Вами варианта размещения, ваш отдых будет сопровождать уютная и
                            чистая территория.
                        </span>

                        <span className='text' data-scroll
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            Место отлично подходит для
                            семейного отдыха на природе, романтических выходных,
                            торжественных и деловых мероприятий. </span>

                    </div>



                    <div className='page-saunas__attention container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
                        data-aos-once={DEFAULTS.AOS.once} style={{ paddingTop: 0 }}>
                        <TextBlock title={{ type: 'h2', text: 'Правила бронирования' }}
                            style={{ paddingTop: 0, paddingBottom: 0 }}
                        />
                        <Stack gap={20} maw={700}>
                            <Stack gap={4}>
                                <Text fz={isMobile ? 18 : 20} fw={700}>Заезд и выезд</Text>
                                <Stack gap={4}>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>Ранний заезд возможен с 07:00, при наличии свободного и готового номера.</Text>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>Поздний выезд возможен до 17:00.</Text>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>Обе опции предоставляются по предварительному согласованию с администратором и оплачиваются дополнительно — 50% от стоимости номера.</Text>
                                </Stack>
                            </Stack>

                            <Stack gap={4}>
                                <Text fz={isMobile ? 18 : 20} fw={700}>Оплата и отмена бронирования</Text>
                                <Stack gap={4}>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>При бронировании взимается предоплата в размере 1 суток проживания.</Text>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>В случае отмены менее чем за 7 суток до даты заезда, предоплата не возвращается, за исключением ситуаций, индивидуально согласованных с администратором.</Text>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>По вопросам возврата денежных средств: <SNW><a style={{ color: '#252525', textDecoration: 'underline' }} href='tel:+79101681761'>+7 (910) 168-17-61</a></SNW> или <SNW><a style={{ color: '#252525', textDecoration: 'underline' }} href='tel:+79308977701'>+7 (930) 897-77-01</a></SNW></Text>
                                </Stack>
                            </Stack>

                            <Stack gap={4}>
                                <Text fz={isMobile ? 18 : 20} fw={700}>Незаезд</Text>
                                <Stack gap={4}>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>В случае незаезда взымается штраф в размере стоимости первых суток проживания.</Text>
                                </Stack>
                            </Stack>

                            <Stack gap={4}>
                                <Text fz={isMobile ? 18 : 20} fw={700}>Документы</Text>
                                <Stack gap={4}>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>При заселении требуется оригинал документа, удостоверяющего личность, для всех гостей.</Text>
                                </Stack>
                            </Stack>

                            <Stack gap={4}>
                                <Text fz={isMobile ? 18 : 20} fw={700}>Страховой депозит</Text>
                                <Stack gap={4}>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>При заезде вносится залог в размере от 5 000 до 10 000 рублей, в зависимости от категории номера и условий проживания.</Text>
                                </Stack>
                            </Stack>

                            <Stack gap={4}>
                                <Text fz={isMobile ? 18 : 20} fw={700}>Проживание с животными</Text>
                                <Group gap={4}>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>Перед бронированием просьба ознакомиться с</Text>
                                    <PetsRulesModal fz={isMobile ? 15 : 16} text='правилами проживания с животными.' />
                                </Group>
                            </Stack>

                            <Stack gap={8}>
                                <Text fz={isMobile ? 18 : 20} fw={700}>Бассейн и парковка (с 30 мая)</Text>
                                <Stack gap={4}>
                                    <Text fz={16} fw={600}>Услуги, включённые в стоимость проживания:</Text>
                                    <Stack gap={4}>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Посещение бассейна на полуострове</Text>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Шезлонг и полотенце</Text>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Парковка</Text>
                                    </Stack>
                                </Stack>

                                <Stack gap={4}>
                                    <Text fz={isMobile ? 15 : 16} fw={600}>Перечень категорий размещения, для которых указанные услуги включены в стоимость:</Text>
                                    <Stack gap={4}>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Австрийские таунхаусы</Text>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Таунхаусы</Text>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Коттеджи</Text>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Домики на набережной</Text>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Дачи</Text>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Номера категории «Комфорт с сауной»</Text>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Улучшенные номера</Text>
                                        <Text fz={isMobile ? 15 : 16} fw={400}>- Номера категории «Комфорт»</Text>
                                    </Stack>
                                </Stack>

                                <Stack gap={4}>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>Для гостей Спортивной деревни, 5 и 6 корпусов эти услуги не входят в стоимость проживания.</Text>
                                    <Text fz={isMobile ? 15 : 16} fw={400}>Проживающие в данных номерах могут приобрести услугу дополнительно — 800 ₽ с человека (от 5 лет).</Text>
                                </Stack>
                            </Stack>


                            <Stack gap={8}>
                                <Text fz={isMobile ? 18 : 20} fw={700}>Условия размещения дополнительных гостей</Text>
                                <Stack gap={4}>
                                    <List size={'xs'} styles={{ itemLabel: { fontSize: isMobile ? 15 : 16 }, item: { paddingBlock: 2 } }}>
                                        <List.Item>Взрослый (от 12 лет) — <SNW>доплата 1000 ₽/сутки</SNW></List.Item>
                                        <List.Item>Ребёнок (5–11 лет) — <SNW>доплата 500 ₽/сутки</SNW></List.Item>
                                        <List.Item>Дети до 5 лет размещаются бесплатно</List.Item>
                                    </List>
                                </Stack>
                            </Stack>
                        </Stack>
                        <div className='text-column'>

                            {/* <span className='text-normal'>
                                Возможен ранний заезд с 07:00 (при наличии свободного и готового номера). Возможен поздний выезд до 17:00. Услуги предоставляются при предварительном согласовании с администратором и оплачиваются дополнительно 50% от стоимости номера.
                            </span>
                            <span className='text-normal'>
                                При бронировании номера взимается оплата в размере 1х суток проживания.
                            </span>
                            <span className='text-normal'>
                                При отмене номера менее, чем за 7 суток до даты заезда, оплата 1х суток проживания не возвращается, кроме случаев, обговариваемых с
                                администратором индивидуально.
                            </span>
                            <span className='text-normal'>
                                Для возврата денежных средств позвоните 89101681761 или 89308977701.
                            </span>


                            <span className='text-normal'>
                                Незаезд штрафуется в размере первых суток проживания.
                            </span>

                            <span className='text-normal'>
                                Оригинал документа, удостоверяющего личность, обязателен для всех гостей.
                            </span>

                            <span className='text-normal'>
                                При заезде вносится страховой депозит в размере 5000–10000 рублей.
                            </span> */}

                            {/* <Group gap={4}>
                                <span className='text-normal'>
                                    Перед бронированием, пожалуйста, ознакомьтесь с
                                </span>
                                <PetsRulesModal text='правилами проживания с животными' />
                            </Group> */}

                            {/* <Stack p={12} bd={'1px solid #252525'}>
                                <span className='text-normal'>
                                    С 30 мая бассейн на полуострове (лежак + полотенце) и парковка включены в стоимость проживания.
                                </span>
                            </Stack> */}

                            {/* <Stack
                                pt={24}
                                // p={12}
                                // bd={'1px solid #252525'}
                                gap={4}
                            >
                                <Text fz={18} fw={500}>Условия размещения дополнительных гостей</Text>
                                <List size={'xs'} styles={{ itemLabel: { fontSize: 16 }, item: { paddingBlock: 2 } }}>
                                    <List.Item>Взрослый (от 12 лет) — <SNW>доплата 1000 ₽/сутки</SNW></List.Item>
                                    <List.Item>Ребёнок (5–11 лет) — <SNW>доплата 500 ₽/сутки</SNW></List.Item>
                                    <List.Item>Дети до 5 лет размещаются бесплатно</List.Item>
                                </List>
                            </Stack> */}
                        </div>
                    </div>

                    <div id='hotelRooms' className='page-hotel__rooms hotel-rooms' data-scroll-section>
                        <span className='hotel-rooms__title' data-scroll>Номера</span>

                        <div className='hotel-rooms__content' data-scroll>
                            {rooms.map((x, i) =>
                                <RoomObject
                                    key={'room-' + x.tlid.toString() + i}
                                    tlid={x.tlid}
                                    bnid={x.bnid}
                                    alert={x.alert}
                                    title={x.title}
                                    description={x.description}
                                    pets={x.pets}
                                    size={x.size}
                                    count={x.count}
                                    price={x.price}
                                    images={x.images}
                                    previews={x.previews}
                                    attributes={x.attributes}
                                    amenities={x.amenities}
                                />
                            )}
                        </div>
                    </div>
                    {/* 
                    <div className='page-hotel__faq hotel-faq' data-scroll-section>
                        <span className='hotel-faq__title' data-scroll>Вопросы и ответы</span>

                        <div className='hotel-faq__content container' data-scroll>
                            <div id='hotelFAQHandle' className='hotel-faq__item faq-item'>
                                <div className='faq-item__question'>
                                    <span className='faq-item__icon'>В</span>
                                    <span className='faq-item__text'>
                                        Будет ли у меня возможность питаться не покидая территорию отеля?
                                    </span>
                                    <span className='faq-item__toggle-btn'></span>
                                </div>

                                <div className='faq-item__answer'>
                                    <span className='faq-item__icon'>О</span>
                                    <div className='faq-item__content'>
                                        <span className='faq-item__text'>
                                            Да. На территории парк-отеля ежедневно работает ресторан и кафе «Smash».
                                            Помимо этого есть возможность сделать заказ прямо в номер.
                                        </span>

                                        <div className='flex-row gap-40'>
                                            <div className='faq-item__list'>
                                                <span className='faq-item__list-title'>Расписание работы ресторана:</span>

                                                <div className='faq-item__list-content list-end'>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                </div>
                                            </div>

                                            <div className='faq-item__list'>
                                                <span className='faq-item__list-title'>Расписание работы ресторана:</span>

                                                <div className='faq-item__list-content list-end'>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id='hotelFAQHandle' className='hotel-faq__item faq-item'>
                                <div className='faq-item__question'>
                                    <span className='faq-item__icon'>В</span>
                                    <span className='faq-item__text'>
                                        Будет ли у меня возможность питаться не покидая территорию отеля?
                                    </span>
                                    <span className='faq-item__toggle-btn'></span>
                                </div>

                                <div className='faq-item__answer'>
                                    <span className='faq-item__icon'>О</span>
                                    <div className='faq-item__content'>
                                        <span className='faq-item__text'>
                                            Да. На территории парк-отеля ежедневно работает ресторан и кафе «Smash».
                                            Помимо этого есть возможность сделать заказ прямо в номер.
                                        </span>

                                        <div className='flex-row gap-40'>
                                            <div className='faq-item__list'>
                                                <span className='faq-item__list-title'>Расписание работы ресторана:</span>

                                                <div className='faq-item__list-content list-end'>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                </div>
                                            </div>

                                            <div className='faq-item__list'>
                                                <span className='faq-item__list-title'>Расписание работы ресторана:</span>

                                                <div className='faq-item__list-content list-end'>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                    <span className='faq-item__list-item'>Пн. 11:00 - 23:00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div> */}

                </div >
            </main>

        </>

    )
}
