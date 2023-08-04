import vkCloudLoader from '@/mw/utils/imageLoader';
import Image from 'next/image';

export default function SportObjectsMenu() {


    return (
        <div className='cards-menu container'>
            <span className='cards-menu__title'>Наши спортивные объекты</span>
            <div className='cards-menu__content'>
                <div className='cards-menu__card'>
                    <Image width={370} height={560} src={'/img/sport/sports-objects-previews/tennis.webp'} alt=''
                        loader={vkCloudLoader}
                    />
                    <div className='cards-menu__card-text'>
                        <span className='cards-menu__card-title'>Теннисные корты</span>
                        <span className='cards-menu__card-desc'>
                            Страница пляжного центра. Страница пляжного
                            центра. Страница пляжного центра...
                        </span>
                    </div>
                    <div className='btn btn_black'>Подробнее</div>
                </div>

                <div className='cards-menu__card'>
                    <Image width={370} height={560} src={'/img/sport/sports-objects-previews/tennis.webp'} alt=''
                        loader={vkCloudLoader}
                    />
                    <div className='cards-menu__card-text'>
                        <span className='cards-menu__card-title'>Пляжный центр</span>
                        <span className='cards-menu__card-desc'>
                            Страница пляжного центра. Страница пляжного
                            центра. Страница пляжного центра...
                        </span>
                    </div>
                    <div className='btn btn_black'>Подробнее</div>
                </div>

                <div className='cards-menu__card'>
                    <Image width={370} height={560} src={'/img/sport/sports-objects-previews/tennis.webp'} alt=''
                        loader={vkCloudLoader}
                    />
                    <div className='cards-menu__card-text'>
                        <span className='cards-menu__card-title'>Универсальный спортзал</span>
                        <span className='cards-menu__card-desc'>
                            Страница пляжного центра. Страница пляжного
                            центра. Страница пляжного центра...
                        </span>
                    </div>
                    <div className='btn btn_black'>Подробнее</div>
                </div>
            </div>
        </div>
    )
}