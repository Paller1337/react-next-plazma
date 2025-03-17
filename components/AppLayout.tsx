import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import { useContext, useEffect, useState } from 'react'
import Script from 'next/script'
import { BnovoContext } from './bnovo/bnovoContext'
import { Toaster } from 'react-hot-toast'
import Aos from 'aos'
import { TLContext } from './travelline/tlContext'
import { useMediaQuery } from '@mantine/hooks'

interface AppLayoutProps {
    children: React.ReactNode
    asPath: string
    pageProps: any
}

export default function AppLayout(props: AppLayoutProps) {
    const router = useRouter()
    const [headerBlack, setHeaderBlack] = useState(false)
    // const { tlIsLoad, setTlIframeIsLoad, setTlIsLoad } = useContext(TLContext)
    const [isNotFound, setIsNotFound] = useState(false);
    const { setBnovoIframeIsLoad, setBnovoIsLoad } = useContext(BnovoContext)
    const isMobile = useMediaQuery('(max-width: 620px')

    // const loadTL = () => {
    //     (function () {
    //         (function (w) {
    //             var q = [
    //                 ['setContext', 'TL-INT-kplazma_2023-09-12', 'ru'],
    //                 ['embed', 'booking-form', {
    //                     container: 'tl-booking-form'
    //                 }],
    //                 ['embed', 'search-form', {
    //                     container: 'tl-search-form'
    //                 }],
    //             ];
    //             var h = ["ru-ibe.tlintegration.ru", "ibe.tlintegration.ru", "ibe.tlintegration.com"];
    //             var t = w.travelline = (w.travelline || {}),
    //                 ti = t.integration = (t.integration || {});
    //             ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
    //             if (!ti.__loader) {
    //                 ti.__loader = true;
    //                 var d = w.document, c = d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0];
    //                 function e(s, f) { return function () { w.TL || (c.removeChild(s), f()) } }
    //                 (function l(h) {
    //                     if (0 === h.length) return; var s = d.createElement("script");
    //                     s.type = "text/javascript"; s.async = !0; s.src = "https://" + h[0] + "/integration/loader.js";
    //                     s.onerror = s.onload = e(s, function () { l(h.slice(1, h.length)) }); c.appendChild(s)
    //                 })(h);
    //             }
    //         })(window);
    //     })();
    // }

    // useEffect(() => { loadTL() }, [router])

    const checkIfNotFound = async () => {
        const response = await fetch(window.location.href)
        setIsNotFound(response.status === 404)
    }

    useEffect(() => {
        Aos.init()
    }, [])


    const meals = props.asPath.includes('meals') &&
        !props.asPath.includes('rest') &&
        !props.asPath.includes('smash') &&
        !props.asPath.includes('tent') &&
        !props.asPath.includes('hall')

    const job = props.asPath.includes('job')
    const awards = props.asPath.includes('awards')
    const weddings = props.asPath.includes('weddings') && !isMobile

    useEffect(() => {
        checkIfNotFound()

        if (
            meals ||
            job ||
            awards ||
            weddings ||
            props.asPath.includes('booking') ||
            isNotFound
        ) {
            setHeaderBlack(true)
        } else {
            setHeaderBlack(false)
        }
    }, [props.asPath, props.pageProps, isNotFound, isMobile])

    return (<>

        <div className='wrapper' data-barba="wrapper">
            <Toaster />
            <Header darken={headerBlack} />
            {props.children}
            <Footer />
        </div >

        {/* <Script
            src='/js/tl_head.js'
            strategy='afterInteractive'
            onLoad={() => setTlIsLoad(true)}
        /> */}


        {/* Bnovo Booking Engine */}
        <Script
            src='https://widget.reservationsteps.ru/js/bnovo.js'
            strategy='afterInteractive'
            onLoad={() => setBnovoIsLoad(true)}
        />
        <Script
            src='https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js'
            strategy='afterInteractive'
            onLoad={() => setBnovoIframeIsLoad(true)}
        />
    </>)
}