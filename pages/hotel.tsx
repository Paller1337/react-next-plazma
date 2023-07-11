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

const RoomObject = lazy(() => import('../components/objects/RoomObject'))

interface PageHotelProps {
    rooms: RoomObjectProps[]
}

export default function PageHotel(props: PageHotelProps) {

    const rooms = useMemo(() => hotelRooms.map(x => x), [])
    // const rooms = hotelRooms
    useEffect(() => console.log('render'), [rooms])

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


                    <div id='HotelPlacement' className='page-hotel__placement hotel-placement' data-scroll-section>
                        <span className='hotel-placement__title' data-scroll>Размещение</span>

                        {/* <PlazmaSlider key={'hotelPromoSlider'} data='hotelPromoSlider' /> */}

                        <span className='text' data-scroll>
                            Вне зависимости от выбранного Вами варианта размещения, ваш отдых будет сопровождать уютная и
                            чистая территория.
                        </span>

                        <span className='text' data-scroll>
                            Место отлично подходит для
                            семейного отдыха на природе, романтических выходных,
                            торжественных и деловых мероприятий. </span>

                    </div>


                    <div id='hotelRooms' className='page-hotel__rooms hotel-rooms' data-scroll-section>
                        <span className='hotel-rooms__title' data-scroll>Номера</span>

                        <div className='hotel-rooms__content' data-scroll>
                            {/* {rooms.map(x =>
                                <Suspense
                                    key={'sus-room-' + x.id.toString()}
                                    fallback={<div>Loading...</div>}>

                                    <RoomObject
                                        key={'room-' + x.id.toString()}
                                        id={x.id}
                                        title={x.title}
                                        description={x.description}
                                        size={x.size}
                                        images={x.images}
                                        previews={x.previews}
                                        attributes={x.attributes}
                                        amenities={x.amenities}
                                    />
                                </Suspense>
                            )} */}
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
