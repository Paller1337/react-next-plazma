import Image, { StaticImageData } from 'next/image'

interface ColumnCardProps {
    img: {
        h: number,
        w: number,
        src: StaticImageData
    }
    title?: string
    desc?: string
    reverse?: boolean
}



export default function RowCard(props: ColumnCardProps) {

    return (<>
        <div className={`row-card ${props.reverse ? 'reverse' : ''}`}>
            <div className='row-card__img'>
                <Image src={props.img.src} width={props.img.w} height={props.img.h} alt='' />
            </div>

            <div className='row-card__text'>
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