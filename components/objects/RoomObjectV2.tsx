import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Keyboard, Lazy, Navigation, Pagination, Thumbs, Virtual } from 'swiper'
import toast from 'react-hot-toast'
import * as Icon from 'react-feather'
import { DEFAULTS } from 'defaults'
import vkCloudLoader from '@/mw/utils/imageLoader'
import BookingRoom from '../bnovo/BookingRoom'
import PetsRulesModal from '../modals/PetsRulesModal'
import type { RoomObjectProps } from './RoomObject'

const INCLUDED_SUMMER_SERVICES = [
    { title: 'Теплый бассейн на острове', Icon: Icon.Droplet },
    { title: 'Шезлонг и полотенце', Icon: Icon.Sun },
    { title: 'Парковка', Icon: Icon.Truck },
    { title: 'Завтрак, шведский стол', Icon: Icon.Coffee },
    { title: 'Круглосуточный тренажерный зал', Icon: Icon.Activity },
    { title: 'Детская комната', Icon: Icon.Users },
    { title: 'Анимационная программа', Icon: Icon.Smile },
]

const PetIcon = () => (
    <svg width='18' height='18' viewBox='0 0 32 32' fill='none' aria-hidden='true'>
        <path d='M25.8727 21.178C25.048 16.244 20.3097 12.2324 15.3057 12.2324C9.86844 12.2324 5.08813 16.6353 4.62687 22.0586C4.44516 24.1552 5.11608 26.14 6.49986 27.6356C7.86965 29.1312 9.79855 29.9559 11.8952 29.9559H18.4367C20.7989 29.9559 22.8675 29.0334 24.2793 27.3701C25.691 25.7067 26.2501 23.4983 25.8727 21.178Z' fill='currentColor' />
        <path d='M13.572 10.1908C15.8338 10.1908 17.6674 8.35724 17.6674 6.09541C17.6674 3.83358 15.8338 2 13.572 2C11.3101 2 9.47656 3.83358 9.47656 6.09541C9.47656 8.35724 11.3101 10.1908 13.572 10.1908Z' fill='currentColor' />
        <path d='M22.8812 11.824C24.7648 11.824 26.2917 10.297 26.2917 8.41344C26.2917 6.52986 24.7648 5.00293 22.8812 5.00293C20.9976 5.00293 19.4707 6.52986 19.4707 8.41344C19.4707 10.297 20.9976 11.824 22.8812 11.824Z' fill='currentColor' />
        <path d='M27.9268 17.2794C29.4322 17.2794 30.6524 16.059 30.6524 14.5537C30.6524 13.0484 29.4322 11.8281 27.9268 11.8281C26.4215 11.8281 25.2012 13.0484 25.2012 14.5537C25.2012 16.059 26.4215 17.2794 27.9268 17.2794Z' fill='currentColor' />
        <path d='M4.71129 14.5545C6.59486 14.5545 8.12181 13.0275 8.12181 11.1439C8.12181 9.26034 6.59486 7.7334 4.71129 7.7334C2.82773 7.7334 1.30078 9.26034 1.30078 11.1439C1.30078 13.0275 2.82773 14.5545 4.71129 14.5545Z' fill='currentColor' />
    </svg>
)

const ROOM_TITLES_WITH_INCLUDED_SERVICES = [
    'Дача',
    'Домик на набережной',
    'Австрийский таунхаус',
    'Таунхаус',
    'Коттедж',
    'Номер Комфорт с сауной',
    'Улучшенный номер',
    'Номер Комфорт',
]

const normalizeRoomTitle = (title: string) =>
    title
        .toLowerCase()
        .replace(/ё/g, 'е')
        .replace(/[«»"]/g, '')
        .trim()

const includedServicesRoomTitles = new Set(
    ROOM_TITLES_WITH_INCLUDED_SERVICES.map(normalizeRoomTitle)
)

const formatRoomSize = (size: string) =>
    size
        .replace(/^Размер номера\s*/i, '')
        .replace(/^Размеры номеров\s*/i, '')
        .replace(/\.$/, '')

const formatRoomCount = (count: number | string) => {
    const numericCount = Number(count)
    const lastDigit = numericCount % 10
    const lastTwoDigits = numericCount % 100

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${count} номеров`
    }

    if (lastDigit === 1) {
        return `${count} номер`
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return `${count} номера`
    }

    return `${count} номеров`
}

const getAttributeIcon = (name: string) => {
    const normalizedName = normalizeRoomTitle(name)

    if (normalizedName.includes('вместимость')) return Icon.Users
    if (normalizedName.includes('гости')) return Icon.UserPlus
    if (normalizedName.includes('заселение')) return Icon.Clock

    return Icon.Info
}

const getAttributeLabel = (name: string) => {
    const normalizedName = normalizeRoomTitle(name)

    if (normalizedName.includes('заселение')) return 'Заселение'

    return name
}

export default function RoomObjectV2(data: RoomObjectProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [amenitiesOpened, setAmenitiesOpened] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [galleryOpened, setGalleryOpened] = useState(false)
    const [galleryStartSlide, setGalleryStartSlide] = useState(0)

    const roomId = data.bnid
    const roomKey = roomId.toString()
    const galleryImages = data.images?.length ? data.images : data.previews
    const hasImportantInfo = Boolean(data.alertText || data.pets || data.alert)
    const hasIncludedSummerServices = useMemo(
        () => includedServicesRoomTitles.has(normalizeRoomTitle(data.title)),
        [data.title]
    )

    const roomFacts = useMemo(() => [
        {
            name: 'Площадь',
            value: [formatRoomSize(data.size)],
            Icon: Icon.Maximize2,
        },
        ...data.attributes.map((attribute) => ({
            ...attribute,
            Icon: getAttributeIcon(attribute.name),
            name: getAttributeLabel(attribute.name),
        })),
        ...(data.count
            ? [{
                name: 'Количество',
                value: [formatRoomCount(data.count)],
                Icon: Icon.Home,
            }]
            : []),
    ], [data.attributes, data.count, data.size])

    const copyLink = () => {
        const link = `${window.location.origin}${window.location.pathname}#room-${roomKey}`

        navigator.clipboard.writeText(link)
        toast.success('Ссылка скопирована', {
            duration: 3000,
            style: {
                fontSize: 15,
                borderRadius: 0,
                border: '1px solid #393939',
                padding: '12px 18px'
            },
            position: 'top-center'
        })
    }

    const openGallery = (index = currentSlide) => {
        setGalleryStartSlide(Math.min(index, galleryImages.length - 1))
        setGalleryOpened(true)
    }

    const closeGallery = () => {
        setGalleryOpened(false)
    }

    useEffect(() => {
        if (!galleryOpened) return

        const initialOverflow = document.body.style.overflow
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeGallery()
            }
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = initialOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [galleryOpened])

    return (
        <>
            <article
                className='hotel-rooms__item hotel-room-v2'
                data-aos={DEFAULTS.AOS.animation}
                data-aos-duration={DEFAULTS.AOS.duration}
                data-aos-once={DEFAULTS.AOS.once}
            >
                <div id={`room-${roomKey}`} className='hotel-room-v2__anchor' />

            <div className='hotel-room-v2__header'>
                <button
                    type='button'
                    className='hotel-room-v2__title'
                    onClick={copyLink}
                    aria-label={`Скопировать ссылку на номер ${data.title}`}
                >
                    <Icon.Link size={20} strokeWidth={1.7} />
                    <span>{data.title}</span>
                </button>

                <div className='hotel-room-v2__facts'>
                    {roomFacts.map((fact, i) => {
                        const FactIcon = fact.Icon

                        return (
                            <div key={`${roomKey}-fact-${fact.name}-${i}`} className='hotel-room-v2__fact'>
                                <FactIcon size={16} strokeWidth={1.8} />
                                {fact.name ? <span className='hotel-room-v2__fact-name'>{fact.name}</span> : null}
                                <span className='hotel-room-v2__fact-value'>
                                    {fact.value.map((value, index) => (
                                        <span
                                            key={`${roomKey}-fact-value-${fact.name}-${index}`}
                                            dangerouslySetInnerHTML={{ __html: value }}
                                        />
                                    ))}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='hotel-room-v2__media'>
                <Swiper
                    {...({
                        modules: [Lazy, FreeMode, Pagination, Navigation, Thumbs, Virtual],
                        navigation: true,
                        pagination: {
                            clickable: true,
                        },
                        thumbs: { swiper: thumbsSwiper },
                        virtual: true,
                        spaceBetween: 12,
                        onSlideChange: (swiper) => setCurrentSlide(swiper.activeIndex),
                    } as any)}
                    className='hotel-room-v2__main-swiper'
                >
                    {data.previews.map((image, i) => (
                        <SwiperSlide key={`${roomKey}-preview-${image}`} virtualIndex={i}>
                            <div
                                className='hotel-room-v2__image'
                                role='button'
                                tabIndex={0}
                                aria-label={`Открыть фото ${i + 1} номера ${data.title} на весь экран`}
                                onClick={() => openGallery(i)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault()
                                        openGallery(i)
                                    }
                                }}
                            >
                                <Image
                                    src={image}
                                    height={460}
                                    width={680}
                                    alt={`${data.title} в парк-отеле Плазма`}
                                    loading='lazy'
                                    quality={90}
                                    sizes='(max-width: 991px) 100vw, 58vw'
                                    loader={vkCloudLoader}
                                />
                                <span className='hotel-room-v2__image-zoom' aria-hidden='true'>
                                    <Icon.Maximize2 size={20} strokeWidth={1.8} />
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {data.previews.length > 1 ? (
                    <Swiper
                        {...({
                            modules: [Lazy, FreeMode, Thumbs, Virtual],
                            virtual: true,
                            watchSlidesProgress: true,
                            onSwiper: setThumbsSwiper,
                            spaceBetween: 10,
                            slidesPerView: 5,
                            freeMode: true,
                            breakpoints: {
                                1: {
                                    slidesPerView: 3.35,
                                },
                                480: {
                                    slidesPerView: 4.25,
                                },
                                768: {
                                    slidesPerView: 5,
                                },
                            },
                        } as any)}
                        className='hotel-room-v2__thumbs'
                    >
                        {data.previews.map((image, i) => (
                            <SwiperSlide key={`${roomKey}-thumb-${image}`} virtualIndex={i}>
                                <div className='hotel-room-v2__thumb'>
                                    <Image
                                        src={image}
                                        height={78}
                                        width={112}
                                        alt={`${data.title}, фото ${i + 1}`}
                                        loading='lazy'
                                        quality={80}
                                        sizes='112px'
                                        loader={vkCloudLoader}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : null}
            </div>

            <div className='hotel-room-v2__content'>
                <p className='hotel-room-v2__description'>{data.description}</p>

                {hasIncludedSummerServices ? (
                    <section className='hotel-room-v2__included' aria-label='Услуги, включенные в стоимость проживания'>
                        <div className='hotel-room-v2__included-head'>
                            <span className='hotel-room-v2__included-title'>Включено в стоимость</span>
                            <span className='hotel-room-v2__included-period'>с 29 мая до 31 августа</span>
                        </div>

                        <ul className='hotel-room-v2__included-list'>
                            {INCLUDED_SUMMER_SERVICES.map((service) => {
                                const ServiceIcon = service.Icon

                                return (
                                    <li key={service.title}>
                                        <ServiceIcon size={18} strokeWidth={1.8} />
                                        <span>{service.title}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                ) : null}

                {hasImportantInfo ? (
                    <section className='hotel-room-v2__important' aria-label='Важные условия проживания'>
                        <span className='hotel-room-v2__important-title'>
                            <span>{data.pets ? 'Проживание с животными' : 'Важно знать'}</span>
                            {data.pets ? <PetIcon /> : null}
                        </span>

                        {data.alertText ? (
                            <div className='hotel-room-v2__important-row hotel-room-v2__important-row_accent'>
                                <Icon.AlertCircle size={17} strokeWidth={1.8} />
                                <span>{data.alertText}</span>
                            </div>
                        ) : null}

                        {data.pets || data.alert ? (
                            <div className='hotel-room-v2__important-row'>
                                {!data.pets && data.alert ? <Icon.Shield size={17} strokeWidth={1.8} /> : null}
                                <span>
                                    {data.pets ? 'Возможно размещение с животными до 7 кг за дополнительную плату. ' : ''}
                                    {data.alert ? 'При заезде нужен оригинал документа для всех гостей и страховой депозит 5000-10000 рублей.' : ''}
                                </span>
                            </div>
                        ) : null}

                        {data.pets ? (
                            <div className='hotel-room-v2__important-link'>
                                <PetsRulesModal />
                            </div>
                        ) : null}
                    </section>
                ) : null}

                <div className='hotel-room-v2__booking'>
                    <BookingRoom roomId={roomId} targetId={`${roomKey}-target`} />
                </div>

                <div className={`hotel-room-v2__amenities ${amenitiesOpened ? 'opened' : ''}`}>
                    <button
                        type='button'
                        className='hotel-room-v2__amenities-trigger'
                        onClick={() => setAmenitiesOpened((current) => !current)}
                        aria-expanded={amenitiesOpened}
                    >
                        <span>Удобства в номере</span>
                        <Icon.ChevronDown size={20} strokeWidth={1.8} />
                    </button>

                    <ul className='hotel-room-v2__amenities-list'>
                        {data.amenities.map((amenity, i) => (
                            <li key={`${roomKey}-amenity-${amenity}-${i}`}>{amenity}</li>
                        ))}
                    </ul>
                </div>
            </div>
            </article>

            {galleryOpened && typeof document !== 'undefined'
                ? createPortal(
                    <div
                        className='hotel-room-v2-gallery'
                        role='dialog'
                        aria-modal='true'
                        aria-label={`Фотографии номера ${data.title}`}
                        onClick={closeGallery}
                    >
                        <button
                            type='button'
                            className='hotel-room-v2-gallery__close'
                            onClick={closeGallery}
                            aria-label='Закрыть галерею'
                        >
                            <Icon.X size={26} strokeWidth={1.8} />
                        </button>

                        <div className='hotel-room-v2-gallery__slider' onClick={(event) => event.stopPropagation()}>
                            <Swiper
                                key={`${roomKey}-gallery-${galleryStartSlide}`}
                                {...({
                                    modules: [Keyboard, Navigation, Pagination],
                                    initialSlide: galleryStartSlide,
                                    navigation: true,
                                    keyboard: {
                                        enabled: true,
                                    },
                                    pagination: {
                                        type: 'fraction',
                                    },
                                    spaceBetween: 24,
                                } as any)}
                                className='hotel-room-v2-gallery__swiper'
                            >
                                {galleryImages.map((image, i) => (
                                    <SwiperSlide key={`${roomKey}-gallery-image-${image}-${i}`}>
                                        <div className='hotel-room-v2-gallery__image'>
                                            <Image
                                                src={image}
                                                height={1080}
                                                width={1600}
                                                alt={`${data.title}, фото ${i + 1}`}
                                                priority={i === galleryStartSlide}
                                                quality={95}
                                                sizes='100vw'
                                                loader={vkCloudLoader}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>,
                    document.body
                )
                : null}
        </>
    )
}
