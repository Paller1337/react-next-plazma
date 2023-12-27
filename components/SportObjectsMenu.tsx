import vkCloudLoader from '@/mw/utils/imageLoader'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ReactSVG } from 'react-svg'

export default function SportObjectsMenu() {
    const contentRef = useRef(null)
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //     const handleWindowMouseMove = event => {
    //         setCoords({
    //             x: event.clientX,
    //             y: event.clientY,
    //         });
    //         console.log('cord: ', coords)
    //     };

    //     window.addEventListener('mousemove', handleWindowMouseMove);
    //     return () => {
    //         window.removeEventListener(
    //             'mousemove',
    //             handleWindowMouseMove,
    //         );
    //     };
    // }, []);

    useEffect(() => {

    }, [contentRef.current])

    return (
        <div id='sports-objects' className='cards-menu container'>
            <span className='cards-menu__title'>Наши спортивные объекты</span>
            <div ref={contentRef} className='cards-menu__content'>
                <Link href={'/active-leisure/tennis-court'} className='cards-menu__card'>
                    <div className='cards-menu__card-wrapper'>
                        <Image width={370} height={560} src={'/img/sport/sports-objects-previews/tennis.webp'} alt=''
                            loader={vkCloudLoader}
                        />
                        <div className='cards-menu__card-text'>
                            <span className='cards-menu__card-title'>Теннисные корты</span>
                            <span className='cards-menu__card-desc'>
                                Площадь манежа составляет 2600 м2, куда входит 4 теннисные площадки с покрытием хард,
                                2 раздевалки с душевыми, кабинет судьи и медицинский кабинет.
                            </span>
                        </div>
                    </div>
                    <div className='btn btn_black'>Подробнее <ReactSVG className='svg' src='/svg/arrow-forward.svg' /></div>
                </Link>

                <Link href={'/active-leisure/sports-hall'} className='cards-menu__card'>
                    <div className='cards-menu__card-wrapper'>
                        <Image width={370} height={560} src={'/img/sport/sports-objects-previews/sports-hall.webp'} alt=''
                            loader={vkCloudLoader}
                        />
                        <div className='cards-menu__card-text'>
                            <span className='cards-menu__card-title'>Универсальный спортзал</span>
                            <span className='cards-menu__card-desc'>
                                Размер манежа составляет 25х44 метра, высота — 11 метров.
                                Зал предназначен для мини-футбола, волейбола, баскетбола, танцев, гимнастики, единоборств.
                            </span>
                        </div>
                    </div>
                    <div className='btn btn_black'>Подробнее <ReactSVG className='svg' src='/svg/arrow-forward.svg' /></div>
                </Link>

                <Link href={'/active-leisure/beach-center'} className='cards-menu__card'>
                    <div className='cards-menu__card-wrapper'>
                        <Image width={370} height={560} src={'/img/sport/sports-objects-previews/beach.webp'} alt=''
                            loader={vkCloudLoader}
                        />
                        <div className='cards-menu__card-text'>
                            <span className='cards-menu__card-title'>Пляжный центр</span>
                            <span className='cards-menu__card-desc'>
                                Первый в Тульской области крытый зал для пляжных видов спорта с кварцевым подогреваемым песком.
                            </span>
                        </div>
                    </div>
                    <div className='btn btn_black'>Подробнее <ReactSVG className='svg' src='/svg/arrow-forward.svg' /></div>
                </Link>

                <Link href={'/active-leisure/outdoor-playgrounds'} className='cards-menu__card'>
                    <div className='cards-menu__card-wrapper'>
                        <Image width={370} height={560} src={'/img/sport/sports-objects-previews/outside-objects.webp'} alt=''
                        // loader={vkCloudLoader}
                        />
                        <div className='cards-menu__card-text'>
                            <span className='cards-menu__card-title'>Уличные спортивные площадки</span>
                            <span className='cards-menu__card-desc'>
                                Наши спортивные площадки — это сочетание функциональности, безопасности и комфорта.
                            </span>
                        </div>
                    </div>
                    <div className='btn btn_black'>Подробнее <ReactSVG className='svg' src='/svg/arrow-forward.svg' /></div>
                </Link>
            </div>
        </div>
    )
}