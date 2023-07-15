/* eslint-disable react/display-name */
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import MobileModal from './MobileModal'
import Router, { useRouter } from 'next/router'
import ColumnCard from '../ColumnCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import InputText from '../form/InputText'



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
            <div className='mobile-modal--input modal_mail-subscribe' ref={input}>
                <span className='modal__text'>
                    Подпишитесь на рассылку для того, чтобы всегда оставаться в курсе наших
                    специальных предложений, бонусных и скидочных программ.
                </span>
                <InputText
                    placeholder='Введите Email'
                />
                <div className='btn btn_dark'>Подписаться</div>
            </div>
        </MobileModal>
    )
})
