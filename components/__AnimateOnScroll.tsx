import { ReactNode, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export type AnimationLib = 'fade-up' | 'fade-down' | 'fade-right' | 'fade-left' |
    'fade-up-right' | 'fade-up-left' | 'fade-down-right' | 'fade-down-left' |
    'flip-left' | 'flip-right' | 'flip-up' | 'flip-down' |
    'zoom-in' | 'zoom-in-up' | 'zoom-in-down' | 'zoom-in-left' | 'zoom-in-right' |
    'zoom-out' | 'zoom-out-up' | 'zoom-out-down' | 'zoom-out-left' | 'zoom-out-right'
// custom animations


export interface AnimateOnScrollProps {
    animationName?: AnimationLib
    offset?: number
    duration?: number
    delay?: number
    animateOnce?: boolean
    type?: 'ease' | 'ease-in' | 'ease-in-sine'
    children?: ReactNode
}


export const AnimateOnScroll = (props: AnimateOnScrollProps) => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div
            data-aos={props.animationName ?? 'fade-up'}
            data-aos-offset={props.offset ?? 120}
            data-aos-duration={props.duration ?? 400}
            data-aos-easing={props.type ?? 'ease'}
            data-aos-delay={props.delay ?? 0}
            data-aos-once={props.animateOnce}>
            {props.children}
        </div>
    )
}