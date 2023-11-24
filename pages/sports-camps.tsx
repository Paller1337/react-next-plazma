import Head from 'next/head'
import Image from 'next/image'
import PromoMin from '../components/PromoMin'
import ColumnCard from '../components/ColumnCard'
import TextBlock from '../components/TextBlock'
import SportCalculator from '../components/SportCalculator'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination } from 'swiper'
import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults'
import SportObjectsMenu from '@/components/SportObjectsMenu'
import RowCard from '@/components/RowCard'
import SportNews from '@/components/SportNews'

export default function PageSportsCamps() {
    return (
        <>
            <Head>
                <title>Спортивная база отдыха «PLAZMA.SPORT»</title>
                <meta name='description' content='К 2023 году мы стали площадкой для 
                спортивных сборов для более чем 100 команд, в том числе для Академии 
                ФК «Локомотив» г.Москва, Академии Баскетбола «Олимпийская деревня-80» г.Москва.' />

                <meta
                    property='og:title'
                    content='Спортивная база отдыха «PLAZMA.SPORT»' />
                <meta
                    property='og:description'
                    content='К 2023 году мы стали площадкой для 
                    спортивных сборов для более чем 100 команд, в том числе для Академии 
                    ФК «Локомотив» г.Москва, Академии Баскетбола «Олимпийская деревня-80» г.Москва.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-sports-camps'>
                <div className='relative main-wrap' data-scroll-container>
                    <PromoMin
                        // imgUrl={images.backgrounds.imgsportsCampsMinJpg}
                        image='sports-camp'
                        title='СПОРТ В ПАРК-ОТЕЛЕ PLAZMA'
                        description={`Мы любим спорт и поэтому предоставляем нашим единомышленникам 
                        комфортабельные условия для тренировок, питания и проживания.`}
                        button={{
                            text: 'Рассчитать сборы',
                            link: '/sports-camps#calculator',
                            icon: '/svg/calc.svg',
                        }}
                    />

                    <div className='base-bg' data-scroll-section></div>

                    <SportNews />
                    
                    <div className='page-events__welcome text-section text-section_big container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                        <span className='h2-title'>«PLAZMA.SPORT»</span>
                        <span className='text'>
                            К 2023 году мы стали площадкой для спортивных сборов для более чем 150 команд,
                            в том числе для ФК академии «Локомотив» г.Москва, баскетболистов из школы олимпийского резерва ЦСКА г. Москва, 
                            гимнасток из школы олимпийского резерва Пушкинского района г. Санкт-Петербург.
                        </span>
                    </div>



                    <div className='page-index__about-hotel about-hotel container' data-scroll-section>
                        <div className='about-hotel__wrapper'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__text'>Качество и комфорт</span>
                                <span className='about-hotel__desc'>В наших спортивных объектах проводится регулярный
                                    мониторинг соответствия с самыми высокими стандартами, чтобы обеспечить
                                    максимальный комфорт, безопасность и оптимальную игровую среду для спортсменов.
                                </span>
                            </div>

                            <picture className='about-hotel__img img_min'>
                                <img src='/img/sports-camps/1.webp' alt='' />
                            </picture>
                        </div>


                        <div className='about-hotel__wrapper reverse'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__desc'>Мы как никто понимаем, что качество спортивных
                                    объектов является ключом к успешному спортивному мероприятию, именно поэтому мы
                                    отобрали лучшие решения и воплотили их в жизнь.
                                </span>
                            </div>

                            <picture className='about-hotel__img img_min'>
                                <img src='/img/sports-camps/2.webp' alt='' />
                            </picture>
                        </div>
                    </div>

                    <SportObjectsMenu />

                    <TextBlock title={{ type: 'h3', text: 'Питание для спортсменов' }}
                        description={[
                            `Питание подобрано с учетом возраста и нагрузок спортсменов. </br> Также мы можем составить индивидуальное меню!`,
                            `Питание спортсменов может происходить на нескольких площадках:`,
                        ]}
                        style={{ paddingBottom: 0 }}
                    />


                    <div className='meals-preview-cards container'>
                        <div className='meals-preview-card'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='meals-preview-card__img'>
                                {/* <Image width={0} height={0} src={images.meals.min.img1Jpg} alt='' placeholder='blur' /> */}
                                <Image width={570} height={320} src={'/img/meals/min/1.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                            <span className='meals-preview-card__text'>
                                Ресторан
                            </span>
                        </div>

                        <div className='meals-preview-card'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='meals-preview-card__img'>
                                <Image width={570} height={320} src={'/img/meals/min/2.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                            <span className='meals-preview-card__text'>
                                Кафе-столовая Smash
                            </span>
                        </div>

                        <div className='meals-preview-card'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='meals-preview-card__img'>
                                <Image width={570} height={320} src={'/img/meals/min/3.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                            <span className='meals-preview-card__text'>
                                Банкетный-конференц-зал
                            </span>
                        </div>

                        <div className='meals-preview-card'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                            <picture className='meals-preview-card__img'>
                                <Image width={570} height={320} src={'/img/meals/min/4.webp'} alt=''
                                    loader={vkCloudLoader} />
                            </picture>
                            <span className='meals-preview-card__text'>
                                Летний Шатер
                            </span>
                        </div>
                    </div>


                    <TextBlock className='container' title={{ type: 'h3', text: 'Проживание для спортсменов' }}
                        description={`Оптимальные варианты размещения для спортсменов: </br>
                            Спортивный корпус 1 и 2 этаж, 5 корпус на набережной, 6 спортивный корпус на набережной 
                            с прямым выходом к универсальному спортивному залу и крытому залу пляжных видов спорта.` }
                        style={{ paddingBottom: 0, paddingTop: '220px' }}
                    />

                    <div className='column-cards--wrapper container --swiper-container' style={{ paddingTop: 0 }}>
                        <Swiper
                            {...({
                                modules: [FreeMode, Pagination],
                                // slidesPerView: slidesInPreview,
                                spaceBetween: 20,
                                breakpoints: {
                                    1: {
                                        slidesPerView: 1.1,
                                        centeredSlides: false,
                                        enabled: true
                                    },
                                    420: {
                                        slidesPerView: 1.2,
                                        enabled: true
                                    },
                                    768: {
                                        slidesPerView: 2.2,
                                        centeredSlides: true,
                                        enabled: true
                                    },
                                    1100: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                        initialSlide: 2,
                                        enabled: false,
                                        onchange: (swiper) => swiper.update()
                                    },
                                },

                            } as any)}
                        >
                            <SwiperSlide>
                                <ColumnCard
                                    title='Делюкс на набережной'
                                    img={[
                                        { h: 770, w: 570, src: '/img/sports-camps/rooms/col-1/1.webp' },
                                        { h: 770, w: 570, src: '/img/sports-camps/rooms/col-1/2.webp' },
                                        { h: 770, w: 570, src: '/img/sports-camps/rooms/col-1/3.webp' },
                                    ]}
                                    inSlider
                                />

                            </SwiperSlide>
                            <SwiperSlide>
                                <ColumnCard
                                    title='Евростандарт на набережной'
                                    img={[
                                        { h: 770, w: 570, src: '/img/sports-camps/rooms/col-2/1.webp' },
                                        { h: 770, w: 570, src: '/img/sports-camps/rooms/col-2/2.webp' },
                                        { h: 770, w: 570, src: '/img/sports-camps/rooms/col-2/3.webp' },
                                    ]}
                                    inSlider
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ColumnCard
                                    title='Спортивный копрус - 2 этаж'
                                    img={[
                                        { h: 770, w: 570, src: '/img/sports-camps/rooms/col-3/1.webp' },
                                        { h: 770, w: 570, src: '/img/sports-camps/rooms/col-3/2.webp' },
                                        { h: 770, w: 570, src: '/img/sports-camps/rooms/col-3/3.webp' },
                                    ]}
                                    inSlider
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    <TextBlock className='container' title={{ type: 'h2', text: 'Площадки, с которыми мы сотрудничаем' }}
                        style={{ paddingBottom: 20, paddingTop: '50px' }}
                    />

                    <div className='container'>
                        <RowCard
                            title='СТАДИОН'
                            desc={`Профессиональное футбольное поле с искусственным покрытием имеет размеры 105 м x 75 м. 
                            Идеально подходит для тренировок и соревнований. Обеспечивает ровную поверхность, амортизацию и дренажную систему.`}
                            italicDesc={`Цена: 2500 руб./час`}
                            img={{
                                w: 770, h: 570, src: [
                                    '/img/sport/other-objects/football/1.webp',
                                    '/img/sport/other-objects/football/2.webp',
                                    '/img/sport/other-objects/football/3.webp'
                                ]
                            }}
                        />
                        <RowCard
                            title='БАССЕЙН'
                            desc={`Бассейн площадью 625 м2 и длиной 25 метров предоставляет идеальные условия для занятий плаванием. 
                            Оборудован 6 дорожками, а его глубина варьируется от 4.5 метров до 1.2 метров.`}
                            italicDesc={`Цена: 1000 руб./час одна дорожка, рассчитано на 5-6 человек.`}
                            img={{
                                w: 770, h: 570, src:
                                    [
                                        '/img/sport/other-objects/pool/1.webp',
                                        '/img/sport/other-objects/pool/2.webp',
                                        '/img/sport/other-objects/pool/3.webp'
                                    ]
                            }}
                        />
                        <RowCard
                            title='ТРЕНАЖЕРНЫЙ ЗАЛ'
                            desc={`Тренажерный зал площадью 160 квадратных метров с разнообразным оборудованием для эффективных тренировок.`}
                            italicDesc={`Цена: 150 руб./час.`}
                            img={{
                                w: 770, h: 570, src:
                                    [
                                        '/img/sport/other-objects/workout-room/1.webp',
                                        '/img/sport/other-objects/workout-room/2.webp',
                                        '/img/sport/other-objects/workout-room/3.webp'
                                    ]
                            }}
                        />
                    </div>
                    <div className='page-sports-camps__calculate container'
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                        <TextBlock title={{ type: 'h2', text: 'Сколько стоят сборы в «PLAZMA»' }}
                            style={{ paddingBottom: 70, paddingTop: 70 }}
                        />

                        <SportCalculator />
                    </div>
                </div >
            </main>

        </>

    )
}
