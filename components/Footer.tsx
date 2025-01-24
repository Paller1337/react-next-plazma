import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import copy from './functions/copy'
import { DEFAULTS } from 'defaults'
import { Group, Stack, Text } from '@mantine/core'

interface FooterProps {

}



export default function Footer(props: FooterProps) {
    // const copyNumber = async () => {
    //     navigator.clipboard.writeText('+79101681761')
    //     toast.success('Номер скопирован', {
    //         duration: 3000,
    //         style: {
    //             fontSize: 15,
    //             borderRadius: 0,
    //             border: '1px solid #393939',
    //             padding: '12px 18px'
    //         },
    //         position: 'top-center'
    //     })
    // }

    // const copyAddress = async () => {
    //     navigator.clipboard.writeText('Тульская область, г. Донской, ул. Герцена, д. 14')
    //     toast.success('Адрес скопирован', {
    //         duration: 3000,
    //         style: {
    //             fontSize: 15,
    //             borderRadius: 0,
    //             border: '1px solid #393939',
    //             padding: '12px 18px'
    //         },
    //         position: 'top-center'
    //     })
    // }

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
                                <Link href='/hotel#HotelPlacement' className='footer__links-link'>О гостинице</Link>
                                <Link href='/awards' className='footer__links-link'>Достижения и награды</Link>
                                <Link href='/hotel#hotelRooms' className='footer__links-link'>Фотографии номеров</Link>
                                <Link href='/booking' className='footer__links-link'>Забронировать номер</Link>
                            </div>

                            <div className='footer__links'>
                                <span className='footer__links-title'>Питание</span>
                                <Link href={DEFAULTS.MENU.REST}
                                    className='footer__links-link' target='_blank'>Меню ресторана</Link>
                                <Link href='/meals/restaurant' className='footer__links-link'>Ресторан</Link>
                                <Link href='/meals/banquet-hall' className='footer__links-link'>Банкетный зал</Link>
                                <Link href='/meals/tent' className='footer__links-link'>Летний шатер</Link>
                                <Link href='/meals/smash' className='footer__links-link'>Кафе Smash</Link>
                            </div>
                        </div>

                        <div className='footer__nav-col'>
                            <div className='footer__links'>
                                <span className='footer__links-title'>Акватория</span>
                                <Link href='/aquatory#AboutAquatory' className='footer__links-link'>Об акватории</Link>
                                <Link href='/aquatory#AquatoryPrice' className='footer__links-link'>Стоимость посещения</Link>
                                <Link href='/aquatory#pen' className='footer__links-link'>Полуостров с бассейном</Link>
                                <Link href='/aquatory#gaz-1' className='footer__links-link'>Беседки для отдыха компанией</Link>
                            </div>

                            <div className='footer__links'>
                                <span className='footer__links-title'>Сауна</span>
                                <Link href='/sauna#sauna1001Night' className='footer__links-link'>Баня на дровах с хаммамом</Link>
                                <Link href='/sauna#AquaLux' className='footer__links-link'>Баня на дровах «Аква-люкс»</Link>
                                <Link href='/sauna#WhiteNight' className='footer__links-link'>Сауна «Белая ночь»</Link>
                            </div>
                        </div>

                        <div className='footer__nav-col'>
                            <div className='footer__links'>
                                <span className='footer__links-title'>Активный отдых</span>
                                <Link href='/active-leisure#AboutSport' className='footer__links-link'>О спорте в «PLAZMA»</Link>
                                <Link href='/active-leisure#SportsObjects' className='footer__links-link'>Спортивные объекты</Link>
                                <Link href='/sports-camps' className='footer__links-link'>Спортивные сборы</Link>
                            </div>


                            <div className='footer__links'>
                                <span className='footer__links-title'>Мероприятия</span>
                                <Link href='/events#AboutEvents' className='footer__links-link'>О мероприятиях</Link>
                                <Link href='/events#PlazmaCelebrate' className='footer__links-link'>Праздники в «PLAZMA»</Link>
                                <Link href='/events#Conferences' className='footer__links-link'>Конференции</Link>
                            </div>
                        </div>
                    </div>

                    <div className='footer__contact-container'>
                        <span className='footer__contact-text copy-click address'
                            onClick={() => copy('Тульская область, г. Донской, ул. Герцена, д. 14', 'Адрес скопирован', { metric: 'address' })}
                        >Тульская область, г. Донской, ул. Герцена, д. 14</span>
                        {/* <Link href='#' className='footer__contact-link'>Политика конфидециальности</Link> */}
                        <span className='footer__contact-text copy-click number'
                            onClick={() => copy('+79101681761', 'Номер скопирован', { metric: 'number' })}
                        >+7 (910) 168-17-61</span>
                    </div>

                    <div className='footer__info'>
                        <Link href='#' className='footer__contact-link'>Политика конфидециальности</Link>
                        <a
                            className='footer__contact-link'
                            onClick={() => copy('ИП Дяченко Николай Дмитриевич, ИНН 711400143917, ОГРН 306714927500031', 'Юридические реквизиты скопированы')}
                        >
                            ИП Дяченко Николай Дмитриевич, ИНН 711400143917, ОГРН 306714927500031
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-mobile" data-scroll-section>
                <div className="footer-mobile__container container" data-scroll>
                    <div className="footer-mobile__title">
                        Парк-отель «PLAZMA»
                    </div>

                    <Group justify='space-between' align='flex-start'>
                        <Stack>
                            <Group>
                                <Text className='text' c={'#fff'}>Ресепшен</Text>
                                <a className='btn btn_white' href='tel: +79101681761'>Позвонить</a>
                            </Group>

                            <Group>
                                <Text className='text' c={'#fff'}>Ресторан</Text>
                                <a className='btn btn_white' href='tel: +79202756312'>Позвонить</a>
                            </Group>
                        </Stack>

                        <div className='social-container'>
                            <Link className='social-icon vk' href='https://vk.com/park_hotel_plazma' target='blank' ></Link>
                            <Link className='social-icon tg' href='https://t.me/plazmadonskoy' target='blank' ></Link>
                            {/* <div className='social-icon inst'></div> */}
                        </div>
                    </Group>


                    <div className='footer-mobile__contact-container'>
                        <span className='footer-mobile__contact-text copy-click address'
                            onClick={() => copy('Тульская область, г. Донской, ул. Герцена, д. 14', 'Адрес скопирован', { metric: 'address' })}
                        >Тульская область, г. Донской, ул. Герцена, д. 14</span>
                    </div>

                    <div className='footer-mobile__info'>
                        <Link href='#' className='footer-mobile__contact-link'>Политика конфидециальности</Link>
                        <a
                            className='footer-mobile__contact-link'
                            onClick={() => copy('ИП Дяченко Николай Дмитриевич, ИНН 711400143917, ОГРН 306714927500031', 'Юридические реквизиты скопированы')}
                        >
                            ИП Дяченко Николай Дмитриевич, ИНН 711400143917, ОГРН 306714927500031
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}