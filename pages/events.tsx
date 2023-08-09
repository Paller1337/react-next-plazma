import Head from 'next/head'
import Image from 'next/image'
import PromoMin from '../components/PromoMin'
import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults'
import Link from 'next/link'
import TextBlock from '@/components/TextBlock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Lazy, Navigation, Pagination, Thumbs, Virtual } from 'swiper'

export default function PageEvents() {
    return (
        <>
            <Head>
                <title>Мероприятия в «PLAZMA»</title>
                {/* <meta name='description' content='Место отлично подходит для семейного 
                отдыха на природе, романтических выходных, торжественных и деловых мероприятий.' /> */}

                <meta
                    property='og:title'
                    content='Мероприятия в «PLAZMA»' />
                {/* <meta
                    property='og:description'
                    content='Место отлично подходит для семейного 
                    отдыха на природе, романтических выходных, торжественных и деловых мероприятий.' /> */}
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-events'>
                <div className='relative main-wrap' data-scroll-container>


                    <PromoMin
                        // imgUrl={images.backgrounds.imghotelEventsMinPng}
                        image='events'
                        title='МЕРОПРИЯТИЯ В ПАРК-ОТЕЛЕ PLAZMA'
                        description={`Мы можем стать площадкой, где вы сможете организовать мероприятия любого уровня, 
                        насладиться изысканной кухней и праздничной атмосферой.`} />

                    <div className='base-bg' data-scroll-section></div>

                    <div id='AboutEvents' className='page-events__welcome text-section text-section_big container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                        <span className='h2-title'>Мероприятия в «PLAZMA»</span>
                        <span className='text'>
                            Вы можете использовать в качестве площадки наш банкетный зал, который трансформируется в конференц-зал,
                            пространство для дефиле, столовую для спортсменов. Вы можете найти места для выездной регистрации
                            или вручения дипломом и аттестатов на территории. У нас также есть ресторан, шатер на воде, летнее кафе.
                            Мероприятия для самых маленьких можно проводить на детских площадках. Организуйте день рождения или
                            девичник в беседке на набережной. Для групповых занятий для йоги у нас есть большой травяной пляж.
                            Для командных игр у нас универсальные спортивные площадки и крытые и открытые пляжные корты. Мы
                            открыты для обсуждения любых мероприятий.
                        </span>
                    </div>

                    <div className='page-events__about-quatr about-quatr' data-scroll-section>
                        <div className='about-quatr__wrapper'
                            data-aos={'fade-right'} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-quatr__text'>
                                <h2>БАНКЕТЫ</h2>
                                <span>
                                    Пригласите своих гостей в наш банкетный зал и создайте яркие воспоминания. <br></br>
                                    <b>Минимальный заказ - 2500 руб. на человека</b>
                                </span>
                                <Link href={DEFAULTS.MENU.BANQUET} className='btn btn_black'>Банкетное меню</Link>
                            </div>
                            <div className='about-quatr__image'
                                data-aos={'fade-left'} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                <Image src='/img/events/banquet-prev.webp' width={670} height={485} alt=''
                                    loader={vkCloudLoader}
                                />
                            </div>
                        </div>
                    </div>




                    <TextBlock title={{ type: 'h4', text: 'Оформление на любой вкус' }}
                        // description={[
                        // `Вы можете провести незабываемый праздник`,
                        // ]}
                        style={{ paddingBottom: 0 }}
                    />

                    <div className='event-slider container' style={{ marginTop: 30 }}>
                        <Swiper
                            {...({
                                modules: [Lazy, FreeMode, Pagination, Navigation, Virtual],
                                navigation: {
                                    enable: true
                                },
                                virtual: true,

                                spaceBetween: 20,
                                breakpoints: {
                                    1: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    991: {
                                        slidesPerView: 1,
                                        centeredSlides: false,
                                        spaceBetween: 20,
                                    },
                                    1100: {
                                        slidesPerView: 1,
                                        initialSlide: 1,
                                    },
                                },

                            } as any)}
                        >
                            <SwiperSlide >
                                <div className={`event-slider__image`} >
                                    <Image src='/img/events/banquet-slides/1.webp' height={600} width={970} alt={'Plazma'}
                                        loading="lazy"
                                        quality={90}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                        loader={vkCloudLoader}
                                    />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className={`event-slider__image`} >
                                    <Image src='/img/events/banquet-slides/2.webp' height={600} width={970} alt={'Plazma'}
                                        loading="lazy"
                                        quality={90}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                        loader={vkCloudLoader}
                                    />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className={`event-slider__image`} >
                                    <Image src='/img/events/banquet-slides/3.webp' height={600} width={970} alt={'Plazma'}
                                        loading="lazy"
                                        quality={90}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                        loader={vkCloudLoader}
                                    />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className={`event-slider__image`} >
                                    <Image src='/img/events/banquet-slides/4.webp' height={600} width={970} alt={'Plazma'}
                                        loading="lazy"
                                        quality={90}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                        loader={vkCloudLoader}
                                    />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className={`event-slider__image`} >
                                    <Image src='/img/events/banquet-slides/5.webp' height={600} width={970} alt={'Plazma'}
                                        loading="lazy"
                                        quality={90}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                        loader={vkCloudLoader}
                                    />
                                </div >
                            </SwiperSlide>
                        </Swiper>
                    </div>





                    <div id='PlazmaCelebrate' className='page-events__about-img-bg about-img-bg' data-scroll-section>
                        <picture className='about-img-bg__img' data-scroll data-scroll-speed="-4">
                            <img className='js--mobile-parallax' src='/img/events/about-img.webp' alt='Мероприятия в парк-отеле Plazma' />
                        </picture>


                        <div className='about-img-bg__inner'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='about-img-bg__in-img'>
                                <img src='/img/events/about-img-bg-inner.webp' alt='' />
                            </picture>
                            <div className='about-img-bg__text'>
                                <h2>Праздничные и тематические мероприятия</h2>
                                <span>Детские площадки, пляж, шатер-ресторан или другие площадкимогут стать
                                    пространством для вашего тематического мероприятия, например, годовщины
                                    свадьбы, гендер-пати или детского дня рождения в стиле Смурфиков.</span>
                                {/* <div className='btn btn_black'>Подробнее</div> */}
                            </div>

                        </div>
                    </div>

                    <div className='page-events__about-quatr about-quatr reverse' data-scroll-section>
                        <div className='about-quatr__wrapper'
                            data-aos={'fade-right'} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-quatr__text'>
                                <h2>КОРПОРАТИВЫ</h2>
                                <span>
                                    Отвлекитесь от деловой обстановки вместе со своими коллегами. <br></br>
                                    <b>Минимальный заказ - 2500 руб. на человека</b>
                                </span>
                                <Link href={DEFAULTS.MENU.BANQUET} className='btn btn_black'>Банкетное меню</Link>
                            </div>
                            <div className='about-quatr__image'
                                data-aos={'fade-left'} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                <Image src='/img/events/corp-prev.webp' width={670} height={485} alt=''
                                    loader={vkCloudLoader}
                                />
                            </div>
                        </div>
                    </div>


                    {/* <TextBlock title={{ type: 'h4', text: 'Оформление на любой вкус' }}
                        description={[
                            `Питание подобрано с учетом возраста и нагрузок спортсменов. </br> Также мы можем составить индивидуальное меню!`,
                        ]}
                        style={{ paddingBottom: 0 }}
                    /> */}

                    <div className='event-slider container'>
                        <Swiper
                            {...({
                                modules: [Lazy, FreeMode, Pagination, Navigation, Virtual],
                                navigation: {
                                    enable: true
                                },
                                virtual: true,

                                spaceBetween: 20,
                                breakpoints: {
                                    1: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    991: {
                                        slidesPerView: 1,
                                        centeredSlides: false,
                                        spaceBetween: 20,
                                    },
                                    1100: {
                                        slidesPerView: 1,
                                        initialSlide: 1,
                                    },
                                },

                            } as any)}
                        >

                            <SwiperSlide >
                                <div className={`event-slider__image`} >
                                    <Image src='/img/events/corp-slides/1.webp' height={600} width={970} alt={'Plazma'}
                                        loading="lazy"
                                        quality={90}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                        loader={vkCloudLoader}
                                    />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className={`event-slider__image`} >
                                    <Image src='/img/events/corp-slides/2.webp' height={600} width={970} alt={'Plazma'}
                                        loading="lazy"
                                        quality={90}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                        loader={vkCloudLoader}
                                    />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className={`event-slider__image`} >
                                    <Image src='/img/events/corp-slides/3.webp' height={600} width={970} alt={'Plazma'}
                                        loading="lazy"
                                        quality={90}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
                                        loader={vkCloudLoader}
                                    />
                                </div >
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div id='Conferences' className='page-events__about-two-col about-two-col container' data-scroll-section>
                        <div className='about-two-col__left'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
                            data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='about-two-col__img'>
                                <img src='/img/events/corp-1.webp' alt='Мероприятия в парк-отеле Plazma' />
                            </picture>

                            <div className='about-two-col__text'>
                                <h2>Конференции</h2>
                                <span>Конференц-зал вместимостью до 100 человек.<br />
                                    Проектор с выдвижным экраном и звуковое оборудование.<br />
                                    Возможность организации фуршета.<br />
                                </span>
                                {/* <!-- <div className='btn btn_black'>Подробнее</div> --> */}
                            </div>
                        </div>
                        <div className='about-two-col__right'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
                            data-aos-once={DEFAULTS.AOS.once} data-aos-delay='400'>
                            <picture className='about-two-col__img'>
                                <img src='/img/events/corp-2.webp' alt='Мероприятия в парк-отеле Plazma' />
                            </picture>
                        </div>
                    </div>



                    <div className=' event-conditions'>
                        <div className='event-conditions__item'>
                            <span className='event-conditions__title'>
                                Летний шатер
                            </span>

                            <div className='event-conditions__info'>
                                <div className='event-conditions__row'>
                                    <span className='condition-name'>Вместимость:</span>

                                    <div className='event-conditions__col'>
                                        <span className='condition-value'>~ 70-80 человек</span>
                                    </div>
                                </div>
                                <div className='event-conditions__row'>
                                    <span className='condition-name'>Аренда зала:</span>

                                    <div className='event-conditions__col'>
                                        <span className='condition-value'>30 000 рублей</span>
                                    </div>
                                </div>
                                <div className='event-conditions__row'>
                                    <span className='condition-name'>Часы работы:</span>

                                    <div className='event-conditions__col'>
                                        <span className='condition-value'>с 10:00 до 23:00</span>
                                        <span className='condition-value'>громкая музыка до 22:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='event-conditions__divider' />

                        <div className='event-conditions__item'>
                            <span className='event-conditions__title'>
                                Банкетный зал
                            </span>

                            <div className='event-conditions__info'>
                                <div className='event-conditions__row'>
                                    <span className='condition-name'>Вместимость:</span>

                                    <div className='event-conditions__col'>
                                        <span className='condition-value'>~ 70-80 человек</span>
                                    </div>
                                </div>
                                <div className='event-conditions__row'>
                                    <span className='condition-name'>Аренда зала:</span>

                                    <div className='event-conditions__col'>
                                        <span className='condition-value'>вс. – чт. – 30 000 рублей</span>
                                        <span className='condition-value'>пт. – сб. - 40 000 рублей</span>
                                        <span className='condition-value'>праздники - 40 000 рублей</span>
                                    </div>
                                </div>
                                <div className='event-conditions__row'>
                                    <span className='condition-name'>Часы работы:</span>

                                    <div className='event-conditions__col'>
                                        <span className='condition-value'>с 10:00 до 23:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='event-conditions__divider' />

                        <div className='event-conditions__item'>
                            <span className='event-conditions__title'>
                                Ресторан
                            </span>

                            <div className='event-conditions__info'>
                                <div className='event-conditions__row'>
                                    <span className='condition-name'>Вместимость:</span>

                                    <div className='event-conditions__col'>
                                        <span className='condition-value'>I зал ~ 30 чел,</span>
                                        <span className='condition-value'>II зал ~ 60 чел.</span>
                                    </div>
                                </div>
                                <div className='event-conditions__row'>
                                    <span className='condition-name'>Аренда зала:</span>

                                    <div className='event-conditions__col'>
                                        <span className='condition-value'>цена под ключ</span>
                                    </div>
                                </div>
                                <div className='event-conditions__row'>
                                    <span className='condition-name'>Часы работы:</span>

                                    <div className='event-conditions__col'>
                                        <span className='condition-value'>вс. - пт. с 11:00 до 23:00</span>
                                        <span className='condition-value'>суббота с 11:00 до 02:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* <Footer /> */}
            </main>
        </>

    )
}
