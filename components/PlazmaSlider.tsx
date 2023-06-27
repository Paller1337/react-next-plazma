import { useState, useEffect, useRef } from 'react';
import { slidersData } from '../data/bigSliders';
import Image from 'next/image';
import { getBase64ImageUrl } from '../middleware/utils/getBlurData';

interface PlazmaSliderProps {
    data?: string;
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
                    <>
                        {/* <div
                            key={index}
                            className={`plazma-slider__item ${index === currentIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${imagePath})` }}
                            onClick={() => setActiveSlide(index)}
                        /> */}

                        <div
                            key={index}
                            className={`plazma-slider__item ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setActiveSlide(index)}>
                            <Image src={imagePath} height={1920} width={1056} alt='Plazma Парк-Отель'
                                placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                                />
                        </div>
                    </>
                ))}
                <div className="plazma-slider__item-fake-next" style={{ backgroundImage: `url(${data.images[0]})` }} />
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
