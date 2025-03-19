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
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap" rel="stylesheet" />
                    {/* <link href="https://fonts.googleapis.com/css2?family=Georgia:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap" rel="stylesheet" /> */}

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
