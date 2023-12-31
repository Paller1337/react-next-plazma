import Image from 'next/image'
import Link from 'next/link'
import copy from './functions/copy'
import { useDeviceDetect } from './hooks/useDeviceDetect'

interface NYBookingRoomProps {
    title: string
    desc: string[]
    img: string
}

const Btn = () => {
    const { isMobile, isDesktop } = useDeviceDetect()

    if (isMobile) return (
        <a className='btn btn_white' href={'tel:+79101681761'}
            onClick={() => copy('+79101681761', 'Номер скопирован', { metric: 'number' })}>
            Забронировать
        </a>
    )

    if (isDesktop) return (
        <span className='btn btn_white'
            onClick={() => copy('+79101681761', 'Номер скопирован', { metric: 'number' })}>
            Забронировать
        </span>
    )
}

export default function NYBookingRoom(props: NYBookingRoomProps) {
    return (<>
        <div className='ny-booking-room'>
            <div className='ny-booking-room__image'>
                <Image src={props.img} height={310} width={470} alt='' />
                <div className='ny-booking-room__image-decorate'>
                    <div className='ny-booking-room__image-lines'>
                        <div className='ny-booking-room__image-line--up' />
                        <div className='ny-booking-room__image-line--left' />
                        <div className='ny-booking-room__image-line--right' />
                    </div>
                    <div className='ny-booking-room__image-logo'>
                        <object data='/svg/new-logo.svg' type='image/svg+xml' title='Главная' width={48} height={48}>
                            <img width={48} height={48} src='/img/new-logo.svg' alt='' />
                        </object>
                    </div>
                </div>
            </div>
            <div className='ny-booking-room__footer'>
                <div className='ny-booking-room__footer-desc'>
                    <span className='ny-booking-room__footer-title'>{props.title}</span>
                    {props.desc.map((x, i) =>
                        <span key={'ny-room-' + i} className='ny-booking-room__footer-text'>{x}</span>)}
                </div>

                <div className='ny-booking-room__btn-container'>
                    <Btn />
                </div>
            </div>
        </div>
    </>)
}