import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { saunaObjData } from '../data/saunaObj'
import SaunaObject from '../components/objects/SaunaObject'
import Promo from '../components/Promo'
export default function PageSauna() {



    return (
        <>

            <main className='page page-saunas'>
                <div className='relative' data-scroll-container>
                    {/* <div className='main__promo' data-scroll-section>
                        <Header />
                        <div className="main__video-wrapper">
                            <div className="main__video-box">
                                <div className='main__welcome-bg welcome-saunas'></div>
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


                    <Promo imgUrl='/img/backgrounds/hotel-saunas.png' bg='welcome-saunas' />

                    <div className='base-bg' data-scroll-section></div>

                    <div className='page-saunas__welcome text-section text-section_big container' data-scroll-section>
                        <span className='h2-title'>Сауна «PLAZMA»</span>
                        <span className='text'>
                            Добро пожаловать в наш парк-отель, где время замедляется, а умиротворение становится вашим
                            верным спутником. Всегда было так, что именно в саунах и банях люди находили путь к полному
                            расслаблению и восстановлению души и тела.
                        </span>
                        <span className='text'>
                            Мы приглашаем вас в наш парк-отель, где каждый посетитель является гостем, а каждая сауна и баня
                            - уголком покоя и гармонии. Будьте готовы окунуться в исцеляющую атмосферу, которая наполнит вас
                            энергией и придаст новое сияние вашей жизни.
                        </span>
                    </div>

                    {saunaObjData.map((x, i) =>
                        <SaunaObject
                            key={i}
                            id={x.id}
                            name={x.name}
                            description={x.description}
                            aboutSize={x.aboutSize}
                            price={x.price}
                            sliderData={x.sliderData}
                        />
                    )}
                    {/* <div className='page-saunas__sauna-info text-section text-section_med separator-after' data-scroll-section>
                        <div className='big-p big-p_border-top container'>
                            <span className='big-p__title'>Сауна «Белая ночь»</span>
                            <span className='big-p__desc'>
                                Баня на дровах. Бассейн 6м х 3м с противотоком. Ледяная купель +4°C. Комфортная зона отдыха
                                с большим столом.<br />
                                Холодильник, микроволновая печь и необходимая посуда. Открытая веранда с мангалом. <br />
                            </span>

                            <div className='big-p__attr'>
                                <span className='big-p__attr-title'>Стоимость:</span>
                                <div className='big-p__attr-desc'>
                                    <span>Будние дни с 8:00 до 17:00 – 1400 р/час</span>
                                    <span>Выходные и будни после 17:00 – 1600 р/час</span>
                                </div>
                            </div>

                            <div className='big-p__attr'>
                                <span className='big-p__attr-title'>Вместимость:</span>
                                <div className='big-p__attr-desc'>
                                    <span>В стоимость входит 6 взрослых + 4 ребенка (0 - 12 лет). <br />
                                        Максимальное количество взрослых - 10 (за дополнительную плату). <br />
                                        Доплата - 250 р/час с человека</span>
                                </div>
                            </div>


                        </div>

                        <PlazmaSlider data='saunaWhiteNight' />

                        <div className='btn-container btn-container_go-up'>
                            <div className='btn btn_black'>Забронировать</div>
                        </div>
                    </div >

                    <div className='page-saunas__sauna-info text-section text-section_med separator-after' data-scroll-section>
                        <div className='big-p big-p_border-top container'>
                            <span className='big-p__title'>Баня на дровах «Тысяча и одна ночь» с турецким хамамом</span>
                            <span className='big-p__desc'>
                                Баня на дровах и турецкий хамам. Бассейн 6м х 3м с противотоком. Комфортная зона отдыха с
                                большим столом.<br />
                                Холодильник, микроволновая печь и необходимая посуда. Открытая веранда с мангалом.<br />
                            </span>

                            <div className='big-p__attr'>
                                <span className='big-p__attr-title'>Стоимость:</span>
                                <div className='big-p__attr-desc'>
                                    <span>Будние дни с 8:00 до 17:00 – 1800 р/час</span>
                                    <span>Выходные и будни после 17:00 – 1600 р/час</span>
                                </div>
                            </div>

                            <div className='big-p__attr'>
                                <span className='big-p__attr-title'>Вместимость:</span>
                                <div className='big-p__attr-desc'>
                                    <span>В стоимость входит 6 взрослых + 4 ребенка (0 - 12 лет). <br />
                                        Максимальное количество взрослых - 10 (за дополнительную плату). <br />
                                        Доплата - 250 р/час с человека</span>
                                </div >
                            </div >
                            
                        </div >

                        <PlazmaSlider data='sauna1001Night' />

                        <div className='btn-container btn-container_go-up'>
                            <div className='btn btn_black'>Забронировать</div>
                        </div>
                    </div>

                    <div className='page-saunas__sauna-info text-section text-section_med separator-after' data-scroll-section>
                        <div className='big-p big-p_border-top container'>
                            <span className='big-p__title'>Баня на дровах «Аква-люкс»</span>
                            <span className='big-p__desc'>
                                Баня на дровах с большим бассейном 10м х 5м с зоной джакузи. Ледяная купель +4°C. Комфортная
                                зона отдыха с большим столом. Холодильник, микроволновая печь и необходимая посуда. Открытая
                                веранда с мангалом. <br />
                            </span>

                            <div className='big-p__attr'>
                                <span className='big-p__attr-title'>Стоимость:</span>
                                <div className='big-p__attr-desc'>
                                    <span>Будние дни с 8:00 до 17:00 – 1600 р/час</span>
                                    <span>Выходные и будни после 17:00 – 1900 р/час</span>
                                </div>
                            </div>

                            <div className='big-p__attr'>
                                <span className='big-p__attr-title'>Вместимость:</span>
                                <div className='big-p__attr-desc'>
                                    <span>В стоимость входит 6 взрослых + 4 ребенка (0 - 12 лет). <br />
                                        Максимальное количество взрослых - 10 (за дополнительную плату). <br />
                                        Доплата - 250 р/час с человека</span>
                                </div>
                            </div >

                        </div >

                        <PlazmaSlider data='saunaAquaLux' />


                        <div className='btn-container btn-container_go-up'>
                            <div className='btn btn_black'>Забронировать</div>
                        </div>
                    </div > */}

                    <div className='page-saunas__attention container' data-scroll-section>
                        <div className='text-column'>
                            <span className='text-normal'>
                                Бронирование бани осуществляется на основании задатка,внесённого гостем заблаговременно.
                            </span>
                            <span className='text-normal'>
                                Отмена бронирования с полным возвратом внесённых денежных средств осуществляется не позднее
                                чем за 5 дней до даты бронирования.
                            </span>
                            <div className='text-list'>
                                <span className='text-list__title'>В иных случаях задаток возвращается при условии:</span>
                                <li className='text-list__item'>Cдачи бани на забронированное вами время другому гостю</li>
                                <li className='text-list__item'>Подтверждение диагноза COVID-19</li>
                            </div>
                            <span className='text-normal'>
                                При посещении бани с гостя (заказчика) берётся страховочный залог от 2000 до 10000 рублей.
                            </span>
                            <span className='text-normal'>
                                Страховочный залог не возвращается или возвращается частично в случае порчи имущества или
                                сильного загрязнения помещения бани
                            </span>
                        </div>
                    </div>
                    <Footer />
                </div >
            </main>
        </>

    )
}
