import { Suspense, useEffect, useRef, useState } from 'react'
import BookingRoom from '../bnovo/BookingRoom'
import GallerySlider from '../GallerySlider'
import Image, { StaticImageData } from 'next/image'
import useNextBlurhash from "use-next-blurhash"

export interface RoomObjectProps {
    id: number | number[],
    title: string,
    description: string,
    images: string[],
    size: string,
    attributes: {
        name: string,
        value: string[]
    }[],
    amenities: string[]
}

export const Loading = () => {

    return <p>Loading</p>
}
export default function RoomObject(data: RoomObjectProps) {
    const images = data.images

    const [amenitiesOpened, setAmenitiesOpened] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [galleryIsOpen, setGalleryIsOpen] = useState(false)
    const imageContentRef = useRef<HTMLDivElement>(null)
    const [translate, setTranslate] = useState(0)

    const goSlide = (i: number) => {
        setCurrentSlide(i)
    }


    const closeGallery = () => {
        setGalleryIsOpen(false)
    }

    const nextSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (e.target instanceof HTMLButtonElement) {
            if (currentSlide < images.length - 1) {
                goSlide(currentSlide + 1)
            } else {
                goSlide(0)
            }
        }
    }


    const prevSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (e.target instanceof HTMLButtonElement) {
            if (currentSlide > 0) {
                goSlide(currentSlide - 1)
            } else {
                goSlide(images.length - 1)
            }
        }
    }

    useEffect(() => {
        setTranslate(570 * currentSlide)
    }, [currentSlide])


    useEffect(() => console.log('roomId: ', data.id, 'key: ', data.id.toString()), [])

    return (<>
        <GallerySlider
            slides={images}
            startSlide={currentSlide}
            isOpen={galleryIsOpen}
            onClose={closeGallery}
        />
        {/* <Suspense fallback={() => <Loading />}> */}
        <div className='hotel-rooms__item hotel-room' key={'room-content-' + data.id?.toString()}>
            <div className='hotel-room__preview'>
                {/* <div className='hotel-room__image-wrapper'>
                    <div className='hotel-room__image-images'>
                        <div ref={imageContentRef} className='hotel-room__image-content' style={{ transform: `translateX(-${translate}px)` }}>
                            {images && images.map((image, i) =>
                                <div key={i} className={`hotel-room__image`} onClick={() => setGalleryIsOpen(true)}>
                                    <Image key={'img-' + data.id.toString() + i} src={image} height={330} width={570} alt={'Plazma'}
                                        // placeholder='blur'
                                    />
                                </div >
                            )}
                        </div>
                    </div>
                    <button className='hotel-room__image--prev' onClick={(e) => prevSlide(e)}></button>
                    <button className='hotel-room__image--next' onClick={(e) => nextSlide(e)}></button>
                </div>
                {images && images.length > 1 ?
                    <div className='hotel-room__slides'>
                        {images.map((x, i) =>
                            <div key={'img-min-' + data.id.toString() + i} className='hotel-room__slide' onClick={() => goSlide(i)}>

                                <Image src={x} height={60} width={80} alt={'Plazma гостиница'} />

                            </div>
                        )}
                    </div>
                    : ''} */}
            </div>

            <div className='hotel-room__info'>
                <span className='hotel-room__title'>{data.title}</span>
                <span className='hotel-room__text'>{data.description}
                </span>
                <span className='hotel-room__text bold'>{data.size}</span>

                {/* <div className='btn booking-btn'>Забронировать</div> */}
                <BookingRoom roomId={data.id} targetId={`${data.id}-target`} />
                <div className='hotel-room__attrs'>
                    {data.attributes.map((x, i) =>
                        <div key={i} className='hotel-room__attr-item'>
                            <span className='hotel-room__text attr-name'>{x.name}</span>
                            <span className='hotel-room__text attr-value'>
                                {x.value.map((text, i) =>
                                    <span key={i} dangerouslySetInnerHTML={{ __html: text }} />
                                )}
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
        {/* </Suspense> */}
    </>)
}