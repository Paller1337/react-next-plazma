import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import Header from './Header';

import activeLeisure from '@/images/backgrounds/active-leisure-min.webp'
import events from '@/images/backgrounds/hotel-events-min.webp'
import sportsCamp from '@/images/backgrounds/sports-camps-min.webp'


type PromoMinImage = 'active-leisure' | 'events' | 'sports-camp'

interface PromoMinProps {
    video?: boolean
    bg?: string
    title?: string
    description?: string
    image?: PromoMinImage
}




export default function PromoMin(props: PromoMinProps) {
    const [previewSrc, setPreviewSrc] = useState<string | undefined | StaticImageData>('')

    const defaultImg = {
        width: 1920,
        height: 830,
    }
    useEffect(() => {
        switch (props.image) {
            case 'active-leisure':
                setPreviewSrc(activeLeisure)
                break
            case 'events':
                setPreviewSrc(events)
                break
            case 'sports-camp':
                setPreviewSrc(sportsCamp)
                break
            default: setPreviewSrc('')

        }
    }, [props.image])
    return (<>
        <div className='main__promo-min promo-min' data-scroll-section>
            {/* <Header /> */}
            <div className='dark-circle'></div>
            <div className="main__video-wrapper">
                <div className="main__video-box">
                    {/* <!-- <video className="main__video" muted loop autoplay>
                            <source src="video/bgvideo.webm" type="video/webm">

                            <source src="video/bgvideo.mp4" type="video/mp4">
                        </video> --> */}
                    <div className={`main__welcome-bg ${props.bg}`}></div>
                    <div className='main__video-overlay'></div>


                    {props.video ?
                        <video className="main__video" muted loop autoPlay playsInline>
                            <source src="/video/bg.mp4" type="video/mp4" />
                            <source src="/video/bgvideo.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video> :

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
                                ></Image>
                                : ''
                            }
                        </>
                    }
                </div>
            </div>
            <div className='promo-min__text'>
                <h1>{props.title}</h1>
                <span>{props.description}</span>
                {/* <div className='btn btn_white'>Подробнее</div> */}
            </div>

        </div>
    </>)
}