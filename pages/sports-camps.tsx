import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import PromoMin from '../components/PromoMin'
import ColumnCard from '../components/ColumnCard'
import RowCard from '../components/RowCard'
import TextBlock from '../components/TextBlock'
import InputRange from '../components/form/InputRange'
import InputText from '../components/form/InputText'
import InputSelect from '../components/form/InputSelect'
import InputRadio from '../components/form/InputRadio'
import SportCalculator from '../components/SportCalculator'
import { images } from 'imageImports'




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
                    <PromoMin imgUrl={images.backgrounds.imgsportsCampsMinJpg}
                        title='СПОРТ В ПАРК-ОТЕЛЕ PLAZMA'
                        description={`Мы любим спорт и поэтому предоставляем нашим единомышленникам 
                        комфортабельные условия для тренировок, питания и проживания.`} />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-events__welcome text-section text-section_big container' data-scroll-section>
                        <span className='h2-title'>«PLAZMA.SPORT»</span>
                        <span className='text'>
                            К 2023 году мы стали площадкой для спортивных сборов для более чем 100 команд,
                            в том числе для Академии ФК «Локомотив» г.Москва, Академии Баскетбола «Олимпийская деревня-80» г.Москва.
                        </span>
                    </div>



                    <div className='page-index__about-hotel about-hotel container' data-scroll-section>
                        <div className='about-hotel__wrapper'>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__text'>Качество и комфорт</span>
                                <span className='about-hotel__desc'>В наших спортивных объектах проводится регулярный
                                    мониторинг соответствия с самыми высокими стандартами, чтобы обеспечить
                                    максимальный комфорт, безопасность и оптимальную игровую среду для спортсменов.
                                </span>
                            </div>

                            <picture className='about-hotel__img img_min'>
                                <img src='/img/sports-camps/1.jpg' alt='' />
                            </picture>
                        </div>


                        <div className='about-hotel__wrapper reverse'>
                            <div className='about-hotel__about'>
                                <span className='about-hotel__desc'>Мы как никто понимаем, что качество спортивных
                                    объектов является ключом к успешному спортивному мероприятию, именно поэтому мы
                                    отобрали лучшие решения и воплотили их в жизнь.
                                </span>
                            </div>

                            <picture className='about-hotel__img img_min'>
                                <img src='/img/sports-camps/2.jpg' alt='' />
                            </picture>
                        </div>
                    </div>


                    <TextBlock title={{ type: 'h3', text: 'Питание для спортсменов' }}
                        description={[
                            `Питание подобрано с учетом возраста и нагрузок спортсменов. </br> Также мы можем составить индивидуальное меню!`,
                            `Питание спортсменов может происходить на нескольких площадках:`,
                        ]}
                        style={{ paddingBottom: 0 }}
                    />


                    <div className='meals-preview-cards container'>
                        <div className='meals-preview-card'>
                            <picture className='meals-preview-card__img'>
                                <Image width={0} height={0} src={images.meals.min.img1Jpg} alt='' placeholder='blur' />
                            </picture>
                            <span className='meals-preview-card__text'>
                                Ресторан
                            </span>
                        </div>

                        <div className='meals-preview-card'>
                            <picture className='meals-preview-card__img'>
                                <Image width={0} height={0} src={images.meals.min.img2Jpg} alt='' placeholder='blur' />
                            </picture>
                            <span className='meals-preview-card__text'>
                                Кафе-столовая Smash
                            </span>
                        </div>

                        <div className='meals-preview-card'>
                            <picture className='meals-preview-card__img'>
                                <Image width={0} height={0} src={images.meals.min.img3Jpg} alt='' placeholder='blur' />
                            </picture>
                            <span className='meals-preview-card__text'>
                                Банкетный-конференц-зал
                            </span>
                        </div>

                        <div className='meals-preview-card'>
                            <picture className='meals-preview-card__img'>
                                <Image width={0} height={0} src={images.meals.min.img4Jpg} alt='' placeholder='blur' />
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

                    <div className='column-cards--wrapper container' style={{ paddingTop: 0 }}>
                        <ColumnCard
                            title='Делюкс на набережной'
                            img={{ h: 770, w: 570, src: images.sportsCamps.rooms.img1Jpg }}
                        />

                        <ColumnCard
                            title='Спортивный копрус - 1 этаж'
                            img={{ h: 770, w: 570, src: images.sportsCamps.rooms.img2Jpg }}
                        />

                        <ColumnCard
                            title='Спортивный копрус - 2 этаж'
                            img={{ h: 770, w: 570, src: images.sportsCamps.rooms.img3Jpg }}
                        />
                    </div>


                    <div className='page-sports-camps__calculate container'>
                        <TextBlock title={{ type: 'h2', text: 'Сколько стоят сборы в «PLAZMA»' }}
                            style={{ paddingBottom: 70, paddingTop: 70 }}
                        />

                        <SportCalculator />

                    </div>

                </div >

                {/* <Footer /> */}
            </main>

        </>

    )
}
