import { List, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import SNW from '../SNW'

const NewYearBookingModal = ({
    isOpen,
    onRequestClose,
    contentLabel = 'Открыто бронирование на Новый год!',
    imageSrc = '/no-optimize-img/index/new-year.jpg',
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const isMobile = useMediaQuery('(max-width: 620px)')

    useEffect(() => {
        const t = setTimeout(() => setIsVisible(true), 1500)
        return () => clearTimeout(t)
    }, [])

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    zIndex: 100,
                },
                content: {
                    padding: isMobile ? 12 : '24px',
                    borderRadius: '0px',
                    width: 'min(880px, 94vw)',
                    height: 'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 18,
                    inset: '50%',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#252525',
                    marginTop: isVisible ? '0px' : '20vh',
                    opacity: isVisible ? '1' : '0',
                    transition: 'all .32s ease-in-out',
                },
            }}
        >
            {/* Шапка-объявление */}
            <div
                className='announcement-header'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    flexWrap: 'wrap',
                    borderBottom: '1px solid #E6E6E6',
                    paddingBottom: 8,
                }}
            >
                {/* <span
                    className='badge'
                    style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        border: '1px solid #252525',
                        padding: '4px 8px',
                    }}
                >
                    Объявление
                </span> */}
                <span
                    className='title'
                    style={{
                        fontSize: 20,
                        fontWeight: 800,
                        lineHeight: 1.2,
                        textAlign: isMobile ? 'center' : 'left'
                    }}
                >
                    Открыто бронирование <SNW>на Новый год!</SNW>
                </span>
            </div>

            {/* Контент: картинка + текст */}
            <div
                className="modal-body"
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '70% 1fr',
                    gap: 16,
                }}
            >

                {/* Новогоднее бронирование */}
                <Stack gap={isMobile ? 8 : 20} maw={700} pr={24}>
                    <Stack gap={4}>
                        <Stack gap={6}>
                            <Text fz={isMobile ? 16 : 17} fw={600}>Условия на новогодние праздники:</Text>
                            <List size="xs" styles={{ itemLabel: { fontSize: isMobile ? 15 : 16 }, item: { paddingBlock: 2 } }}>
                                <List.Item>
                                    При онлайн-бронировании требуется предоплата <b>100%</b> стоимости проживания.
                                </List.Item>
                                <List.Item>
                                    Возврат предоплаты возможен только при аннуляции <b>не позднее чем за 60 суток</b> до даты заезда.
                                </List.Item>
                                <List.Item>
                                    При поздней аннуляции (менее 60 суток до даты заезда) или незаезде предоплата <b>не возвращается</b>.
                                </List.Item>
                                <List.Item>
                                    Стандартное правило «отмена за 7 дней до заезда» на новогодний период <b>не действует</b>.
                                </List.Item>
                            </List>

                            <Text fz={isMobile ? 15 : 16} fw={400} mt={2}>
                                Бронирование и консультации (24/7):{' '}
                                <SNW>
                                    <a style={{ color: '#252525', textDecoration: 'underline' }} href="tel:+79101681761">
                                        +7 (910) 168-17-61
                                    </a>
                                </SNW>{' '}
                                или{' '}
                                <SNW>
                                    <a style={{ color: '#252525', textDecoration: 'underline' }} href="tel:+79308977701">
                                        +7 (930) 897-77-01
                                    </a>
                                </SNW>
                                .
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>


                {!isMobile ? <div className='image-col' style={{ position: 'unset' }}>
                    {/* Можно заменить на ваш Image-компонент, если он требуется в проекте */}
                    <img
                        src={imageSrc}
                        alt='Новогоднее оформление Парк-отеля'
                        width={200}
                        height={240}
                        style={{ width: '100%', maxWidth: isMobile ? '100%' : 320, height: isMobile ? 180 : '100%', display: 'block', objectFit: 'cover' }}
                    />
                </div>
                    : <></>}
            </div>

            {/* Футер */}
            <div
                className='modal-footer'
                style={{
                    display: 'flex',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 4,
                    paddingTop: 8,
                    borderTop: '1px solid #E6E6E6',
                }}
            >
                <button
                    className='btn btn_black'
                    onClick={onRequestClose}
                    style={{ cursor: 'pointer' }}
                >
                    Понятно
                </button>
            </div>
        </ReactModal >
    )
}

export default NewYearBookingModal
