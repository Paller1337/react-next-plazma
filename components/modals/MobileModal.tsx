// import KLIcon from '@/components/KLIcon'
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'


interface MobileModalProps {
    children: React.ReactNode,
    title: string,
    isOpen: boolean,
    onClose: () => void,
    offsetY?: number,
    inputHeight: number,
    calculate?: boolean,
    callBack?: () => void
}

export default function MobileModal(props: MobileModalProps) {
    const modalOverlay = useRef(null)
    const modalContent = useRef(null)
    const modalHeader = useRef(null)
    const scrollContent = useRef(null)

    const [position, setPosition] = useState(35)
    const [previousPosition, setPreviousPosition] = useState(35)
    const [touchStart, setTouchStart] = useState(0)
    const [touchMove, setTouchMove] = useState(0)
    const [swipeEventState, setSwipeEventState] = useState(false)
    const [openState, setOpenState] = useState(false)
    const [wrapState, setWrapState] = useState(false) // нужно
    const [modalDisplay, setModalDisplay] = useState(false) // нужно
    const [maxPosition, setMaxPosition] = useState(10)
    const [startPosition, setStartPosition] = useState(0)


    const [browserLoad, setBrowserLoad] = useState(false)

    const [contentHeightOnWindow, setContentHeightOnWindow] = useState(0)
    const [maxContentHeight, setMaxContentHeight] = useState(0)

    const modalStyle = {
        transform: `translate3d(0%, ${Math.round(position)}%, 0)`,
        // maxHeight: `${contentHeightOnWindow}%`,
        // height: `${contentHeightOnWindow}%`
    }





    useEffect(() => {
        callBackNicola()
    }, [contentHeightOnWindow, maxPosition, maxContentHeight, props.inputHeight, props.isOpen])

    useEffect(() => {
        callBackNicola()
    }, [props.calculate])

    useEffect(() => {
        if (window && document !== null) {
            const htmlElement = document.getElementsByTagName('html')[0]
            const nextElement = document.getElementById('__next') as HTMLElement
            if (modalDisplay) {
                //Фиксируем страницу
                nextElement.style.position = 'fixed'
                htmlElement.style.touchAction = 'pad-down'
                //Иммитируем прокрутку
                nextElement.style.top = `-${props.offsetY}px`
                nextElement.style.left = '0'
                nextElement.style.right = '0'

            } else {
                //Убираем иммитацию прокрутки
                document.getElementsByTagName('html')[0].style.touchAction = ''
                nextElement.style.position = ''
                nextElement.style.top = ``
                nextElement.style.left = ''
                nextElement.style.right = ''
                //Возвращаемся туда, откуда открывали модалку
                document.documentElement.style.scrollBehavior = 'auto'
                setTimeout(() => window.scrollTo(0, props.offsetY || 0), 5)
                setTimeout(() => document.documentElement.style.scrollBehavior = 'smooth', 5)
            }
        }
    }, [modalDisplay])

    useEffect(() => {
        if (scrollContent.current && modalHeader.current) {
            const scrContent = scrollContent.current as HTMLElement
            const modHeader = modalHeader.current as HTMLElement
            scrContent?.addEventListener('touchstart', handleTouchStart, { passive: false })
            scrContent?.addEventListener('touchmove', handleTouchMove, { passive: false })
            scrContent?.addEventListener('touchend', handleTouchEnd, { passive: false })

            modHeader?.addEventListener('touchstart', handleTouchStart, { passive: false })
            modHeader?.addEventListener('touchmove', handleTouchMove, { passive: false })
            modHeader?.addEventListener('touchend', handleTouchEnd, { passive: false })

            return () => {
                scrContent?.removeEventListener('touchstart', handleTouchStart)
                scrContent?.removeEventListener('touchmove', handleTouchMove)
                scrContent?.removeEventListener('touchend', handleTouchEnd)

                modHeader?.removeEventListener('touchstart', handleTouchStart)
                modHeader?.removeEventListener('touchmove', handleTouchMove)
                modHeader?.removeEventListener('touchend', handleTouchEnd)
            }
        }
    }, [position, wrapState, swipeEventState, scrollContent.current, modalHeader.current])

    useEffect(() => {
        if (scrollContent.current) {
            const scrContent = scrollContent.current as HTMLElement
            setOpenState(position == maxPosition || scrContent?.scrollTop > 0)
        }
    }, [position])





    useEffect(() => setBrowserLoad(true), [])
    if (!browserLoad) return null


    function callBackNicola() {
        if (modalHeader.current) {
            const modHeader = modalHeader.current as HTMLElement
            setMaxContentHeight((modHeader?.offsetHeight + props.inputHeight) / window.innerHeight * 100)
            if (props.isOpen) {
                if ((Math.abs(maxContentHeight) >= 100)) {
                    setMaxPosition(100 - (window.innerHeight) / window.innerHeight * 100)
                    setContentHeightOnWindow((window.innerHeight) / window.innerHeight * 100)
                    setPosition(50)
                    setPreviousPosition(50)
                    setStartPosition(50)
                }
                else if ((Math.abs(maxContentHeight) <= 100) && Math.abs(maxContentHeight) >= 50) {
                    setMaxPosition(100 - Math.abs(maxContentHeight))
                    // setContentHeightOnWindow(Math.abs(maxContentHeight))
                    setPosition(50)
                    setPreviousPosition(50)
                    setStartPosition(50)
                }
                else if (Math.abs(maxContentHeight) < 50) {
                    setMaxPosition(100 - Math.abs(maxContentHeight))
                    setContentHeightOnWindow(Math.abs(maxContentHeight))
                    setPosition(maxPosition)
                    setPreviousPosition(maxPosition)
                    setStartPosition(maxPosition)
                }

                setModalDisplay(true)
            } else {
                setMaxPosition(0)
                setModalDisplay(false)
            }
        }
    }



    const close = () => {
        setOpenState(false)
        setWrapState(false)
        setPosition(100)
        //Это для того, чтобы модалка скрывалась после того, как завершится transition
        if (modalContent.current) {
            const modContent = modalContent.current as HTMLElement
            modContent.addEventListener('transitionend', (event) => {
                if (event.propertyName === 'transform') {
                    props.onClose()
                    setPosition(50)
                    setPreviousPosition(50)
                }
            })
            return () => {
                modContent.removeEventListener('transitionend', (event) => {
                    if (event.propertyName === 'transform') {
                        props.onClose()
                        setPosition(50)
                        setPreviousPosition(50)
                    }
                })
            }
        }
    }

    // useEffect(() => console.log('OPENSTATE: ' + openState), [openState])


    const handleTouchStart = (event: any) => {
        if (scrollContent.current) {
            const scrContent = scrollContent.current as HTMLElement

            setTouchStart(event.touches[0].clientY)
            if (scrContent?.scrollTop == 0) setSwipeEventState(true)
        }
    }


    const handleTouchMove = (event: any) => {
        setWrapState(true)
        setTouchMove(event.touches[0].clientY)

        const diff = event.touches[0].clientY - touchStart
        const newPos = previousPosition + (diff / window.innerHeight) * 100

        if (newPos > maxPosition) {
            if (scrollContent.current) {
                const scrContent = scrollContent.current as HTMLElement
                if (scrContent?.scrollTop == 0) setPosition(newPos)

                if (event.cancelable && touchMove - touchStart > 0 && scrContent?.scrollTop == 0) {
                    event.preventDefault()
                }
            }
        }
    }


    const handleTouchEnd = (event: any) => {
        setWrapState(false)
        const breakPoint = startPosition
        if ((position < breakPoint)) {
            setPosition(maxPosition); setPreviousPosition(maxPosition)
        }
        if ((position > breakPoint)) {
            close()
            setOpenState(false)
            // console.log('GoNahui')
        }
        setSwipeEventState(false)
        setTouchStart(0)
    }

    return createPortal(
        <>
            {props.isOpen &&
                <div ref={modalOverlay} className={`mobile-modal--overlay `}
                >
                    <div className='mobile-modal--wrapper'>
                        <div ref={modalContent}
                            className={`trans-bk mobile-modal--content ${wrapState ? ' in-wrap' : ''}`}
                            style={modalStyle}>

                            <div className='mobile-modal__section'>
                                <div className='mobile-modal--header'
                                    ref={modalHeader}
                                >
                                    <span className='title'>
                                        {props.title}
                                    </span>
                                    <div className='close'
                                        onTouchEnd={(e) => { e.stopPropagation(); close() }}
                                    >
                                        {/* <KLIcon fa={'close'} iconHeight={'m'} /> */}
                                        X
                                    </div>
                                </div>
                                <div
                                    ref={scrollContent}
                                    className='mobile-modal--scroll'
                                    style={{
                                        maxHeight: `calc(100% - ${80}px)`,
                                        height: `calc(100% - ${80}px)`,
                                        overflowY: `${openState ? 'scroll' : 'hidden'}`,
                                        WebkitOverflowScrolling: 'touch'
                                    }}
                                >
                                    {props.children}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            }
        </>,
        document.body
    )
}