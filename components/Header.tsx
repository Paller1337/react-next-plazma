// import Image from 'next/image'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { useState } from 'react'
import { useRouter } from 'next/router'

import svgVk from '/public/svg/vk.svg'

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

    const tel = '+7 (930) 897-77-01'
    const [telNum, setTelNum] = useState(tel)

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


    const copyNumber = async (x: string) => {

        await navigator.clipboard.writeText('+79308977701')
        setTelNum('Скопировано')
        const timeout = setTimeout(() => setTelNum(tel), 2000)
        return () => clearTimeout(timeout)
    }

    // return <>
    // </>

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
                            <Image width={64} height={64} src='/img/dark-logo.svg' alt='' />
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
                    <Link href="/" className="social-list__soc">hotel@kplazma.ru</Link>
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
                            <span className='menu__action-link'>
                                <object className='icon' data='svg/vk.svg' type='image/svg+xml'>
                                    {/* <img src='/img/new-logo.svg' alt='' />  */}
                                </object>
                                <Link href='https://vk.com/park_hotel_plazma' />
                            </span>
                            <span className='menu__action-link'>
                                <object className='icon' data='/svg/phone.svg' type='image/svg+xml'>
                                    {/* <img src='/img/new-logo.svg' alt='' /> */}
                                </object>
                                <a className='popover pop-right'
                                    // href='tel: +790000000'
                                    popover-data={telNum}
                                    onClick={() => copyNumber('+7 (900) 900-00-00')}
                                />
                            </span>
                        </div>

                        <Link className='menu__logo' href='/'>
                            <span style={{ display: 'block' }}>
                                <object data='/svg/new-logo.svg' type='image/svg+xml'>
                                    <Image width={64} height={64} src='/img/new-logo.svg' alt='' />
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