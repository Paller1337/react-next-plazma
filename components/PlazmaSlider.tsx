import { useState, useEffect, useRef } from 'react';
import { slidersData } from '../data/bigSliders';

interface PlazmaSliderProps {
    data?: string;
}

export default function PlazmaSlider(props: PlazmaSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0); // Текущий индекс активного слайда
    const sliderContentRef = useRef<HTMLDivElement>(null);

    const dataName = props.data || 'smashSlider';
    const data = slidersData.find(x => x.name === dataName);
    // useEffect(() =>{
    //     console.log(data)
    // }, [])

    const handlePrevClick = () => setActiveSlide(currentIndex - 1)
    const handleNextClick = () => setActiveSlide(currentIndex + 1)


    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         setActiveSlide(currentIndex + 1);
    //     }, 5000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [currentIndex]);

    useEffect(() => {
        const sliderContentWrapper = sliderContentRef.current;
        if (!sliderContentWrapper) return;

        const items = sliderContentWrapper.getElementsByClassName('plazma-slider__item') as HTMLCollectionOf<HTMLElement>;
        const itemCount = items.length;

        // Вычисляем смещение для перемещения выбранного слайда в центр
        const slideWidth = items[currentIndex].offsetWidth;
        const sliderWidth = sliderContentWrapper.offsetWidth;
        const translateX = (sliderWidth - slideWidth) / 2 - items[currentIndex].offsetLeft;

        sliderContentWrapper.style.transform = `translateX(${translateX}px)`;
    }, [sliderContentRef, currentIndex]);


    if (!data) {
        return null; // Обработка случая, если данные для слайдера не найдены
    }

    const setActiveSlide = (index: number) => {
        const itemCount = data.images.length;
        const newIndex = (index + itemCount) % itemCount
        setCurrentIndex(newIndex)
    }


    return (
        <div id="plazmaSlider" className="plazma-slider" data-scroll>
            <div className="plazma-slider__content" ref={sliderContentRef} slider-content={data.name}>
                <div className="plazma-slider__item-fake-prev" style={{ backgroundImage: `url(${data.images[data.images.length - 1]})` }} />
                {data.images.map((imagePath, index) => (
                    <div
                        key={index}
                        className={`plazma-slider__item ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${imagePath})` }}
                        onClick={() => setActiveSlide(index)}
                    />
                ))}
                <div className="plazma-slider__item-fake-next" style={{ backgroundImage: `url(${data.images[0]})` }} />
            </div>

            <div className="plazma-slider__nav">
                <div className="plazma-slider__slider-btn btn-prev" onClick={handlePrevClick}>
                    НАЗАД
                </div>
                <div className="plazma-slider__slider-btn btn-next" onClick={handleNextClick}>
                    ВПЕРЕД
                </div>
            </div>
        </div>
    );
}
