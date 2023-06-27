
import Image from 'next/image';
import Header from './Header';
import BookingPromo from './bnovo/BookingPromo';
import { useEffect, useState } from 'react';

interface PromoProps {
    bg?: string
    booking?: boolean
    video?: boolean
    imgUrl?: string
}



export default function Promo(props: PromoProps) {
    const defaultImg = {
        width: 1920,
        height: 1056,
    }

    const [coff, setCoff] = useState(0)
    const [imgProps, setImgProps] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        if (window) {
            const wh = window.innerHeight
            const ww = window.innerWidth
            if (wh / defaultImg.height > ww / defaultImg.width) {
                let newCoff = wh / defaultImg.height
                setCoff(newCoff)
            } else {
                let newCoff = ww / defaultImg.width
                setCoff(newCoff)
            }

            setImgProps({
                width: defaultImg.width * coff,
                height: defaultImg.height * coff,
            })
        }
    }, [imgProps])


    return (<>
        <div className='main__promo' data-scroll-section>
            <Header />
            <div className="main__video-wrapper">
                <div className="main__video-box">

                    {props.video ?
                        <video className="main__video" muted loop autoPlay playsInline>
                            <source src="/video/bg.mp4" type="video/mp4" />
                            <source src="/video/bgvideo.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video> :

                        <>
                            {/* <div className={`main__welcome-bg ${props.bg}`}></div> */}
                            {props.imgUrl && imgProps.width != 0 ?
                                <Image src={props.imgUrl} width={imgProps.width} height={imgProps.height} alt='Plazma'></Image>
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