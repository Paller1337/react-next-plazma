import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FreeMode, Lazy, Navigation, Pagination, Thumbs, Virtual } from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

interface ColumnCardProps {
    img: {
        h: number,
        w: number,
        src: string[]
    }
    title?: string
    desc?: string
    italicDesc?: string
    reverse?: boolean
    btn?: {
        link: string,
        text: string,
    }
}



export default function RowCard(props: ColumnCardProps) {
    const [browserLoad, setBrowserLoad] = useState(false)

    const containerRef = useRef(null)
    const [swiperWidth, setSwiperWidth] = useState(770)

    useEffect(() => {
        if (containerRef.current) {
            const container = document.body as HTMLElement
            // setSwiperWidth(container.clientWidth)


            const observer = new ResizeObserver((entries) => {
                entries.forEach((entry) => {
                    const width = entry.contentRect.width
                    setSwiperWidth(width)

                    console.log(width)
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

    useEffect(() => setBrowserLoad(true), [])
    if (!browserLoad) return null

    return (<>
        <div className={`row-card ${props.reverse ? 'reverse' : ''}`}>
            <div className='row-card__image'>
                <Swiper
                    {...({
                        spaceBetween: 0,
                        slidesPerView: 1,
                        modules: [Pagination, Navigation],
                        navigation: {
                            enabled: true,
                        },
                        pagination: {
                            clickable: true,
                            type: 'bullets',
                        },
                    } as SwiperProps)}
                >
                    {props.img.src.length > 0 ? props.img.src.map(x =>
                        <SwiperSlide key={'row-img-' + x}>
                            <Image src={x} width={props.img.w} height={props.img.h} alt=''
                            loader={vkCloudLoader} 
                            />
                        </SwiperSlide>
                    ) : ''}
                </Swiper>
            </div>


            <div className='row-card__text'
                data-aos={props.reverse ? 'fade-right' : 'fade-left'} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                {props.title ?
                    <h3 className='row-card__title'>{props.title}</h3>
                    : <></>}
                {props.desc ?
                    <span className='row-card__desc'>{props.desc}</span>
                    : <></>}
                {props.italicDesc ?
                    <span className='column-card__desc' style={{ fontStyle: 'italic', fontWeight: '600' }}>
                        {props.italicDesc}
                    </span>
                    : <></>}

                {props.btn ?
                    <Link href={props.btn.link} className='btn btn_black'
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}>{props.btn.text}</Link>
                    : <></>}
            </div>
        </div>
    </>)
}