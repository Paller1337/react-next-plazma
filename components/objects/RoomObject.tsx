import { Suspense, useEffect, useRef, useState } from 'react'
import BookingRoom from '../bnovo/BookingRoom'
import GallerySlider from '../GallerySlider'
import Image, { StaticImageData } from 'next/image'
import BlockLoader from '../BlockLoader'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { FreeMode, Lazy, Navigation, Pagination, Thumbs } from 'swiper/modules'
import { FreeMode, Lazy, Navigation, Pagination, Thumbs, Virtual } from 'swiper'
import { useDeviceDetect } from '../hooks/useDeviceDetect'
import vkCloudLoader from '@/mw/utils/imageLoader'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import * as Icon from 'react-feather'
import Aos from 'aos'
import { DEFAULTS } from 'defaults'
import { ReactSVG } from 'react-svg'

export interface RoomObjectProps {
    tlid: number | number[],
    bnid: number | number[],
    title: string,
    description: string,
    pets: boolean,
    images: string[],
    previews: string[]
    size: string,
    price: {
        name: string,
        value: string[],
    }[],
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
    const previews = data.previews
    const router = useRouter()
    const roomId = data.tlid

    const { isMobile, isDesktop } = useDeviceDetect()

    const [amenitiesOpened, setAmenitiesOpened] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [galleryIsOpen, setGalleryIsOpen] = useState(false)
    const imageContentRef = useRef<HTMLDivElement>(null)
    const [translate, setTranslate] = useState(0)

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const sliderWrapper = useRef(null)

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

    const copyLink = (id) => {
        let link = window.location.host + window.location.pathname
        navigator.clipboard.writeText(link.toString() + '#room-' + id)
        toast.success('Ссылка скопирована', {
            duration: 3000,
            style: {
                fontSize: 15,
                borderRadius: 0,
                border: '1px solid #393939',
                padding: '12px 18px'
            },
            position: 'top-center'
        });
    }

    useEffect(() => {
        if (sliderWrapper.current) {
            const content = imageContentRef.current as HTMLElement
            const anyImage = content.getElementsByClassName('hotel-room__image')[0]

            const wrapperWidth = anyImage.clientWidth

            setTranslate(wrapperWidth * currentSlide)
        }
    }, [currentSlide, sliderWrapper])

    useEffect(() => {
        console.log(data.title, ':')
        console.log(data)
    }, [data])
    return (<>
        {/* <GallerySlider
            slides={images}
            startSlide={currentSlide}
            isOpen={galleryIsOpen}
            onClose={closeGallery}
        /> */}
        {/* <Suspense fallback={() => <Loading />}> */}

        <div className='hotel-rooms__item hotel-room' key={'room-content-' + roomId?.toString()}
            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
            <div id={`room-${roomId}`} className='hotel-room__anchor' />
            <div className='hotel-room__preview-swiper'>
                <Swiper
                    {...({
                        modules: [Lazy, FreeMode, Pagination, Navigation, Thumbs, Virtual],
                        navigation: {
                            enable: true
                        },
                        thumbs: { swiper: thumbsSwiper },
                        virtual: true,

                        spaceBetween: 20,
                        breakpoints: {
                            1: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 1,
                                centeredSlides: false,
                                spaceBetween: 20,
                            },
                            1100: {
                                slidesPerView: 1,
                                initialSlide: 1,
                            },
                        },

                    } as any)}
                >
                    {previews && previews.map((image, i) =>
                        <SwiperSlide key={image + '-swipe-item'} virtualIndex={i}>
                            <div key={i} className={`hotel-room__image`} onClick={() => setGalleryIsOpen(true)}>
                                <Image key={'img-' + roomId.toString() + i} src={image} height={330} width={570} alt={'Plazma'}
                                    loading="lazy"
                                    quality={90}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                    loader={vkCloudLoader}
                                />
                            </div >
                        </SwiperSlide>
                    )}
                </Swiper>
                <Swiper
                    {...({
                        modules: [Lazy, FreeMode, Thumbs, Virtual],
                        virtual: true,
                        watchSlidesProgress: true,
                        onSwiper: setThumbsSwiper,
                        spaceBetween: 10,
                        slidesPerView: 5,
                        freeMode: true,
                        style: {
                            marginTop: 10,
                        }
                    } as any)}
                >

                    <div className='hotel-room__slides'>
                        {previews && previews.map((image, i) =>
                            <SwiperSlide key={image + '-swipe-item'} virtualIndex={i}>
                                <div key={i} className={`hotel-room__slide `}
                                    onClick={() => setGalleryIsOpen(true)}>

                                    <Image src={image} height={60} width={80} alt={'Plazma гостиница'}
                                        loading="lazy"
                                        quality={90}
                                        sizes="(max-width: 768px) 30vw, (max-width: 1200px) 30vw, 30vw"
                                        loader={vkCloudLoader}
                                    />

                                    {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div> */}
                                </div >
                            </SwiperSlide>
                        )}
                    </div>
                </Swiper>

            </div>

            <div className='hotel-room__info'>
                <span className='hotel-room__title' onClick={() => copyLink(roomId)} style={{ cursor: 'pointer' }}>
                    <Icon.Link size={20} /> {data.title}
                </span>
                <span className='hotel-room__text'>{data.description}
                </span>
                {data.pets ?
                    <span className='hotel-room__text pets'>
                        Возможно размещение с животными (до 7 кг) + 500 рублей/сутки
                    </span> : <></>}
                <span className='hotel-room__text bold'>{data.size}</span>

                {/* <div className='btn booking-btn'>Забронировать</div> */}
                <BookingRoom roomId={roomId} targetId={`${roomId}-target`} />
                <div className='hotel-room__attrs'>
                    {/* {data.price ? */}
                    <div className='hotel-room__price'>
                        {data.price?.map((price, i) =>
                            <div key={price.name} className='hotel-room__attr-item'>
                                <span className='hotel-room__text attr-name'>{price.name}</span>
                                {price.value.map(x =>
                                    <span key={x} className='hotel-room__text attr-value' dangerouslySetInnerHTML={{
                                        __html: x
                                    }}
                                    />)}
                            </div>
                        )}
                    </div>
                    {/* : <></>} */}
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