import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

interface FooterProps {

}



export default function Footer(props: FooterProps) {
    return (
        <>
            <div className="footer" data-scroll-section>
                <div className="footer__container container" data-scroll>
                    <div className="footer__title">
                        Парк-отель «PLAZMA»
                    </div>
                    <div className='footer__nav-container'>
                        <div className='footer__nav-col'>
                            <div className='footer__links'>
                                <span className='footer__links-title'>Гостиница</span>
                                <a href='#' className='footer__links-link'>О гостинице</a>
                                <a href='#' className='footer__links-link'>Забронировать номер</a>
                                <a href='#' className='footer__links-link'>Фотографии номеров</a>
                            </div>

                            <div className='footer__links'>
                                <span className='footer__links-title'>Ресторан</span>
                                <a href='#' className='footer__links-link'>О ресторане</a>
                                <a href='#' className='footer__links-link'>Меню</a>
                                <a href='#' className='footer__links-link'>Забронировать столик</a>
                                <a href='#' className='footer__links-link'>Организация мероприятий </a>
                                <a href='#' className='footer__links-link'>Кафе Smash</a>
                            </div>
                        </div>

                        <div className='footer__nav-col'>
                            <div className='footer__links'>
                                <span className='footer__links-title'>Акватория</span>
                                <a href='#' className='footer__links-link'>Об акватории</a>
                                <a href='#' className='footer__links-link'>Карта территории</a>
                                <a href='#' className='footer__links-link'>Стоимость входа</a>
                                <a href='#' className='footer__links-link'>Беседки для отдыха компанией</a>
                            </div>

                            <div className='footer__links'>
                                <span className='footer__links-title'>Банкетный зал</span>
                                <a href='#' className='footer__links-link'>О банкетном зале</a>
                                <a href='#' className='footer__links-link'>Организация презентаций</a>
                                <a href='#' className='footer__links-link'>Деловые встречи</a>
                                <a href='#' className='footer__links-link'>Банкеты на праздник</a>
                                <a href='#' className='footer__links-link'>Цены и условия</a>
                            </div>
                        </div>

                        <div className='footer__nav-col'>
                            <div className='footer__links'>
                                <span className='footer__links-title'>Мероприятия</span>
                                <a href='#' className='footer__links-link'>О мероприятиях</a>
                                <a href='#' className='footer__links-link'>Организация мероприятий</a>
                                <a href='#' className='footer__links-link'>Ближайшие события</a>
                                <a href='#' className='footer__links-link'>Прошедшие мероприятия</a>
                            </div>

                            <div className='footer__links'>
                                <span className='footer__links-title'>Контакты</span>
                                <a href='#' className='footer__links-link'>Связь с нами</a>
                                <a href='#' className='footer__links-link'>Где находимся</a>
                                <a href='#' className='footer__links-link'>Как добраться</a>
                            </div>
                        </div>
                    </div>

                    <div className='footer__contact-container'>
                        <span className='footer__contact-text copy-click address'>Тульская область, г. Донской, ул. Герцена, д.
                            14</span>
                        <a href='#' className='footer__contact-link'>Политика конфидециальности</a>
                        <span className='footer__contact-text copy-click number'>+7(930) 897-77-01</span>
                    </div>
                </div>
            </div>

            <div className="footer-mobile" data-scroll-section>
                <div className="footer-mobile__container container" data-scroll>
                    <div className="footer-mobile__title">
                        Парк-отель «PLAZMA»
                    </div>

                    <div className='footer-mobile__feedback'>
                        <span className='text'>
                            Мы ответим на любые ваши вопросы
                        </span>

                        <div className='btn btn_white'>Позвонить</div>

                    </div>

                    <div className='social-container'>
                        <div className='social-icon vk'></div>
                        <div className='social-icon tg'></div>
                        <div className='social-icon inst'></div>
                    </div>

                    <div className='footer-mobile__contact-container'>
                        <span className='footer-mobile__contact-text copy-click address'>Тульская область, г. Донской, ул. Герцена, д.
                            14</span>
                        <a href='#' className='footer-mobile__contact-link'>Политика конфидециальности</a>
                    </div>
                </div>
            </div>
        </>
    )
}