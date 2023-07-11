
import Image, { StaticImageData } from 'next/image';
import Header from './Header';
import BookingPromo from './bnovo/BookingPromo';
import { Suspense, useEffect, useState } from 'react';
// import Video from './Video';
import dynamic from 'next/dynamic';

import banquetHall from '@/images/backgrounds/banquet-hall.webp'
import aquatory from '@/images/backgrounds/hotel-aquatory.webp'
// import img5 from '@/images/backgrounds/hotel-events.webp'
import rest from '@/images/backgrounds/hotel-restaurant.webp'
import saunas from '@/images/backgrounds/hotel-saunas.webp'
import smash from '@/images/backgrounds/hotel-smash.webp'
import hotel from '@/images/backgrounds/hotel-welcome.webp'
import tent from '@/images/backgrounds/tent.webp'
import { Rings } from 'react-loader-spinner';

type PromoImage = 'active-leisure' | 'banquet-hall' | 'aquatory' | 'events' |
    'rest' | 'saunas' | 'smash' | 'hotel' | 'sports-camp' | 'tent'
interface PromoProps {
    bg?: string
    booking?: boolean
    video?: boolean
    image?: PromoImage
}

// import Video from './Video';

const Video = dynamic(() => import('./Video'), {
    ssr: false,
    loading: () =>
        <Rings
            height="80"
            width="80"
            color="#262626"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
        />
})

export default function Promo(props: PromoProps) {
    const [previewSrc, setPreviewSrc] = useState<string | undefined | StaticImageData>('')

    const defaultImg = {
        width: 1920,
        height: 1056,
    }

    useEffect(() => {
        switch (props.image) {
            // case 'active-leisure':
            //     setPreviewSrc(activeLeisure)
            //     break
            case 'aquatory':
                setPreviewSrc(aquatory)
                break
            case 'banquet-hall':
                setPreviewSrc(banquetHall)
                break
            // case 'events':
            //     setPreviewSrc(events)
            //     break
            case 'hotel':
                setPreviewSrc(hotel)
                break
            case 'rest':
                setPreviewSrc(rest)
                break
            case 'saunas':
                setPreviewSrc(saunas)
                break
            case 'smash':
                setPreviewSrc(smash)
                break
            // case 'sports-camp':
            //     setPreviewSrc(sportsCamp)
            //     break
            case 'tent':
                setPreviewSrc(tent)
                break
            default: setPreviewSrc('')

        }
    }, [props.image])

    // const [coff, setCoff] = useState(0)
    // const [imageLoaded, setImageLoaded] = useState(false)
    // const [imgProps, setImgProps] = useState({
    //     width: 0,
    //     height: 0
    // })

    // useEffect(() => {
    //     if (window) {
    //         const wh = window.innerHeight
    //         const ww = window.innerWidth
    //         if (wh / defaultImg.height > ww / defaultImg.width) {
    //             let newCoff = wh / defaultImg.height
    //             setCoff(newCoff)
    //         } else {
    //             let newCoff = ww / defaultImg.width
    //             setCoff(newCoff)
    //         }

    //         setImgProps({
    //             width: defaultImg.width * coff,
    //             height: defaultImg.height * coff,
    //         })
    //     }
    // }, [imageLoaded])
    const src = ''

    return (<>
        <div className='main__promo' data-scroll-section>
            {/* <Header /> */}
            <div className="main__video-wrapper">
                <div className="main__video-box">
                    {props.video ?
                        <Video className='main__video'
                            muted
                            loop
                            autoPlay
                            // playsInline
                            src={{
                                webm: '/video/bg.mp4',
                                mp4: '/video/bgvideo.webm',
                            }} />

                        //     <video className="main__video" muted loop autoPlay playsInline>
                        //     <source src="/video/bg.mp4" type="video/mp4" />
                        //     <source src="/video/bgvideo.webm" type="video/webm" />
                        //     Your browser does not support the video tag.
                        // </video>
                        :

                        <>
                            {/* <div className={`main__welcome-bg ${props.bg}`}></div> */}
                            {previewSrc ?
                                <Image
                                    src={previewSrc}
                                    width={defaultImg.width}
                                    height={defaultImg.height}
                                    alt='Plazma'
                                    placeholder='blur'

                                    priority
                                    loading='eager'
                                    quality={90}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                />
                                : ''
                            }
                        </>
                    }


                    <div className='main__video-overlay'></div>
                </div>
            </div>
            <div className='main__promo-logo'>
                <h1>
                    <span>парк-отель</span>
                    <span>plazma</span>
                </h1>
            </div>

            {props.booking ?
                <BookingPromo />
                : ''}
        </div>

    </>)
}