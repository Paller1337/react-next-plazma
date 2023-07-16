import { useEffect, useState } from 'react'


const getMobileDetect = (userAgent: NavigatorID['userAgent']) => {
    const isAndroid = () => Boolean(userAgent.match(/Android/i))
    const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
    const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
    const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
    const isSSR = () => Boolean(userAgent.match(/SSR/i))
    const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
    const isDesktop = () => Boolean(!isMobile() && !isSSR())
    return {
        isMobile,
        isDesktop,
        isAndroid,
        isIos,
        isSSR,
    }
}

export const useDeviceDetect = (): { isMobile: boolean, isDesktop: boolean, isSSR: boolean } => {
    const [data, setData] = useState({
        isMobile: false,
        isDesktop: false,
        isSSR: true
    })

    useEffect(() => {
        const ua = navigator.userAgent
        const { isMobile, isDesktop, isSSR } = getMobileDetect(ua)

        setData({
            isMobile: isMobile(),
            isDesktop: isDesktop(),
            isSSR: isSSR()
        })
    }, [])

    return data
}