import dynamic from 'next/dynamic'
import Image, { StaticImageData } from 'next/image'
import { LegacyRef, useEffect, useRef, useState } from 'react'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults';
interface ColumnCardProps {
    ref?: LegacyRef<HTMLDivElement>
    img: ColumnCardImageProps[]
    title?: string
    desc?: string
    inSlider?: boolean
}

interface ColumnCardImageProps {
    h: number,
    w: number,
    src: StaticImageData | string
}


export default function ColumnCard(props: ColumnCardProps) {
    const images = props.img as ColumnCardImageProps[]

    const containerRef = useRef(null)
    const [swiperWidth, setSwiperWidth] = useState(0)

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current as HTMLElement
            setSwiperWidth(container.clientWidth)


            const observer = new ResizeObserver((entries) => {
                entries.forEach((entry) => {
                    const width = entry.contentRect.width
                    setSwiperWidth(width)
                })
            })

            observer.observe(container);

            return () => {
                if (container) {
                    observer.unobserve(container);
                }
            }
        }
    }, [containerRef.current])

    return (<>
        <div ref={props.ref} className={`column-card ${props.inSlider ? 'slider-card' : ''}`}>
            <div ref={containerRef} className='column-card__img'
                data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                <Swiper
                    {...({
                        spaceBetween: 0,
                        slidesPerView: 1,
                        modules: [Pagination],
                        pagination: {
                            clickable: true,
                            type: 'bullets',
                        },
                        width: swiperWidth,
                    } as any)}
                >
                    {props.img.length > 0 ? props.img.map(x =>
                        <SwiperSlide key={'col-img-' + x.src}>
                            <Image src={x.src} width={x.w} height={x.h} alt='' loader={vkCloudLoader} />
                        </SwiperSlide>
                    ) : ''}
                </Swiper>
            </div>
            <div className='column-card__text' data-aos="fade-zoom-in" data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                <h3 className='column-card__title'>{props.title}</h3>
                <span className='column-card__desc'>{props.desc}</span>
            </div>
        </div >
    </>)
}