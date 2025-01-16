import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import vkCloudLoader from '@/mw/utils/imageLoader'

interface PlazmaSertItemProps {
    img: string
}



export function OpenFullsizeImg(props: { img: string, onClose?: () => void, isOpen: boolean }) {
    const sliderOverlay = useRef<HTMLDivElement>(null)
    const [browserLoad, setBrowserLoad] = useState(false)

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

    useEffect(() => {
        setBrowserLoad(true)
    }, [])

    if (browserLoad)
        return createPortal(<>

            {props.isOpen ?
                <div className='modal' ref={sliderOverlay} onClick={props.onClose}>
                    <div className='modal--wrapper'>

                        <Image src={props.img} width={715} height={1010} alt='Plazma санитарно-эпидемиологическое заключение'
                            loader={vkCloudLoader}
                        />

                    </div>
                </div>
                : ''}

        </>, document.body)
    else return null
}



export default function PlazmaSertItem(props: PlazmaSertItemProps) {

    const [modalOpen, setModalOpen] = useState(false)

    const onClose = () => setModalOpen(false)


    return (<>
        <OpenFullsizeImg img={props.img} isOpen={modalOpen} onClose={onClose} />

        <div className='aquatory-sert__item' onClick={() => setModalOpen(true)}>
            <Image src={props.img} width={230} height={325} alt='Plazma санитарно-эпидемиологическое заключение'
                loader={vkCloudLoader}
            />
        </div>

    </>)
}