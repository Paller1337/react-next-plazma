import { useState, useEffect, useRef } from 'react';
import { slidersData } from '../data/bigSliders';
import Image from 'next/image';
import { getBase64ImageUrl } from '../middleware/utils/getBlurData';
import { v4 } from 'uuid';

interface PlazmaSliderProps {
    data: string;
}

// export async function getStaticProps() {
//     const imageSrc = process.env.CLOUDINARY_EXAMPLE_IMAGE_SRC;
//     if (!imageSrc) {
//         throw new Error('Missing CLOUDINARY_EXAMPLE_IMAGE_SRC env variable');
//     }

//     const blurDataUrl = await getBase64ImageUrl(imageSrc);
//     return {
//         props: {
//             exampleImage: {
//                 src: imageSrc,
//                 blurDataUrl: blurDataUrl,
//             },
//         },
//     };
// }

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
    }, [sliderContentRef, currentIndex]);


    if (!data) {
        return null; // Обработка случая, если данные для слайдера не найдены
    }

    const setActiveSlide = (index: number) => {
        const itemCount = data.images.length;
        const newIndex = (index + itemCount) % itemCount
        setCurrentIndex(newIndex)
    }

    const convertImage = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

    const toBase64 = (str: string) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str);

    return (
        <div key={`${dataName}`} id="plazmaSlider" className="plazma-slider" data-scroll>
            <div className="plazma-slider__content" ref={sliderContentRef} slider-content={data.name}>
                <div key={`${props.data}-prev`} className="plazma-slider__item-fake-prev" style={{ backgroundImage: `url(${data.images[data.images.length - 1]})` }} />
                {data.images.map((imagePath, index) => (
                    <>
                        {/* <div
                            key={index}
                            className={`plazma-slider__item ${index === currentIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${imagePath})` }}
                            onClick={() => setActiveSlide(index)}
                        /> */}

                        <div
                            key={v4()}
                            className={`plazma-slider__item ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setActiveSlide(index)}>
                            <Image src={imagePath} height={1920} width={1056} alt='Plazma Парк-Отель'
                                placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                    convertImage(700, 475)
                                )}`}
                            />
                        </div>
                    </>
                ))}
                <div key={`${dataName}-next`} className="plazma-slider__item-fake-next" style={{ backgroundImage: `url(${data.images[0]})` }} />
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
