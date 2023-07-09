import dynamic from 'next/dynamic'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

interface ColumnCardProps {
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
        }
    }, [containerRef.current])

    return (<>
        <div className={`column-card ${props.inSlider ? 'slider-card' : ''}`}>
            <div ref={containerRef} className='column-card__img'>
                <Swiper
                    // spaceBetween={0}
                    // slidesPerView={1}

                    // modules={[Pagination]}
                    // pagination={{
                    //     clickable: true,
                    //     type: 'bullets',
                    // }}

                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // width={swiperWidth}
                >
                    {props.img.length > 0 ? props.img.map(x =>
                        <SwiperSlide key={'col-img-' + x.src}>
                            <Image src={x.src} width={x.w} height={x.h} alt='' />
                        </SwiperSlide>
                    ) : ''}
                </Swiper>
            </div>
            <div className='column-card__text'>
                <h3 className='column-card__title'>{props.title}</h3>
                <span className='column-card__desc'>{props.desc}</span>
            </div>
        </div >
    </>)
}