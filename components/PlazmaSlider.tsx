import { useState, useEffect, useRef } from 'react';
import { slidersData } from '../data/bigSliders';
import Image, { ImageProps } from 'next/image';
import { getBase64ImageUrl } from '../middleware/utils/getBlurData';
import { v4 } from 'uuid';
import { TailSpin } from 'react-loader-spinner';
import vkCloudLoader from '@/mw/utils/imageLoader';
import { DEFAULTS } from 'defaults';

interface PlazmaSliderProps {
    data: string;
}

interface ImageWithPreloaderProps extends ImageProps {
    preloaderColor?: string
}
function ImageWithPreloader(props: ImageWithPreloaderProps) {
    const color = props.preloaderColor || '#262626'
    const [isLoading, setIsLoading] = useState(true)
    return (<>
        <Image {...props as Omit<ImageWithPreloaderProps, 'preloaderColor'>}
            onLoad={() => setIsLoading(false)} loader={vkCloudLoader}
        />

        {isLoading ?
            <div className="preloader">
                <TailSpin
                    height="80"
                    width="80"
                    color={color}
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div> :
            <></>
        }
    </>)
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
        <div key={`${dataName}`} id="plazmaSlider" className="plazma-slider" data-scroll
            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration}
            data-aos-once={DEFAULTS.AOS.once}>
            <div className="plazma-slider__content" ref={sliderContentRef} slider-content={data.name}>
                <Image className="plazma-slider__item-fake-prev" height={1920} width={1056} src={data.images[data.images.length - 1]} alt='Plazma'
                    onClick={() => setActiveSlide(data.images.length - 1)} loader={vkCloudLoader}
                />
                {data.images.map((imagePath, index) => (
                    <div
                        key={index}
                        className={`plazma-slider__item ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setActiveSlide(index)}>

                        <ImageWithPreloader
                            src={imagePath} height={1920} width={1056} alt='Plazma Парк-Отель'
                            loading="lazy"
                            quality={90}
                            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 70vw, 100vw"
                        />
                    </div>
                ))}
                <Image className="plazma-slider__item-fake-next" height={1920} width={1056} src={data.images[0]} alt='Plazma'
                    onClick={() => setActiveSlide(0)} loader={vkCloudLoader}
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
