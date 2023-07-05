import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import Header from './Header';


interface PromoMinProps {
    video?: boolean
    imgUrl: StaticImageData | string
    bg?: string
    title?: string
    description?: string
}




export default function PromoMin(props: PromoMinProps) {
    const defaultImg = {
        width: 1920,
        height: 830,
    }

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
                            {props.imgUrl ?
                                <Image src={props.imgUrl} width={defaultImg.width} height={defaultImg.height} alt='Plazma'
                                //  placeholder='blur'
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