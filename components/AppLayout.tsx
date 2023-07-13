import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import { useContext, useEffect, useState } from 'react'
import Script from 'next/script'
import { BnovoContext } from './bnovo/bnovoContext'

interface AppLayoutProps {
    children: React.ReactNode
    asPath: string
    pageProps: any
}

export default function AppLayout(props: AppLayoutProps) {
    const router = useRouter()
    const [headerBlack, setHeaderBlack] = useState(false)
    const { setBnovoIframeIsLoad, setBnovoIsLoad } = useContext(BnovoContext)

    const meals = props.asPath.includes('meals') &&
        !props.asPath.includes('rest') &&
        !props.asPath.includes('smash') &&
        !props.asPath.includes('tent') &&
        !props.asPath.includes('hall')

    useEffect(() => {
        console.log(props.asPath)
        if (
            meals ||
            props.asPath.includes('booking')
        ) {
            setHeaderBlack(true)
        } else {
            setHeaderBlack(false)
        }
    }, [props.asPath, props.pageProps])
    return (<>

        <div className='wrapper' data-barba="wrapper">
            <Header darken={headerBlack} />
            {props.children}
            <Footer />
        </div >

        {/* <Script
            src='https://widget.reservationsteps.ru/js/bnovo.js'
            strategy='afterInteractive'
            onLoad={() => setBnovoIsLoad(true)}
        />
        <Script
            src='https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js'
            strategy='lazyOnload'
            onLoad={() => setBnovoIframeIsLoad(true)}
        /> */}
    </>)
}