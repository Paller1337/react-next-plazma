/* eslint-disable react/display-name */
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import MobileModal from './MobileModal'
import Router, { useRouter } from 'next/router'
import ColumnCard from '../ColumnCard'



export const MailSubscribe = forwardRef((_props, ref) => {
    const input = useRef(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [bodyYOffset, setBodyYOffset] = useState(0)
    const [inputHeight, setInputHeight] = useState(0)
    const [modalIsCalculate, setModalIsCalculate] = useState(false)


    useImperativeHandle(ref, () => ({
        openModal() {
            setBodyYOffset(window.scrollY)
            setModalIsOpen(true)
        }
    }))

    const modalUpdate = () => {
        setModalIsCalculate(current => !current)
    }

    function closeModal() {
        setModalIsOpen(false)
        modalUpdate()
    }

    useEffect(() => {
        if (input.current) {
            const inp = input.current as HTMLElement
            setInputHeight(inp?.offsetHeight)
        }
    }, [modalIsOpen, inputHeight, modalIsCalculate])

    return (
        <MobileModal
            isOpen={modalIsOpen}
            onClose={closeModal}
            title={'Подписаться на рассылку'}
            offsetY={bodyYOffset}
            inputHeight={inputHeight}
            calculate={modalIsCalculate}
            callBack={modalUpdate}
        >
            <div className='mobile-modal--input' ref={input}>
                <ColumnCard
                    title='Спортивный копрус - 2 этаж'
                    // img={{ h: 770, w: 570, src: images.sportsCamps.rooms.img3Jpg }}
                    img={{ h: 770, w: 570, src: '/img/sports-camps/rooms/3.webp' }}
                />
            </div>
        </MobileModal>
    )
})
