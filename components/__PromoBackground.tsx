import Link from 'next/link'
import { useRef, useEffect } from 'react'


interface PromoBackgroundProps { }


export default function PromoBackground(props: PromoBackgroundProps) {

    return (
        <div className='promo-background'>
            <video
                preload='metadata'
                autoPlay
                muted
                playsInline
            >
                <source src='/video/bg.webm' type="video/webm" />
                <source src='/video/bg.mp4' type="video/mp4" />
            </video>
        </div>
    )
}