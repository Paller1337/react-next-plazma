import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';
declare global {
    interface Window {
        travelline: any
        TL: any
    }
}



export default function Document() {
    return (
        <>
            <Html>
                <Head>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                    <meta name="google-site-verification" content="E36ptUCTRfUBdjkHz434f1EO1Waq_Jy98S5lWI4qj_E" />
                </Head>
                <body className='body'>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        </>
    )
}
