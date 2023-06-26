import { MutableRefObject, useEffect } from "react"
import LocomotiveScroll from 'locomotive-scroll'


export default function useLocoScroll() {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            const timeout = setTimeout(() => {
                // dragscroll.reset()
                scroll.update()
                console.log('scroll update')
            }, 1000)
            return () => clearTimeout(timeout)
        })

        let scroll: any;
        // @ts-ignore
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                smoothMobile: true,
                resetNativeScroll: true,
                lerp: 0.12
            });
        });
        return () => {
            if (scroll) {
                scroll.destroy();
            }
        }
    }, []);
}