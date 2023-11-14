import { useEffect, useRef, useState } from 'react';
import NYBookingRoom from './NYBookingRoom';




export default function NYBookingSlider(props) {
    const wrapperRef = useRef(null)
    const containerRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;

        const x = e.clientX;
        const diffX = x - startX;

        // Ограничения для translateX
        const containerWidth = containerRef.current.offsetWidth;
        const sliderWidth = wrapperRef.current.scrollWidth;
        const minTranslateX = containerWidth - sliderWidth;
        const maxTranslateX = 0;

        setTranslateX(currentTranslateX => {
            const newTranslateX = currentTranslateX + diffX;
            return Math.max(minTranslateX, Math.min(maxTranslateX, newTranslateX));
        });

        setStartX(x);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
        }
    };

    // Стиль для прокрутки
    const wrapperStyle = {
        cursor: isDragging ? 'grabbing' : 'grab',
        transform: `translateX(${translateX}px)`,
        transition: isDragging ? 'none' : 'transform 0.3s ease-out',
    }

    const onTouchStart = (e) => {
        const touch = e.touches[0];
        setIsDragging(true);
        setStartX(touch.clientX);
    };

    const onTouchMove = (e) => {
        if (!isDragging) return;

        const touch = e.touches[0];
        const x = touch.clientX;
        const diffX = x - startX;

        const containerWidth = containerRef.current.offsetWidth;
        const sliderWidth = wrapperRef.current.scrollWidth;
        const minTranslateX = (containerWidth > 1170 ? containerWidth : containerWidth - 50) - sliderWidth;
        const maxTranslateX = 0;

        setTranslateX(currentTranslateX => {
            const newTranslateX = currentTranslateX + diffX;
            return Math.max(minTranslateX, Math.min(maxTranslateX, newTranslateX));
        });

        setStartX(x);
    };

    const onTouchEnd = () => {
        setIsDragging(false);
    };

    return (<>
        <div id='nyCont' className='container ny-container' ref={containerRef}>
            <div className='ny-booking-room__wrapper'
                ref={wrapperRef}
                style={wrapperStyle}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}

                onTouchStart={onTouchStart} // Добавлено для сенсорных устройств
                onTouchMove={onTouchMove}   // Добавлено для сенсорных устройств
                onTouchEnd={onTouchEnd}     // Добавлено для сенсорных устройств
            >
                <NYBookingRoom
                    img='/img-previews/hotel/room-previews/cottage/1.webp'
                    title='Коттедж'
                    desc={['Вместимость: 5 чел.', 'Цена за 2 дня: 42.500 руб. (~4 250 сутки/чел)']}
                />

                <NYBookingRoom
                    img='/img-previews/hotel/room-previews/module-house/1.webp'
                    title='Домик на набережной'
                    desc={['Вместимость: 5 чел. (+2 за доп. плату)', 'Цена за 2 дня: 40.000 руб. (~4 200 сутки/чел)']}
                />

                <NYBookingRoom
                    img='/img-previews/hotel/room-previews/dacha/3.webp'
                    title='Дача'
                    desc={['Вместимость: 2 + 1 чел.', 'Цена за 2 дня: 25.500 руб. (~4 250 сутки/чел)']}
                />

                <NYBookingRoom
                    img='/img-previews/hotel/room-previews/deluxe-5-corps/3.webp'
                    title='Номера в корпусах'
                    desc={['Вместимость: 2 чел. (+1 за доп. плату)', 'Цена за 2 дня: от 9.300 руб. (~2 325 сутки/чел)']}
                />
            </div>
        </div>
    </>)
}