import { Html, Head, Main, NextScript } from 'next/document'
import { useState, useEffect, useRef, createContext, MutableRefObject, useContext, use } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'





export default function Document() {
    


    return (
        <>
            <Html>
                <Head>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                    // eslint-disable-next-line max-len
                    //href='https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap'
                    //rel='stylesheet'
                    />
                    <link
                    // eslint-disable-next-line max-len
                    //href='https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                    //rel='stylesheet'
                    />
                </Head>
                <body className='body'>



                    <Main />
                    <NextScript />

                </body>
            </Html >
        </>
    )
}
