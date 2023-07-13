import { useRouter } from 'next/router'
import { useEffect } from 'react'
// import YandexAds from '../yandexAds'
import { YMContext } from './YMContext'


interface LayoutProps {
    counterId: number
    children: React.ReactNode
    options?: {
        clickmap?: boolean
        trackLinks?: boolean
        accurateTrackBounce?: boolean
        webVisor?: boolean
    }
}

export function YMProvider(props: LayoutProps) {

    const router = useRouter()

    const ymContextValue: YMContext = {
        hit(url, options) {
            window['ym'](props.counterId, 'hit', url, options)
        },

        reachGoal(target, params?, callback?, ctx?) {
            window['ym'](props.counterId, 'reachGoal', target, params, callback, ctx)
        },
    }

    let dangerHtml = `
        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) }
            m[i].l = 1 * new Date()
            k = e.createElement(t), a = e.getElementsByTagName(t)[0],
                k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')
    `

    useEffect(() => {

        (async () => {
            window.eval(dangerHtml)
            window['ym'](props.counterId, 'init', {
                webVisor: props.options?.webVisor,
                trackLinks: props.options?.trackLinks,
                accurateTrackBounce: props.options?.accurateTrackBounce,
                clickmap: props.options?.clickmap
            })

            window['ym'](props.counterId, 'hit', router.asPath)
        })()

    }, [router.asPath])

    return (
        <YMContext.Provider value={ymContextValue}>
            {/* <YandexAds /> */}
            {props.children}
        </YMContext.Provider>
    )
}
