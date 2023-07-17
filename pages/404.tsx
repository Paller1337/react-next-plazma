import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import PromoBackground from '../../components/PromoBackground'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import { BnovoContext } from '../components/bnovo/bnovoContext'
import TouchSlider from '@/components/TouchSlider'
import { MailSubscribe } from '@/components/modals/MailSubscribe'
import Link from 'next/link'

export async function getStaticProps() {
    // Пример: отправка данных на сервер аналитики (предполагается наличие библиотеки для работы с аналитикой, такой как Google Analytics)
    

    return {
        props: {},
    };
}

export default function PageNotFound() {
    return (
        <>
            <Head>
                <title>Страница не найдена</title>

                <meta name='description' content='Страница не найдена' />
                {/* <meta name='keywords' content='' /> */}

                <meta property='og:title' content='Страница не найдена' />
                <meta property='og:description' content='Несуществующая страница. ' />
                {/* <meta property='og:image' content={getUrl('root') + '/images/og-img/404og.jpg'} /> */}

                <meta property='og:type' content='website' />
            </Head>
            <main className='page page-booking page-not-found' style={{ background: `#262626` }}>
                <div className='relative main-wrap' data-scroll-container>
                    <div className='page-not-found__about' data-scroll-section>
                        <div id="booking_iframe" className='container'></div>

                        <div className='big-p container'>
                            <span className='big-p__title'>404. Страница не найдена</span>
                            <Link href={'/'} className='btn btn_black'>На главную</Link>
                        </div>
                    </div>
                    <div className='base-bg' data-scroll-section></div>
                </div >
            </main>
        </>
    )
}
