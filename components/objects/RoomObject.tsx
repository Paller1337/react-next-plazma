import { useState } from 'react'
import BookingRoom from '../bnovo/BookingRoom'

export interface RoomObjectProps {

    id: number,
    title: string,
    description: string,
    image: string,
    size: string, // Добавить площадь терассы 9 кв.м.
    attributes: {
        name: string,
        value: string
    }[],
    amenities: string[]
}

export default function RoomObject(data: RoomObjectProps) {
    const [amenitiesOpened, setAmenitiesOpened] = useState(false)

    return (<>
        <div className='hotel-rooms__item hotel-room'>
            <div className='hotel-room__preview'>
                <div className='hotel-room__image' style={{
                    backgroundImage: `url(${data.image})`
                }}>
                </div>
            </div>

            <div className='hotel-room__info'>
                <span className='hotel-room__title'>{data.title}</span>
                <span className='hotel-room__text'>{data.description}
                </span>
                <span className='hotel-room__text'>{data.size}</span>

                {/* <div className='btn booking-btn'>Забронировать</div> */}
                <BookingRoom roomId={data.id} targetId={`${data.id}-target`} />
                <div className='hotel-room__attrs'>
                    {data.attributes.map((x, i) =>
                        <div key={i} className='hotel-room__attr-item'>
                            <span className='hotel-room__text attr-name'>{x.name}</span>
                            <span className='hotel-room__text attr-value' dangerouslySetInnerHTML={{__html: x.value}}>
                                
                            </span>
                        </div>
                    )}
                </div >


                <div className='hotel-room__amenities'>
                    <span onClick={() => setAmenitiesOpened(current => !current)} className='hotel-room__text amenities-title'>Удобства в номере:

                        <i className='hotel-arrow'></i>
                    </span>
                    <ul className={`hotel-room__amenities-list ${amenitiesOpened ? 'opened' : ''}`}>
                        {data.amenities.map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                </div>

            </div >
        </div >
    </>)
}