import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults'
import Image, { StaticImageData } from 'next/image'

interface ColumnCardProps {
    img: {
        h: number,
        w: number,
        src: StaticImageData | string
    }
    title?: string
    desc?: string
    reverse?: boolean
}



export default function RowCard(props: ColumnCardProps) {

    return (<>
        <div className={`row-card ${props.reverse ? 'reverse' : ''}`}>
            <div className='row-card__img'
                data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                <Image src={props.img.src} width={props.img.w} height={props.img.h} alt=''
                    loader={vkCloudLoader}
                />
            </div>

            <div className='row-card__text'
                data-aos={props.reverse ? 'fade-right' : 'fade-left'} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                {props.title ?
                    <h3 className='row-card__title'>{props.title}</h3>
                    : <></>}
                {props.desc ?
                    <span className='row-card__desc'>{props.desc}</span>
                    : <></>}
            </div>
        </div>
    </>)
}