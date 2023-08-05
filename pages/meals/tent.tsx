import Head from 'next/head'
import PlazmaSlider from '../../components/PlazmaSlider'
import Promo from '../../components/Promo'
import Link from 'next/link'
import { DEFAULTS } from 'defaults'


export default function PageTent() {

    return (
        <>
            <Head>
                <title>Летний шатер «PLAZMA»</title>
                <meta name='description' content='Расположенный на полуострове, 
                он предлагает неповторимую атмосферу и вид на водоем. В нашем 
                шатре вы сможете насладиться прохладными напитками и изысканными 
                блюдами, приготовленными нашими опытными поварами.' />

                <meta
                    property='og:title'
                    content='Летний шатер «PLAZMA»' />
                <meta
                    property='og:description'
                    content='Расположенный на полуострове, 
                    он предлагает неповторимую атмосферу и вид на водоем. В нашем 
                    шатре вы сможете насладиться прохладными напитками и изысканными 
                    блюдами, приготовленными нашими опытными поварами.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-smash'>
                <div className='relative main-wrap' data-scroll-container>
                    <Promo image='tent' />
                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-rest__welcome rest-welcome' data-scroll-section>
                        <div className='big-p big-p_border container'
                            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
                            data-aos-once={DEFAULTS.AOS.once}>
                            <span className='big-p__title'>Мы рады каждому гостю.</span>
                            <span className='big-p__desc'>
                                Расположенный на полуострове, он предлагает неповторимую атмосферу и вид на водоем.
                                В нашем шатре вы сможете насладиться прохладными напитками и изысканными блюдами, приготовленными нашими опытными поварами.
                                Мы стремимся создать комфортное пространство, где вы сможете расслабиться и насладиться приятной беседой с друзьями или близкими.
                                Независимо от того, ищете ли вы место для романтического ужина или большой семейной встречи,
                                наш летний шатер-ресторан позволит насладиться приятными моментами на свежем воздухе в уютной обстановке.
                            </span>

                            <Link className='btn btn_black big-p__btn'
                                href={DEFAULTS.MENU.REST}
                                target='_blank' rel='noopener noreferrer'>
                                Меню ресторана
                            </Link>
                        </div>

                        <PlazmaSlider data='summerTentSlider' />
                    </div>
                </div >
            </main>
        </>

    )
}
