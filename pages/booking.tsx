import Head from 'next/head'
import { useContext, useEffect, useRef, useState } from 'react'
import { BnovoContext } from '../components/bnovo/bnovoContext'
import { MailSubscribe } from '@/components/modals/MailSubscribe'
import RulesModal from '@/components/modals/Rules'
declare var BookingIframe: any

export default function PageBooking() {
    const [isOpenRules, setIsOpenRules] = useState(false)
    const mailModalRef = useRef(null)

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpenRules(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <MailSubscribe ref={mailModalRef} />

            <RulesModal isOpen={isOpenRules} contentLabel={'123'} onRequestClose={() => setIsOpenRules(false)} />

            <Head>
                <title>Бронирование номера в парк-отеле «PLAZMA»</title>
                <meta name='description' content='При прямом бронировании действует скидка 16.7%.' />

                <meta
                    property='og:title'
                    content='Бронирование номера в парк-отеле «PLAZMA»' />
                <meta
                    property='og:description'
                    content='При прямом бронировании действует скидка 16.7%.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-booking'>
                <div className='relative main-wrap' data-scroll-container>
                    <div className='page-booking__about' data-scroll-section>
                        {/* <p id='tl-anchor'>С помощью приведенной ниже формы вы можете забронировать наши номера в режиме онлайн и получить гарантированную бронь.</p> */}
                        <div id="booking_iframe" className='container'></div>
                        {/* <div id='tl-booking-form'>&nbsp;</div> */}

                        <div className='big-p big-p_border-top container'>
                            <span className='big-p__title'>Правила бронирования:</span>
                            <span className='big-p__desc'>
                                Ниже указаны цены со скидкой.<br />

                                Бронируя или оплачивая услуги отеля вы принимаете условия договора публичной оферты.<br />
                                Подробнее о порядке оплаты бронирования тут.<br /><br />

                                <b>Общие условия:</b><br />
                                – Бронирование можно отменить с возвратом предоплаты не позднее 7 суток до даты заезда.<br />
                                – Для возврата денежных средств звоните администраторам: +7(48746) 5-18-24; +7(930) 897-77-01;
                                +7 (910) 168-17-61 (круглосуточно).<br />
                                – Поздняя аннуляция (7 суток и менее до заезда) или незаезд штрафуется в размере 1-х суток проживания.<br />
                                – Максимально можно забронировать на 7 суток. Для более длительного периода свяжитесь с администратором.<br /><br />

                                <b>Условия на новогодние праздники:</b><br />
                                – При бронировании требуется предоплата <b>100%</b> стоимости проживания.<br />
                                – Возврат предоплаты возможен только при аннуляции не позднее чем за <b>60 суток</b> до даты заезда.<br />
                                – При поздней аннуляции (менее 60 суток до даты заезда) или незаезде предоплата <b>не возвращается</b>.<br />
                            </span>
                        </div>

                    </div>
                    {/* <TouchSlider /> */}
                    {/* <div className='btn btn_dark' onClick={() => mailModalRef.current?.openModal()}>Txt</div> */}
                    <div className='base-bg' data-scroll-section></div>
                </div >
            </main>
        </>)
}
