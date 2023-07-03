import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import { useEffect, useState } from 'react'

interface AppLayoutProps {
    children: React.ReactNode
    asPath: string
}

export default function AppLayout(props: AppLayoutProps) {
    const router = useRouter()
    const [headerBlack, setHeaderBlack] = useState(false)

    useEffect(() => {
        console.log(props.asPath)
        switch(props.asPath){
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
            <Header darken={headerBlack}/>
            {props.children}
            <Footer />
        </div >
    </>)
}