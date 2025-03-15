
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
import Link from 'next/link';
import toast from 'react-hot-toast';
import vkCloudLoader from '@/mw/utils/imageLoader';
import copy from './functions/copy';

type PromoImage = 'active-leisure' | 'banquet-hall' | 'aquatory' | 'events' |
    'rest' | 'saunas' | 'smash' | 'hotel' | 'sports-camp' | 'tent'
interface PromoProps {
    bg?: string
    booking?: boolean
    video?: boolean
    image?: PromoImage
    promoText?: string
    btnGroup?: {
        text?: string
        callbackBtn?: boolean
    }
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

    // const copyNumber = (x: string) => {
    //     navigator.clipboard.writeText(x)
    //     toast.success('Номер скопирован', {
    //         duration: 3000,
    //         style: {
    //             fontSize: 15,
    //             borderRadius: 0,
    //             border: '1px solid #393939',
    //             padding: '12px 18px'
    //         },
    //         position: 'top-center'
    //     });
    // }

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
            case 'tent':
                setPreviewSrc(tent)
                break
            default: setPreviewSrc('')

        }
    }, [props.image])


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
                                    loader={vkCloudLoader}
                                />
                                : ''
                            }
                        </>
                    }


                    <div className={`main__video-overlay ${props.video ? '' : 'not-video'}`}></div>
                </div>
            </div>

            {props.booking ?
                <BookingPromo />
                : ''}
                
            <div className='main__promo-logo'>
                <h1>
                    <span>парк-отель</span>
                    <span>plazma</span>
                </h1>
            </div>

            {/* <div className='main__promo-text'>
                <span>{props.promoText}</span>
            </div> */}

            <div className='main__promo-btn-group'>
                {props.btnGroup?.text ?
                    <div className='text-group'>
                        <span className='text'>{props.btnGroup?.text}</span>
                    </div>
                    : <></>
                }

                <div className='btn-group'>
                    {props.btnGroup?.callbackBtn ?
                        <Link href='' className='btn btn_white popover pop-bottom'
                            popover-data={'+7 (910) 168-17-61'}
                            onClick={() => copy('+79101681761', 'Номер скопирован', { metric: 'number' })}
                        >Позвонить</Link>
                        : <></>
                    }
                </div>
            </div>
        </div>

    </>)
}