import Image from 'next/image'

interface ColumnCardProps {
    img: {
        h: number,
        w: number,
        src: string
    }
    title?: string
    desc?: string
}



export default function ColumnCard(props: ColumnCardProps) {

    return (<>
        <div className='column-card'>
            <div className='column-card__img'>
                <Image src={props.img.src} width={props.img.w} height={props.img.h} alt='' />
            </div>

            <div className='column-card__text'>
                <h3 className='column-card__title'>{props.title}</h3>
                <span className='column-card__desc'>{props.desc}</span>
            </div>
        </div>
    </>)
}