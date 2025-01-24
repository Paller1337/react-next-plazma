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

export default function PageHotel(props: PageHotelProps) {

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

                        <div className='text-column'>

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
                                С 1 июня островок и стоянка включены в стоимость.
                            </span>

                            <span className='text-normal'>
                                Оригинал документа, удостоверяющего личность, обязателен для всех гостей.
                            </span>

                            <span className='text-normal'>
                                При заезде вносится страховой депозит в размере 5000–10000 рублей.
                            </span>
                        </div>
                    </div>

                    <div id='hotelRooms' className='page-hotel__rooms hotel-rooms' data-scroll-section>
                        <span className='hotel-rooms__title' data-scroll>Номера</span>

                        <div className='hotel-rooms__content' data-scroll>
                            {rooms.map(x =>
                                <RoomObject
                                    key={'room-' + x.tlid.toString()}
                                    tlid={x.tlid}
                                    bnid={x.bnid}
                                    alert={x.alert}
                                    title={x.title}
                                    description={x.description}
                                    pets={x.pets}
                                    size={x.size}
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
