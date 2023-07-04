import { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { isDesktop, isMobile } from 'react-device-detect'
import { createPortal } from 'react-dom'

interface GallerySliderProps {
    isOpen?: boolean
    onClose?: () => void
    slides: string[]
    startSlide?: number
}


export default function GallerySlider(props: GallerySliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null)
    const sliderOverlay = useRef<HTMLDivElement>(null)
    const pagRef = useRef(null)

    const start = props.startSlide || 0
    const slides = props.slides
    const [currentSlide, setCurrentSlide] = useState(slides[start])
    const [currentSlideN, setCurrentSlideN] = useState(start)

    const [browserLoad, setBrowserLoad] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        if (slides.length > 4 &&
            currentSlideN > 3) {
            // pagRef.current.style.transform = `translate(-${200 * (currentSlideN -2) + 510}px)`
        }
    }, [pagRef.current])


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sliderRef.current && !sliderRef.current.contains(event.target as Node)) {
                if (props.onClose) {
                    props.onClose()
                }
            }
        }

        sliderOverlay.current?.addEventListener('click', handleClickOutside)

        return () => {
            sliderOverlay.current?.removeEventListener('click', handleClickOutside)
        }

    }, [props])


    useEffect(() => {
        setWindowWidth(window.innerWidth)
        setBrowserLoad(true)
    }, [])

    if (!browserLoad) return null

    if (isDesktop && windowWidth > 600)

        return createPortal(
            <>
                {props.isOpen &&
                    <div ref={sliderOverlay} className='gallery-modal--overlay'>
                        <div ref={sliderRef} className='gallery-modal--slider'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='gallery-modal--current-slide'
                                style={{ backgroundImage: `url(${currentSlide})` }}
                            />

                            {slides.length > 1 ?
                                <div className='gallery-modal--pag'>
                                    <div ref={pagRef} className='gallery-modal--pag-content'
                                        style={{
                                            position: 'absolute',
                                            // left: `-${200 * (currentSlideN + 1) + 510}px`,
                                            transform: `translate(-${((slides.length > 4) &&
                                                (currentSlideN > 3) &&
                                                (slides.length - 2 >= currentSlideN))
                                                ? 190 * (currentSlideN - 4) - 95 + 20 * (currentSlideN - 3) + 495
                                                : 0}px)`,
                                        }}
                                    >
                                        {slides.map((slide, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className={`gallery-modal--pag-item ${i == currentSlideN ? 'current' : ''}`}
                                                    style={{ backgroundImage: `url(${slide})` }}
                                                    onClick={() => {
                                                        setCurrentSlide(slide)
                                                        setCurrentSlideN(i)
                                                    }}
                                                />)
                                        })}
                                    </div>
                                </div>
                                : ''
                            }
                        </div>
                    </div>
                }
            </>,
            document.body
        )
    else return null
}