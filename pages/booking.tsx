import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import PromoBackground from '../../components/PromoBackground'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import { BnovoContext } from '../components/bnovo/bnovoContext'
declare var Bnovo_Widget: any
declare var BookingIframe: any

export default function PageBooking() {


    const { bnovoIframeIsLoad } = useContext(BnovoContext)
    useEffect(() => {
        if (bnovoIframeIsLoad) {
            let Booking = new BookingIframe({
                html_id: 'booking_iframe',
                uid: 'd6ca513a-aef2-4aff-a639-9a3d1e3e692c',
                lang: 'ru',
                width: 'auto',
                height: 'auto',
                rooms: ''
            })
            Booking.init()
        }
    }, [bnovoIframeIsLoad])


    return (
        <>

            <main className='page page-booking'>
                <div className='relative' data-scroll-container>
                    <div className='page-booking__about' data-scroll-section>
                        <Header darken />


                        <div className='big-p big-p_border-top container'>
                            <span className='big-p__title'>Правила бронирования:</span>
                            <span className='big-p__desc'>
                                При прямом бронировании действует скидка 16.7%.<br />

                                Ниже указаны цены со скидкой.<br />

                                Бронируя или оплачивая услуги отеля вы принимаете условия договора публичной Оферты<br />

                                Подробнее о порядке оплаты бронирования тут.<br />

                                Внимание – бронирование можно отменить с возвратом предоплаты не позднее 7 суток до даты заезда.
                                Для возврата денежных средств, позвоните по телефонам  +7(48746) 5-18-24; +7(930) 897-77-01;
                                +7 (910) 168-17-61 администраторам (круглосуточно).<br />

                                Поздняя аннуляция (7 суток и менее до заезда) или незаезд штрафуется в размере 1х суток проживания.<br />

                                Максимально можно забронировать на 7 суток. При бронировании на более длительный срок свяжитесь с администратором по телефону.
                            </span>
                        </div>


                        <div id="booking_iframe" className='container'></div>

                    </div>

                    <div className='base-bg' data-scroll-section></div>
                    <Footer />
                </div >
            </main>
        </>

    )
}
