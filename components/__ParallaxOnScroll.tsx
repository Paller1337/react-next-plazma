import { useEffect, useState } from 'react'

interface ParallaxOnScrolProps extends React.ComponentProps<'div'> {
    //reverse?: boolean
    ratio?: number
    containerHeight?: number
}


export default function ParallaxOnScrol(props: ParallaxOnScrolProps) {
    const [parallaxOffset, setParallaxOffset] = useState(100)
    const [itemPosYOffset, setItemPosYOffset] = useState(0)


    const [itemPosYY, setItemPosYY] = useState(0)

    const [pageY, setPageY] = useState(0)
    const [itemWidth, setItemWidth] = useState(0)

    useEffect(() => {
        let item = document.getElementsByClassName('parallax-item')[0]
        // let itemPosY
        // let itemStart
        let ratio = props.ratio ?
            Math.abs(props.ratio) / 200
            : 0.05
        const itemPosY = item.getBoundingClientRect().top + document.body.scrollTop;
        const itemStart = itemPosY - item.clientHeight / 4;
        let itemEnd: number = (itemStart + item.clientHeight) + (itemStart + item.clientHeight) * ratio + 50
        
        setPageY(window.pageYOffset)
        setItemPosYY(item.getBoundingClientRect().top + document.body.scrollTop)
        setItemWidth(item.clientWidth)


        window.addEventListener('resize', () => setItemPosYOffset(Math.abs(window.innerHeight)))



        window.addEventListener('scroll', () => {

            console.clear()
            console.log('ItemPosY: ' + itemPosY);
            console.log('ItemStart: ' + itemStart);
            console.log('itemEnd: ' + itemEnd);
            console.log('Window.pageYOffset: ' + window.pageYOffset);
            // console.log('Window.innerHeight: ' + window.innerHeight);
            console.log('ItemPosYY: ' + itemPosYY);



            ((window.pageYOffset > itemStart) && (window.pageYOffset + itemPosYY < pageY + itemEnd)) ?
                setParallaxOffset((window.pageYOffset - itemPosY) * ratio) : setParallaxOffset(parallaxOffset)
        })

    }, [])

    const [imgWidth, setImgWidth] = useState<Number>(100)
    const [imgHeight, setImgHeight] = useState<Number>(100)

    useEffect(() => {
        let item = document.getElementsByClassName('parallax-item')[0]

        if (typeof window !== 'undefined') {
            const updateDimensions = () => {
                setImgWidth(item.clientWidth)
                setImgHeight(item.clientHeight)
            }

            window.addEventListener('scroll', updateDimensions)
            window.addEventListener('resize', updateDimensions)
            return () => {
                window.removeEventListener('scroll', updateDimensions)
                window.removeEventListener('resize', updateDimensions)
            }
        }
    }, [])

    return (
        <>
            <div
                className='parallax-wrapper'
                style={{
                    width: `${imgWidth}px`,
                    height: `${props.containerHeight}px`
                }} >
                <div className='parallax-item'
                    style={{
                        //transform: `translateY(${parallaxOffset}px)`,
                        transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${parallaxOffset}, 0, 1)`,
                    }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}