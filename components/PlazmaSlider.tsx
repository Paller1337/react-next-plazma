import { useState, useEffect, useRef } from 'react';
import { slidersData } from '../data/bigSliders';
import Image from 'next/image';
import { getBase64ImageUrl } from '../middleware/utils/getBlurData';
import { v4 } from 'uuid';

interface PlazmaSliderProps {
    data: string;
}


export default function PlazmaSlider(props: PlazmaSliderProps) {

    const [currentIndex, setCurrentIndex] = useState(0); // Текущий индекс активного слайда
    const sliderContentRef = useRef<HTMLDivElement>(null);

    const dataName = props.data || 'smashSlider';
    const data = slidersData.find(x => x.name === dataName);


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
    }, [sliderContentRef.current, currentIndex]);


    if (!data) {
        return null; // Обработка случая, если данные для слайдера не найдены
    }

    const setActiveSlide = (index: number) => {
        const itemCount = data.images.length;
        const newIndex = (index + itemCount) % itemCount
        setCurrentIndex(newIndex)
    }

    return (
        <div key={`${dataName}`} id="plazmaSlider" className="plazma-slider" data-scroll>
            <div className="plazma-slider__content" ref={sliderContentRef} slider-content={data.name}>
                <Image className="plazma-slider__item-fake-prev" height={1920} width={1056} src={data.images[data.images.length - 1]} alt='Plazma'
                    onClick={() => setActiveSlide(data.images.length - 1)}
                />
                {data.images.map((imagePath, index) => (
                    <div
                        key={index}
                        className={`plazma-slider__item ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setActiveSlide(index)}>
                        <Image src={imagePath} height={1920} width={1056} alt='Plazma Парк-Отель'
                            // placeholder='blur'
                            loading="lazy"
                            quality={90}
                            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 70vw, 100vw"
                        />
                        
                        {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div> */}
                    </div>
                ))}
                <Image className="plazma-slider__item-fake-next" height={1920} width={1056} src={data.images[0]} alt='Plazma'
                    onClick={() => setActiveSlide(0)}
                />
            </div>

            <div className="plazma-slider__nav">
                <div className="plazma-slider__slider-btn btn-prev" onClick={handlePrevClick}>

                </div>
                <div className="plazma-slider__slider-btn btn-next" onClick={handleNextClick}>

                </div>
            </div>
        </div>
    );
}
