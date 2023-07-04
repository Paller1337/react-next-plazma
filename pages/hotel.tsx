import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { hotelRooms } from '../data/hotelRooms'
import RoomObject, { RoomObjectProps } from '../components/objects/RoomObject'
import PlazmaSlider from '../components/PlazmaSlider'
import BookingPromo from '../components/bnovo/BookingPromo'
import Promo from '../components/Promo'
import { images } from 'imageImports'
import { useEffect, useMemo } from 'react'


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
                    <Promo imgUrl={images.backgrounds.imghotelWelcomePng} booking />

                    <div className='base-bg' data-scroll-section></div>


                    <div className='page-hotel__placement hotel-placement' data-scroll-section>
                        <span className='hotel-placement__title' data-scroll>Размещение</span>

                        <PlazmaSlider key={'hotelPromoSlider'} data='hotelPromoSlider' />

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
                        {rooms.map(x =>
                                <RoomObject
                                    key={'room-' + x.id.toString()}
                                    id={x.id}
                                    title={x.title}
                                    description={x.description}
                                    size={x.size}
                                    images={x.images}
                                    attributes={x.attributes}
                                    amenities={x.amenities}
                                />
                            )}

                            {/* <RoomObject
                                id={rooms[0].id}
                                title={rooms[0].title}
                                description={rooms[0].description}
                                size={rooms[0].size}
                                images={rooms[0].images}
                                attributes={rooms[0].attributes}
                                amenities={rooms[0].amenities}
                            />

                            <RoomObject
                                id={rooms[1].id}
                                title={rooms[1].title}
                                description={rooms[1].description}
                                size={rooms[1].size}
                                images={rooms[1].images}
                                attributes={rooms[1].attributes}
                                amenities={rooms[1].amenities}
                            />

                            <RoomObject
                                id={rooms[2].id}
                                title={rooms[2].title}
                                description={rooms[2].description}
                                size={rooms[2].size}
                                images={rooms[2].images}
                                attributes={rooms[2].attributes}
                                amenities={rooms[2].amenities}
                            />

                            <RoomObject
                                id={rooms[3].id}
                                title={rooms[3].title}
                                description={rooms[3].description}
                                size={rooms[3].size}
                                images={rooms[3].images}
                                attributes={rooms[3].attributes}
                                amenities={rooms[3].amenities}
                            />

                            <RoomObject
                                id={rooms[4].id}
                                title={rooms[4].title}
                                description={rooms[4].description}
                                size={rooms[4].size}
                                images={rooms[4].images}
                                attributes={rooms[4].attributes}
                                amenities={rooms[4].amenities}
                            />

                            <RoomObject
                                id={rooms[5].id}
                                title={rooms[5].title}
                                description={rooms[5].description}
                                size={rooms[5].size}
                                images={rooms[5].images}
                                attributes={rooms[5].attributes}
                                amenities={rooms[5].amenities}
                            /> */}
                        </div>
                    </div>

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
                    </div>

                </div >
            </main>

        </>

    )
}
