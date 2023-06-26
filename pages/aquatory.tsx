import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PromoBackground from '../components/PromoBackground'
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import { aquatoryObjData } from '../data/aquatoryObj'
import AquatoryObject from '../components/objects/AquatoryObject'
export default function PageAquatory() {



    return (
        <>
            <main className='page page-aquatory'>
                <div className='relative' data-scroll-container>
                    <div className='main__promo' data-scroll-section>
                        <Header />
                        <div className="main__video-wrapper">
                            <div className="main__video-box">
                                {/* <!-- <video className="main__video" muted loop autoplay>
                                <source src="video/bgvideo.webm" type="video/webm">

                                    <source src="video/bgvideo.mp4" type="video/mp4">
                                    </video> --> */}
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

                        {/* @@include('./../components/_promo-action.html',{ }) */}
                    </div>

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-aquatory__welcome text-section text-section_big container' data-scroll-section>
                        <span className='h2-title'>Акватория «PLAZMA»</span>
                        <span className='text'>
                            Акватория парк-отеля «PLAZMA» – это настоящий оазис, место, где гости могут отвлечься от шума и
                            суеты повседневной жизни и отдохнуть в успокаивающих объятиях природы.
                        </span>
                    </div>

                    <div className='page-aquatory__promo-info promo-info container' data-scroll-section>
                        <div className='promo-info__upper'>
                            <div className='promo-info__text-wrapper'>
                                <span className='text-title uppercase'>Отдых для всей семьи</span>
                                <span className='text'>Ресторан Adachi - это ресторан в японском стиле, расположенный в самом
                                    сердце Бирмингема, штат Мичиган, в викторианском особняке Пибоди.
                                </span>
                            </div>

                            <picture className='img-big'>
                                <img src='img/aquatory/1.png' alt='' />
                            </picture>
                        </div>

                        <div className='promo-info__bottom'>
                            <picture className='img-med'>
                                <img src='img/aquatory/2.png' alt='' />
                            </picture>

                            <picture className='img-low'>
                                <img src='img/aquatory/3.png' alt='' />
                            </picture>

                        </div>

                        <div className='flex-row'>
                            <span className='footnote-text text-normal'>Ресторан Adachi - это ресторан в японском стиле,
                                расположенный в самом сердце
                                Бирмингема, штат Мичиган, в викторианском особняке Пибоди. </span>
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
                            <img src='img/aquatory/5.png' alt='' />
                        </picture>
                    </div>

                    <div className='page-aquatory__props aquatory-props container separator-after' data-scroll-section>
                        <div className='aquatory-props__first'>
                            <div className='page-aquatory__list'>
                                <span className='page-aquatory__list-title'>На территории:</span>
                                <ul>
                                    <li className='page-aquatory__list-item'>Водоём</li>
                                    <li className='page-aquatory__list-item'>Пляж</li>
                                    <li className='page-aquatory__list-item'>Кабинки для переодевания</li>
                                    <li className='page-aquatory__list-item'>Туалет</li>
                                    <li className='page-aquatory__list-item'>Душ</li>
                                    <li className='page-aquatory__list-item'>Кафе Smash</li>
                                    <li className='page-aquatory__list-item'>Гигантские шахматы</li>
                                    <li className='page-aquatory__list-item'>Мини-зоопарк</li>
                                    <li className='page-aquatory__list-item'>Детская площадка</li>
                                    <li className='page-aquatory__list-item'>Детская песочница</li>
                                    <li className='page-aquatory__list-item'>Беседки с мангалом (оплачивается дополнительно)
                                    </li>
                                    <li className='page-aquatory__list-item'>Полуостров с бассейном (оплачивается дополнительно)
                                    </li>
                                    <li className='page-aquatory__list-item'>Шатёр (где можно перекусить по меню ресторана)</li>
                                    <li className='page-aquatory__list-item'>Волейбольные площадки (оплачивается дополнительно)
                                    </li>
                                </ul>
                            </div>

                            <picture className='aquatory-props__img'>
                                <img src='img/aquatory/6.png' alt='' />
                            </picture>
                        </div>

                        <div className='aquatory-props__second'>
                            <picture className='aquatory-props__img'>
                                <img src='img/aquatory/7.png' alt='' />
                            </picture>

                            <div className='page-aquatory__list'>
                                <span className='page-aquatory__list-title'>Дополнительно:</span>
                                <ul>
                                    <li className='page-aquatory__list-item'>Аренда шезлонга – 150 рублей.</li>
                                    <li className='page-aquatory__list-item'>Аренда полотенца (180х100) – 200 рублей + залог
                                        1000 рублей наличными.</li>
                                    <li className='page-aquatory__list-item'>Для детей в продаже имеются нарукавники, жилеты,
                                        круги для плавания, водяные пистолеты.</li>
                                    <li className='page-aquatory__list-item'>Масла для загара</li>
                                    <li className='page-aquatory__list-item'>Для игры в волейбол имеются мячи (на прокат)</li>
                                </ul>

                                <span className='text-normal'>На территории работают охранники-спасатели.</span>
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
                    <Footer />
                </div >
            </main>
        </>

    )
}
