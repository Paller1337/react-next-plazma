import vkCloudLoader from '@/mw/utils/imageLoader'
import Image from 'next/image'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'

export default function SportObjectsMenu() {


    return (
        <div className='cards-menu container'>
            <span className='cards-menu__title'>Наши спортивные объекты</span>
            <div className='cards-menu__content'>
                <Link href={'#'} className='cards-menu__card'>
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

                <Link href={'#'} className='cards-menu__card'>
                    <div className='cards-menu__card-wrapper'>
                        <Image width={370} height={560} src={'/img/sport/sports-objects-previews/tennis.webp'} alt=''
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

                <Link href={'#'} className='cards-menu__card'>
                    <div className='cards-menu__card-wrapper'>
                        <Image width={370} height={560} src={'/img/sport/sports-objects-previews/tennis.webp'} alt=''
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
            </div>
        </div>
    )
}