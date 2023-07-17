import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import { useContext, useEffect, useState } from 'react'
import Script from 'next/script'
import { BnovoContext } from './bnovo/bnovoContext'
import { Toaster } from 'react-hot-toast'

interface AppLayoutProps {
    children: React.ReactNode
    asPath: string
    pageProps: any
}

export default function AppLayout(props: AppLayoutProps) {
    const router = useRouter()
    const [headerBlack, setHeaderBlack] = useState(false)
    const { setBnovoIframeIsLoad, setBnovoIsLoad } = useContext(BnovoContext)
    const [isNotFound, setIsNotFound] = useState(false);


    const checkIfNotFound = async () => {
        const response = await fetch(window.location.href)
        setIsNotFound(response.status === 404)
    }



    const meals = props.asPath.includes('meals') &&
        !props.asPath.includes('rest') &&
        !props.asPath.includes('smash') &&
        !props.asPath.includes('tent') &&
        !props.asPath.includes('hall')

    useEffect(() => {
        checkIfNotFound()
        
        if (
            meals ||
            props.asPath.includes('booking') ||
            isNotFound
        ) {
            setHeaderBlack(true)
        } else {
            setHeaderBlack(false)
        }
    }, [props.asPath, props.pageProps, isNotFound])
    return (<>

        <div className='wrapper' data-barba="wrapper">
            <Toaster />
            <Header darken={headerBlack} />
            {props.children}
            <Footer />
        </div >

        <Script
            src='https://widget.reservationsteps.ru/js/bnovo.js'
            strategy='afterInteractive'
            onLoad={() => setBnovoIsLoad(true)}
        />
        <Script
            src='https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js'
            strategy='lazyOnload'
            onLoad={() => setBnovoIframeIsLoad(true)}
        />
    </>)
}