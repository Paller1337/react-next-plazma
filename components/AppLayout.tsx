import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import { useContext, useEffect, useState } from 'react'
import Script from 'next/script'
import { BnovoContext } from './bnovo/bnovoContext'

interface AppLayoutProps {
    children: React.ReactNode
    asPath: string
}

export default function AppLayout(props: AppLayoutProps) {
    const router = useRouter()
    const [headerBlack, setHeaderBlack] = useState(false)
    const { setBnovoIframeIsLoad, setBnovoIsLoad } = useContext(BnovoContext)

    useEffect(() => {
        // console.log(props.asPath)
        switch (props.asPath) {
            case '/meals':
                setHeaderBlack(true)
                break
            case '/booking':
                setHeaderBlack(true)
                break
            default:
                setHeaderBlack(false)
                break
        }
    }, [props.asPath])
    return (<>

        <div className='wrapper' data-barba="wrapper">
            <Header darken={headerBlack} />
            {props.children}
            <Footer />
        </div >

        <Script src='https://widget.reservationsteps.ru/js/bnovo.js' onLoad={() => setBnovoIsLoad(true)} />
        <Script src='https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js' onLoad={() => setBnovoIframeIsLoad(true)} />
    </>)
}