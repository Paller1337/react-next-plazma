import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

export function OpenFullsizeImg(props: { img: string, onClose?: () => void }) {
    const sliderOverlay = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sliderOverlay.current && !sliderOverlay.current.contains(event.target as Node)) {
                if (props.onClose) {
                    props.onClose()
                }
            }
        }

        sliderOverlay.current?.addEventListener('click', handleClickOutside)
        return () => {
            sliderOverlay.current?.removeEventListener('click', handleClickOutside)
        }

    }, [props.img])

    return createPortal(<>

        {props.isOpen ?
            <div className='modal' ref={sliderOverlay} onClick={props.onClose}>
                <div className='modal--wrapper'>

                    <Image src={props.img} width={715} height={1010} alt='Plazma санитарно-эпидемиологическое заключение' />

                </div>
            </div> : ''}

    </>, document.body)
}