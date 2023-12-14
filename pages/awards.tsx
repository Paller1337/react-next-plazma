import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import vkCloudLoader from '@/mw/utils/imageLoader'
import TextBlock from '@/components/TextBlock'
import GallerySlider from '@/components/GallerySlider'
import { useEffect, useState } from 'react'
import ImagePortal from '@/components/ImagePortal'

interface IAward {
    src: string
    number?: number
    onChangeSlide?: (n) => void
    onGalleryOpen: () => void
}

const Award = (props: IAward) => {
    return (
        <div className='award-item'
            onMouseEnter={() => props.onChangeSlide(props.number)}
            onClick={(e) => {
                e.stopPropagation()
                props.onGalleryOpen()
            }}
        >
            <div className='award-item__photo'>
                <Image src={props.src} width={322} height={456} alt='' />
            </div>
            <div className='award-item__scale'>
                <div className='award-item__scale-btn'>
                    <div className='award-item__scale-svg' />
                </div>
            </div>
        </div>
    )
}


export default function PageAwards() {
    const images = [
        '/img/awards/1-min.jpg',
        '/img/awards/2-min.jpg',
        '/img/awards/3-min.jpg',
        '/img/awards/4-min.jpg',
        '/img/awards/5-min.jpg',
        '/img/awards/6-min.jpg',
        '/img/awards/7-min.jpg',
        '/img/awards/8-min.jpg',
        '/img/awards/9-min.jpg',
    ]
    const [currentSlide, setCurrentSlide] = useState(0)
    const [galleryIsOpen, setGalleryIsOpen] = useState(false)
    const closeGallery = () => setGalleryIsOpen(false)
    const openGallery = () => setGalleryIsOpen(true)


    useEffect(() => console.log(galleryIsOpen), [galleryIsOpen])
    return (
        <>
            <ImagePortal
                imageUrl={images[currentSlide]}
                isOpen={galleryIsOpen}
                onClose={closeGallery}
            />

            <Head>
                <title>Достижения и награды парк-отеля «PLAZMA»</title>
                {/* <meta name='description' content='' /> */}

                <meta
                    property='og:title'
                    content='Достижения и награды парк-отеля «PLAZMA»' />
                {/* <meta
                    property='og:description'
                    content='' /> */}
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-meals'>
                <div className='relative main-wrap' data-scroll-container>
                    <div className='awards-page container'>
                        <div className='awards-page__heading'>
                            <h1 className='h1-title'>Наши достижения и награды</h1>
                            {/* <span className='job-page__description'>
                                Если вас заинтересовала одна из предложнных вакансий - звоните по номеру:
                                <b> +7 (910) 168-17-61</b>
                            </span> */}
                        </div>

                        <div className='awards-page__content'>
                            {images.map((x, i) =>
                                <Award
                                    key={'award-' + i}
                                    src={x}
                                    number={i}
                                    onChangeSlide={setCurrentSlide}
                                    onGalleryOpen={openGallery}
                                />)}

                        </div>
                    </div>
                    <div className='base-bg' data-scroll-section></div>
                </div >
            </main>
        </>

    )
}
