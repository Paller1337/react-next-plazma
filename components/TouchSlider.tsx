
interface TouchSliderProps{
    //
}



export default function TouchSlider(props: TouchSliderProps) {


    return (<>
        <div className='touch-slider'>
            <div className='touch-slider__wrapper'>
                <div className='touch-slider__content'>
                    <div className='touch-slider__item'></div>
                    <div className='touch-slider__item'></div>
                    <div className='touch-slider__item'></div>
                </div>
            </div>
        </div>
    </>)
}