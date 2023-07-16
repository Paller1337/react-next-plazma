import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import img1 from '@/images/index/previews/1.png'
import img2 from '@/images/index/previews/2.jpg'
import img3 from '@/images/index/previews/3.jpg'
import img4 from '@/images/index/previews/4.jpg'
import img5 from '@/images/index/previews/5.jpg'
import img6 from '@/images/index/previews/6.jpg'
import img7 from '@/images/index/previews/7.jpg'



interface FullsizePreviewInfoProps {
    title: string
    description: string
    image: number
    href?: string
    btnTitle?: string
}

interface Images {
    [key: number]: StaticImageData | string;
}




// const images: Images = {
//     1: img1,
//     2: img2,
//     3: img3,
//     4: img4,
//     5: img5,
//     6: img6,
//     7: img7,
// }

const images: Images = {
    1: '/img/index/previews/x1200/1.webp',
    2: '/img/index/previews/x1200/2.webp',
    3: '/img/index/previews/x1200/3.webp',
    4: '/img/index/previews/x1200/4.webp',
    5: '/img/index/previews/x1200/5.webp',
    6: '/img/index/previews/x1200/6.webp',
    7: '/img/index/previews/x1200/7.webp',
}

export default function FullSizePreviewInfo(props: FullsizePreviewInfoProps) {


    return (<>
        <div className='preview-blocks__item-wrap'>
            <div className='preview-blocks__item'>

                <div className='preview-blocks__preview-text'>
                    <span className='text-title'>{props.title}</span>
                    <span className='text'>{props.description}</span>

                    {props.href ?
                        <Link className='btn btn_black' href={props.href}>{props.btnTitle ? props.btnTitle : 'Подробнее'}</Link>
                        : <></>}
                </div>
            </div>

            <div className='preview-blocks__item preview-image'>
                <div className='preview-image__img-wrap'>
                    <picture className='preview-image__img' data-scroll data-scroll-speed="-4">
                        {props.image &&
                            <Image height={960} width={960}
                                loading='lazy'
                                className='js--mobile-parallax'
                                src={images[props.image]}
                                alt='Парк-отель Plazma'
                            />}
                    </picture>
                </div>
            </div>
        </div>
    </>)
}