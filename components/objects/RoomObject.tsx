import { useEffect, useState } from 'react'
import BookingRoom from '../bnovo/BookingRoom'
import GallerySlider from '../GallerySlider'

export interface RoomObjectProps {

    id: number | number[],
    title: string,
    description: string,
    images: string[],
    size: string, // Добавить площадь терассы 9 кв.м.
    attributes: {
        name: string,
        value: string
    }[],
    amenities: string[]
}

export default function RoomObject(data: RoomObjectProps) {
    const [amenitiesOpened, setAmenitiesOpened] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [galleryIsOpen, setGalleryIsOpen] = useState(false)

    const [firstInit, setFirstInit] = useState(true)

    const images = data.images

    const goSlide = (i: number) => {
        setCurrentSlide(i)
        setIsAnimating(true);
    }

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setIsAnimating(false)
        }, 1000)

        return () => clearTimeout(animationTimeout)
    }, [currentSlide])

    useEffect(() => {
        let slideN = 0;
        const interval = setInterval(() => {
            if (slideN < images.length - 1) {
                slideN++
                goSlide(slideN)
            } else {
                slideN = 0
                if (firstInit) {
                    setCurrentSlide(0)
                    setFirstInit(false)
                } else {
                    goSlide(0)
                }
            }
        }, 4500)

        return () => clearInterval(interval)
    }, [images])

    const closeGallery = () => {
        setGalleryIsOpen(false)
    }

    return (<>
        <GallerySlider
            slides={images}
            startSlide={currentSlide}
            isOpen={galleryIsOpen}
            onClose={closeGallery}
        />
        <div className='hotel-rooms__item hotel-room'>
            <div className='hotel-room__preview'>
                <div className={`hotel-room__image  ${isAnimating ? 'fade-in-animating' : ''}`}
                    style={{
                        backgroundImage: `url(${images ? images[currentSlide] : ''})`
                    }} onClick={() => setGalleryIsOpen(true)}>
                </div>

                {images && images.length > 1 ?
                    <div className='hotel-room__slides'>
                        {images.map((x, i) =>
                            <div key={i} className='hotel-room__slide' onClick={() => goSlide(i)}
                                style={{ backgroundImage: `url(${x})` }} />
                        )}
                    </div>
                    : ''}
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
                            <span className='hotel-room__text attr-value' dangerouslySetInnerHTML={{ __html: x.value }}>

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