import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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

    return (<>
        <div className={`row-card ${props.reverse ? 'reverse' : ''}`}>
            <div className='row-card__img'
                data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
                >
                {/* {props.img.src.length && props.img.src.length > 10 ? */}
                    <Image src={props.img.src[0]} width={props.img.w} height={props.img.h} alt=''
                        loader={vkCloudLoader}
                    /> 
                    {/* : */}
                    {/* <> */}

                    {/* </>} */}
                {/* <Swiper
                    {...({
                        modules: [Lazy, Pagination, Navigation, Thumbs, Virtual],
                        navigation: {
                            enable: true
                        },
                        virtual: true,
                        slidesPerView: 1,
                        // spaceBetween: 20,
                        breakpoints: {
                            1: {
                                slidesPerView: 1,
                                // spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 1,
                                // centeredSlides: false,
                                // spaceBetween: 20,
                            },
                            1100: {
                                slidesPerView: 1,
                                initialSlide: 1,
                            },
                        },

                    } as SwiperProps)}
                >
                    {props.img.src && props.img.src.map((image, i) =>
                        <SwiperSlide key={image + '-swipe-item'} virtualIndex={i}>
                            <div key={i} className={`hotel-room__image`}>
                                <Image key={'img-' + i} src={image} height={props.img.h} width={props.img.w} alt={'Plazma'}
                                    loading="lazy"
                                    quality={90}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                    loader={vkCloudLoader}
                                />
                            </div >
                        </SwiperSlide>
                    )}
                </Swiper> */}
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