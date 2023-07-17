import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
// import PromoBackground from '../../components/PromoBackground'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../../components/Button'
import Link from 'next/link'
import vkCloudLoader from '@/mw/utils/imageLoader'
// import { images } from 'imageImports'

export default function PageMeals() {



    return (
        <>
            <Head>
                <title>Питание в парк-отеле «PLAZMA»</title>
                {/* <meta name='description' content='' /> */}

                <meta
                    property='og:title'
                    content='Питание в парк-отеле «PLAZMA»' />
                {/* <meta
                    property='og:description'
                    content='' /> */}
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-meals'>
                <div className='relative main-wrap' data-scroll-container>
                    <div className='meals__promo' data-scroll-section>
                        {/* <Header darken /> */}

                        <div className='page-meals__cards'>

                            <div className='page-meals__cards-section'>

                                <Link className='page-meals__card' href='meals/restaurant'>
                                    <div className='page-meals__card-image'>
                                        {/* <Image src={images.meals.img2Jpg} width={0} height={0} alt='' placeholder='blur' /> */}
                                        <Image src={'/img/meals/2.webp'} width={670} height={600} alt='' loader={vkCloudLoader}/>
                                    </div>
                                    <div className='page-meals__card-dimmer'></div>
                                    <span className='page-meals__card-title'>
                                        Ресторан
                                    </span>
                                    <div className='btn btn_white'>Подробнее</div>
                                </Link>

                                <Link className='page-meals__card' href='meals/smash'>
                                    <div className='page-meals__card-image'>
                                        {/* <Image src={images.meals.img3Jpg} width={0} height={0} alt='' placeholder='blur' /> */}
                                        <Image src={'/img/meals/3.webp'} width={670} height={600} alt='' loader={vkCloudLoader}/>
                                    </div>
                                    <div className='page-meals__card-dimmer'></div>
                                    <span className='page-meals__card-title'>
                                        Кафе SMASH
                                    </span>
                                    <div className='btn btn_white'>Подробнее</div>
                                </Link>

                            </div>

                            <div className='page-meals__cards-section'>
                                <Link className='page-meals__card' href='meals/banquet-hall'>
                                    <div className='page-meals__card-image'>
                                        {/* <Image src={images.meals.img1Jpg} width={0} height={0} alt='' placeholder='blur' /> */}
                                        <Image src={'/img/meals/1.webp'} width={670} height={600} alt='' loader={vkCloudLoader}/>
                                    </div>
                                    <div className='page-meals__card-dimmer'></div>
                                    <span className='page-meals__card-title'>
                                        Банкетный зал
                                    </span>
                                    <div className='btn btn_white'>Подробнее</div>
                                </Link>

                                <Link className='page-meals__card' href='meals/tent'>
                                    <div className='page-meals__card-image'>
                                        {/* <Image src={images.meals.img4Jpg} width={0} height={0} alt='' placeholder='blur' /> */}
                                        <Image src={'/img/meals/4.webp'} width={670} height={600} alt='' loader={vkCloudLoader}/>
                                    </div>
                                    <div className='page-meals__card-dimmer'></div>
                                    <span className='page-meals__card-title'>
                                        Летний шатер
                                    </span>
                                    <div className='btn btn_white'>Подробнее</div>
                                </Link>
                            </div>



                        </div>

                    </div>

                    <div className='base-bg' data-scroll-section></div>

                </div >
                {/* <Footer /> */}
            </main>
        </>

    )
}
