import { useContext, useEffect, useRef, useState } from 'react';
import { TLContext } from './tlContext';
import { useRouter } from 'next/router';
declare var Bnovo_Widget: any



export default function BookingRoom(room: { roomId: number | number[], targetId: string }) {
    const btnRef = useRef<HTMLDivElement | null>(null)
    const targetSection = useRef<HTMLDivElement | null>(null)
    const { tlIsLoad } = useContext(TLContext)
    const [bnovoIsOpen, setBnovoIsOpen] = useState(false)

    const rooms = room.roomId.toString()

    // useEffect(() => { console.log(window.location.origin) }, [])
    // const openRoomBooking = (id: string, target: string) => {
    //     if (bnovoIsOpen) return
    //     Bnovo_Widget.init(function () {
    //         setBnovoIsOpen(true)
    //         Bnovo_Widget.open(`${target}`, {
    //             type: "vertical",
    //             uid: "d6ca513a-aef2-4aff-a639-9a3d1e3e692c",
    //             lang: "ru",
    //             width: "100%",
    //             background: "#ffffff",
    //             bg_alpha: "0",
    //             border: "on",
    //             border_color: "#dddddd",
    //             padding: "20",
    //             border_radius: "4",
    //             font_type: "arial",
    //             font_size: "16",
    //             title_color: "#222222",
    //             title_size: "18",
    //             inp_color: "#222222",
    //             inp_bordhover: "#bbbbbb",
    //             inp_bordcolor: "#dddddd",
    //             inp_alpha: "100",
    //             btn_background: "#ffffff",
    //             btn_background_over: "#ffffff",
    //             btn_textcolor: "#222222",
    //             btn_textover: "#222222",
    //             btn_bordcolor: "#d1d1d1",
    //             btn_bordhover: "#bbbbbb",
    //             btn_text: "Бронировать",
    //             text_concierge: "Получи скидку через Bnovo Concierge",
    //             dates_preset: "on",
    //             dfrom_today: "on",
    //             dfrom_value: "2",
    //             dto_nextday: "on",
    //             dto_value: "2",
    //             cancel_preset: "on",
    //             url: `${window.location.origin}/booking`,
    //             onlyrooms: `${id}`
    //         });
    //     });
    // }

    // const bookingToggle = () => {
    //     const bookingSection = targetSection.current
    //     if (tlIsLoad && !bnovoIsOpen) {
    //         openRoomBooking(rooms, room.targetId)
    //     } else {
    //         if (bookingSection) {
    //             bookingSection.innerHTML = ''
    //         }
    //         setBnovoIsOpen(false)
    //     }
    // }

    return (<>
        <div ref={targetSection} id={room.targetId}></div>
        {/* <div ref={btnRef} className='btn booking-btn' onClick={() => bookingToggle()}>
            {!bnovoIsOpen ? 'Забронировать' : 'Скрыть'}
        </div> */}
        {/* <a className='btn booking-btn' href='#' data-tl-booking-open='true' data-tl-room={room.targetId}>Забронировать</a> */}
        <a className='btn booking-btn' href={`/booking?room-type=${room.roomId.toString()}`}>Забронировать</a>
    </>)
}