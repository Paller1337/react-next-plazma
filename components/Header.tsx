// import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface HeaderProps {
    darken?: boolean
}


export default function Header(props: HeaderProps) {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false)
    const router = useRouter()

    const menuOpen = (status: boolean) => {
        const HTMLItem = document.getElementsByTagName('html')[0]

        if (status) {
            HTMLItem.classList.add('burger-opened')
            setBurgerIsOpen(true)
        } else {
            HTMLItem.classList.remove('burger-opened')
            setBurgerIsOpen(false)
        }
    }
    // if (openIcon) {
    //     const menuBody = document.querySelector('.c-menu');
    //     const jsMenu = document.querySelector('.js-menu');
    //     const veilMenu = document.querySelector('.menu-veil');
    //     let isOpen = false;
    //     openIcon.addEventListener("click", function (e) {
    //         document.body.classList.toggle('is_lock');
    //         // openIcon.classList.toggle('_active');
    //         // jsMenu.classList.toggle('_active');

    //         HTMLItem.classList.add('burger-opened')
    //         // menuBody.style.display = 'flex';
    //         if (isOpen) {


    //             // setTimeout(function() {
    //             //     menuBody.classList.add('_active');
    //             // }, 5000);
    //             isOpen = true;
    //         }
    //     });
    // }
    // if (closeIcon) {
    //     const menuBody = document.querySelector('.c-menu');
    //     const jsMenu = document.querySelector('.js-menu');
    //     const veilMenu = document.querySelector('.menu-veil');

    //     closeIcon.addEventListener("click", function (e) {
    //         jsMenu.classList.remove('_active');
    //         menuBody.classList.remove('_active');
    //         veilMenu.classList.remove('is-enter')
    //         HTMLItem.classList.remove('burger-opened')

    //         document.body.classList.remove('is_lock');
    //         // menuBody.style.display = 'none';
    //     })
    // }


    return <>
        <div className={`c-menu js-menu ${burgerIsOpen ? '_active' : ''}`}>
            <div className='c-menu__header'>
                <div className="c-menu__icon close-burger" onClick={() => menuOpen(false)}>
                    <span className="burger-menu"></span>
                    <span className="burger-menu"></span>
                </div>
                <div className='c-menu__logo'>
                    <object data='svg/dark-logo.svg' type='image/svg+xml'>
                        <img src='img/dark-logo.svg' alt='logo' />
                    </object>
                </div>
            </div>
            <div className='c-menu__container'>
                <div className='menu-column'>
                    <ul className="menu-column__list">
                        <li><Link href="/" className="menu-column__link">Главная</Link></li>
                        <li><Link href="hotel" className="menu-column__link">Гостиница</Link></li>
                        <li><Link href="meals" className="menu-column__link">Питание</Link></li>
                        <li><Link href="aquatory" className="menu-column__link">Акватория</Link></li>
                        <li><Link href="sauna" className="menu-column__link">Сауна</Link></li>
                        <li><Link href="events" className="menu-column__link">мероприятия</Link></li>
                    </ul>
                </div>
            </div>
            <div className='c-menu__footer flex-col fw'>
                <div className='c-menu__footer-feedback'>
                    <button className='btn btn_black'>Написать нам</button>
                    <div className='c-menu__footer-column'>
                        <div className='c-menu__footer-desc'>Наши контакты</div>
                        <ul className="c-menu__footer-list sub">
                            <span className='number'>+7(48746) 5-18-24</span>
                            <span className='number'>+7(930) 897-77-01</span>
                            <span className='number'>+7(910) 168-17-61</span>
                        </ul>
                    </div>
                </div>
                <div className='copyright'>
                    <Link href="/" className="social-list__soc">plazma@yandex.ru</Link>
                    <span>plazma</span>
                </div>
            </div>
        </div>
        <div className={`menu-veil js--menu-veil ${burgerIsOpen ? 'is-enter' : ''}`}></div>
        <header className={`header ${props.darken ? 'header_dark' : ''}`}>
            <div className="header__container">
                <div className="header__menu menu">
                    <div className='menu__icon' onClick={() => menuOpen(true)}>
                        <span className="burger-menu"></span>
                        <span className="burger-menu"></span>
                        <span className="burger-menu"></span>
                    </div>
                    <div className='menu__head'>
                        <div className='menu__action'>
                            <object className='icon' data='svg/vk.svg' type='image/svg+xml'>
                                {/* <img src='img/new-logo.svg' alt='' /> */}
                            </object>
                            <object data='svg/phone.svg' type='image/svg+xml'>
                                {/* <img src='img/new-logo.svg' alt='' /> */}
                            </object>
                        </div>

                        <div className='menu__logo'>
                            <object data='svg/new-logo.svg' type='image/svg+xml'>
                                <img src='img/new-logo.svg' alt='' />
                            </object>
                        </div>

                        <div className='menu__btn btn btn_white' onClick={() => router.push('/hotel#hotelRooms')}>
                            Забронировать номер
                        </div>

                        <div className='menu__btn_min btn btn_white'>
                            Номера
                        </div>
                    </div>

                    <nav className="menu__body">
                        <div className='menu__item'>
                            <Link href='/' className='menu__link'>
                                Главная
                            </Link>
                        </div>

                        <div className='menu__item'>
                            <Link href='/hotel' className='menu__link'>
                                Гостиница
                            </Link>
                        </div>

                        <div className='menu__item'>
                            <Link href='/meals' className='menu__link'>
                                Питание
                            </Link>
                        </div>

                        <div className='menu__item'>
                            <Link href='/aquatory' className='menu__link'>
                                Акватория
                            </Link>
                        </div>

                        <div className='menu__item'>
                            <Link href='/sauna' className='menu__link'>
                                Сауна
                            </Link>
                        </div>

                        <div className='menu__item'>
                            <Link href='/events' className='menu__link'>
                                Мероприятия
                            </Link>
                        </div>

                        <div className='menu__item'>
                            <Link href='#' className='menu__link'>
                                Контакты
                            </Link>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    </>
}