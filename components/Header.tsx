// import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface HeaderProps {
    darken?: boolean
}

const headerItems = [
    {
        name: 'Главная',
        link: '/',
    },
    {
        name: 'Гостиница',
        link: '/hotel',
    },
    {
        name: 'Питание',
        link: '/meals',
    },
    {
        name: 'Сауна',
        link: '/sauna',
    },
    {
        name: 'Мероприятия',
        link: '/events',
    },
    {
        name: 'Акватория',
        link: '/aquatory',
    },
    {
        name: 'Активный отдых',
        link: '/active-leisure',
    },
    {
        name: 'Спортивные сборы',
        link: '/sports-camps',
    },
]

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
                    <Link href={'/'}>
                        <object data='/svg/dark-logo.svg' type='image/svg+xml'>
                            <img src='/img/dark-logo.svg' alt='logo' />
                        </object>
                    </Link>
                </div>
            </div>
            <div className='c-menu__container'>
                <div className='menu-column'>
                    <ul className="menu-column__list">
                        {headerItems.map((item, i) =>
                            <li key={item.name + i}>
                                <Link onClick={() => menuOpen(false)} href={item.link} className="menu-column__link">
                                    {item.name}
                                </Link>
                            </li>)
                        }
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
                            <a href='#' className='menu__action-link'>
                                <object className='icon' data='svg/vk.svg' type='image/svg+xml'>
                                    {/* <img src='/img/new-logo.svg' alt='' /> */}
                                </object>
                            </a>
                            <a href='#' className='menu__action-link'>
                                <object className='icon' data='/svg/phone.svg' type='image/svg+xml'>
                                    {/* <img src='/img/new-logo.svg' alt='' /> */}
                                </object>
                            </a>
                        </div>

                        <Link className='menu__logo' href='/'>
                            <span style={{ display: 'block' }}>
                                <object data='/svg/new-logo.svg' type='image/svg+xml'>
                                    <img src='/img/new-logo.svg' alt='' />
                                </object>
                            </span>
                        </Link>



                        {/* <Link className='menu__logo' href='/'>
                            <span style={{ maxWidth: 64 }}>
                                <object className='pl-label' data='/svg/label-plazma.svg' type='image/svg+xml'>
                                    <img src='/img/label-plazma.svg' alt='' />
                                </object>
                            </span>
                        </Link> */}

                        <div className='menu__btn btn btn_white' onClick={() => router.push('/hotel#hotelRooms')}>
                            Забронировать номер
                        </div>

                        <div className='menu__btn_min btn btn_white' onClick={() => router.push('/hotel#hotelRooms')}>
                            Номера
                        </div>
                    </div>

                    <nav className="menu__body">
                        {headerItems.map((item, i) =>
                            <div className='menu__item' key={item.name + i}>
                                <Link href={item.link} className='menu__link'>
                                    {item.name}
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    </>
}