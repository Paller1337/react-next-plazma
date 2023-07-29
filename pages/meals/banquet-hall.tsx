import Head from 'next/head'
import PlazmaSlider from '../../components/PlazmaSlider'
import Promo from '../../components/Promo'
import Link from 'next/link'
import { DEFAULTS } from 'defaults'

export default function PageBanquetHall() {
    return (
        <>
            <Head>
                <title>Банкетный зал «PLAZMA»</title>
                <meta name='description' content='Наш банкетный зал - отличное место для особых 
                событий и торжеств любого уровня. Он находится в отдельном здании, чтобы 
                никто вам не помешал. Просторный и элегантный, он подарит вам ощущение 
                особенности вашего события.' />

                <meta
                    property='og:title'
                    content='Банкетный зал «PLAZMA»' />
                <meta
                    property='og:description'
                    content='Наш банкетный зал - отличное место для особых 
                    событий и торжеств любого уровня. Он находится в отдельном здании, чтобы 
                    никто вам не помешал. Просторный и элегантный, он подарит вам ощущение 
                    особенности вашего события.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-smash'>
                <div className='relative main-wrap' data-scroll-container>
                    <Promo image='banquet-hall' />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-rest__welcome rest-welcome' data-scroll-section>
                        <div className='big-p big-p_border container'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
                            data-aos-once={DEFAULTS.AOS.once}>
                            <span className='big-p__title'>Мы рады каждому гостю.</span>
                            <span className='big-p__desc'>
                                Наш банкетный зал - отличное место для особых событий и торжеств любого уровня.
                                Он находится в отдельном здании, чтобы никто вам не помешал.
                                Просторный и элегантный, он подарит вам ощущение особенности вашего события.
                                У нас вы сможете провести свою свадьбу, юбилей, корпоративное мероприятие или что-то другое.
                                Мы предлагаем разнообразные варианты оформления и меню, чтобы каждый гость остался доволен.
                                Наш профессиональный персонал будет обслуживать вас с начала мероприятия до самого конца,
                                мы готовы воплотить ваши идеи и позаботиться о каждой детали, чтобы ваше мероприятие было таким, как вы его задумали.

                            </span>

                            {/* <Link className='btn btn_black big-p__btn'
                                href={'https://disk.yandex.ru/i/O15H5bA_ZSwh1A'}
                                target='_blank' rel='noopener noreferrer'>
                                Банкетное меню
                            </Link> */}

                            <div className='big-p__btn-group'>
                                <Link className='btn btn_black'
                                    href={'https://disk.yandex.ru/i/O15H5bA_ZSwh1A'}
                                    target='_blank' rel='noopener noreferrer'>
                                    Банкетное меню
                                </Link>

                                <Link className='btn btn_black'
                                    href={'https://disk.yandex.ru/i/peP4mC-yM1HJqw'}
                                    target='_blank' rel='noopener noreferrer'>
                                    Меню ресторана
                                </Link>
                            </div>
                        </div>

                        <PlazmaSlider data='banquetHall' />
                    </div>


                    <div className='footnote container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
                        data-aos-once={DEFAULTS.AOS.once}>
                        <div className='text'>Пригласите своих гостей в наш банкетный зал и создайте яркие воспоминания.</div>
                    </div>
                </div >
            </main>
        </>

    )
}
