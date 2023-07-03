import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import { aquatoryObjData } from '../data/aquatoryObj'
import AquatoryObject from '../components/objects/AquatoryObject'
import Promo from '../components/Promo'
import PlazmaSertItem from '../components/PlazmaSertItem'
import { images } from 'imageImports'
export default function PageAquatory() {



    return (
        <>
            <Head>
                <title>Акватория «PLAZMA»</title>
                <meta name='description' content='Plazma Акватория – это оазис внутри города, место, где гости могут 
                отвлечься от шума и суеты повседневной жизни и отдохнуть в объятиях природы.' />

                <meta
                    property='og:title'
                    content='Акватория «PLAZMA»' />
                <meta
                    property='og:description'
                    content='Plazma Акватория – это оазис внутри города, место, где гости могут 
                    отвлечься от шума и суеты повседневной жизни и отдохнуть в объятиях природы.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-aquatory'>
                <div className='relative main-wrap' data-scroll-container>
                    {/* <div className='main__promo' data-scroll-section>
                        <Header />
                        <div className="main__video-wrapper">
                            <div className="main__video-box">
                                <div className='main__welcome-bg welcome-aquatory'></div>
                                <div className='main__video-overlay'></div>
                            </div>
                        </div>
                        <div className='main__promo-logo'>
                            <h1>
                                <span>парк-отель</span>
                                <span>plazma</span>
                            </h1>
                        </div>
                    </div> */}

                    <Promo imgUrl={images.backgrounds.imghotelAquatoryPng} />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-aquatory__welcome text-section text-section_big container' data-scroll-section>
                        <span className='h2-title'>Акватория «PLAZMA»</span>
                        <span className='text'>
                            Plazma Акватория – это оазис внутри города, место, где гости могут отвлечься от шума и суеты повседневной жизни и отдохнуть в объятиях природы.
                        </span>
                    </div>

                    <div className='page-aquatory__promo-info promo-info container' data-scroll-section>
                        <div className='promo-info__upper'>
                            <div className='promo-info__text-wrapper'>
                                <span className='text-title uppercase'>Отдых для всей семьи</span>
                                <span className='text'>Акватория объединяет людей с разными интересами, у нас найдется занятие для каждого члена вашей семьи.
                                    Дети заводят новые знакомства на детской площадке или катаются на самокатах, подростки играют в волейбол или устраивают пикник,
                                    родители с удовольствием жарят шашлык на мангале, а бабушки и дедушки могут отдохнуть в тени под соснами, наслаждаясь природой.
                                </span>
                            </div>

                            <picture className='img-big'>
                                <Image height={550} width={770} src={images.aquatory.img1Png} alt='' placeholder='blur' />
                            </picture>
                        </div>

                        <div className='promo-info__bottom'>
                            <picture className='img-med'>
                                <Image height={470} width={760} src={images.aquatory.img2Png} alt='' placeholder='blur' />
                            </picture>

                            <picture className='img-low'>
                                <Image height={470} width={370} src={images.aquatory.img3Png} alt='' placeholder='blur' />
                            </picture>

                        </div>

                        <div className='flex-row'>
                            <span className='footnote-text text-normal'>На территории работают аттестованные охранники-спасатели!</span>
                        </div>
                    </div>

                    <div className='page-aquatory__price container' data-scroll-section>
                        <div className='worktime-section'>
                            <div className='aquatory-worktime__heading'>
                                <span className='title'>Время работы акватории</span>
                                <span className='text-normal'>с 10:00 до 22:00</span>
                            </div>

                            <div className='worktime-section__timetable'>
                                <span className='worktime-section__timetable-title'>Стоимость посещения</span>
                                <div className='worktime-section__timetable-content'>
                                    <div className='worktime-section__timetable-row'>
                                        <div className='worktime-section__timetable-box'>
                                            <span className='worktime-section__timetable-text'>Взрослые</span>
                                            <span className='worktime-section__timetable-text'>(с 11 лет и старше)</span>
                                        </div>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>300 рублей</span>
                                    </div>

                                    <div className='worktime-section__timetable-row'>
                                        <div className='worktime-section__timetable-box'>
                                            <span className='worktime-section__timetable-text'>Дети</span>
                                            <span className='worktime-section__timetable-text'>(с 5 до 10 лет)</span>
                                        </div>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>200 рублей</span>
                                    </div>

                                    <div className='worktime-section__timetable-row'>
                                        <div className='worktime-section__timetable-box'>
                                            <span className='worktime-section__timetable-text'>Дети</span>
                                            <span className='worktime-section__timetable-text'>(до 5 лет)</span>
                                        </div>
                                        <i className='time-circle'></i>
                                        <span className='worktime-section__timetable-text'>бесплатно</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <picture className='page-aquatory__price-img'>
                            <Image width={11701170} height={700} src={images.aquatory.img5Png} alt='' placeholder='blur' />
                        </picture>
                    </div>

                    <div className='page-aquatory__props aquatory-props container separator-after' data-scroll-section>
                        <div className='aquatory-props__first'>
                            <div className='page-aquatory__list'>
                                <span className='page-aquatory__list-title'>На территории:</span>
                                <ul>

                                    <li className='page-aquatory__list-item'>Искусственный живой водоём 12000 кв.м.</li>
                                    <li className='page-aquatory__list-item'>Пляж</li>
                                    <li className='page-aquatory__list-item'>Кабинки для переодевания</li>
                                    <li className='page-aquatory__list-item'>Туалет</li>
                                    <li className='page-aquatory__list-item'>Душ</li>
                                    <li className='page-aquatory__list-item'>Столовая Smash</li>
                                    <li className='page-aquatory__list-item'>Шатёр-ресторан</li>
                                    <li className='page-aquatory__list-item'>Большие шахматы</li>
                                    <li className='page-aquatory__list-item'>Мини-зоопарк</li>
                                    <li className='page-aquatory__list-item'>2 детские площадки</li>
                                    <li className='page-aquatory__list-item'>Детская песочница</li>
                                    <li className='page-aquatory__list-item'>Воркаут площадка</li>
                                    <li className='page-aquatory__list-item'>Беседки с мангалом (оплачивается дополнительно)
                                    </li>
                                    <li className='page-aquatory__list-item'>Полуостров с бассейном (оплачивается дополнительно)
                                    </li>
                                    <li className='page-aquatory__list-item'>Универсальные спортивные площадки (оплачивается дополнительно)</li>
                                    <li className='page-aquatory__list-item'>Волейбольные площадки (оплачивается дополнительно)
                                    </li>
                                </ul>
                            </div>

                            <picture className='aquatory-props__img'>
                                <Image width={1170} height={660} src={images.aquatory.img6Png} alt='' placeholder='blur' />
                            </picture>
                        </div>

                        <div className='aquatory-props__second'>
                            <picture className='aquatory-props__img'>
                                <Image width={1170} height={638} src={images.aquatory.img7Png} alt='' placeholder='blur' />
                            </picture>

                            <div className='page-aquatory__list'>
                                <span className='page-aquatory__list-title'>Дополнительно:</span>
                                <ul>
                                    <li className='page-aquatory__list-item'>Аренда шезлонга – 150 рублей.</li>
                                    <li className='page-aquatory__list-item'>Аренда полотенца (180х100) – 200 рублей + залог
                                        1000 рублей наличными.</li>
                                    <li className='page-aquatory__list-item'>Прокат веломобилей – 300 рублей (20 минут, 1 человек)</li>
                                    <li className='page-aquatory__list-item'>Прокат электролодок  – 300 рублей (5 минут, 2 человека)</li>
                                    <li className='page-aquatory__list-item'>Для детей в продаже имеются нарукавники, жилеты,
                                        круги для плавания, водяные пистолеты.</li>
                                    <li className='page-aquatory__list-item'>Масла для загара</li>
                                    <li className='page-aquatory__list-item'>Для игры в волейбол имеются мячи (на прокат)</li>
                                </ul>

                                {/* <span className='text-normal'>На территории работают аттестованные охранники-спасатели.</span> */}
                            </div>
                        </div>
                    </div>

                    {aquatoryObjData.map((x, i) =>
                        <AquatoryObject
                            key={i}
                            id={x.id}
                            title={x.title}
                            description={x.description}
                            images={x.images}
                            additionalItems={x.additionalItems}
                            includedImg={x.includedImg}
                            includedItems={x.includedItems}
                            priceCards={x.priceCards}
                            additionalText={x.additionalText}
                            attentionText={x.attentionText}
                        />)}


                    <div className='aquatory-sert container'>
                        <span className='text'>Территория и бассейн зоны отдыха соответствуют всем санитарно-эпидемиологическим нормам.</span>
                        <span className='text'> По всем лабораторным исследованиям и анализам вода в нашем водоеме имеет самые лучшие показатели в Тульской области .</span>
                        <PlazmaSertItem img={'/img/sert/1.jpg'} />
                        <PlazmaSertItem img={'/img/sert/2-1.jpg'} />
                        <PlazmaSertItem img={'/img/sert/2-2.jpg'} />
                        <PlazmaSertItem img={'/img/sert/2-3.jpg'} />
                    </div>
                </div >
            </main>
        </>

    )
}
