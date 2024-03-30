import React, { useEffect, useRef, useState } from 'react'
import { Document, Page } from 'react-pdf'

const cdn = 'https://cdn0.kplazma.ru'
const menus = [
    {
        name: 'Меню ресторана',
        img: '/pdf/28.03/rest-2.pdf',
        sM: 1,
    },
    {
        name: 'Банкетное меню',
        img: '/pdf/28.03/banquet-3.pdf',
        sM: .8,
    },
    {
        name: 'Барная карта',
        img: '/pdf/28.03/bar-2.pdf',
        sM: 1,
    },
    // {
    //     name: 'Чайная карта',
    //     img: '/pdf/tea.pdf',
    //     sM: 1,
    // },
]

function MenuViewer() {
    const [numPages, setNumPages] = useState(null)
    const containerRef = useRef()
    const [currentMenu, setCurrentMenu] = useState(menus[0])
    const [scale, setScale] = useState(1)
    const [sM, setSM] = useState(menus[0].sM)

    // const scaleMultiplier = .9

    useEffect(() => {
        // Обновление масштаба в зависимости от размера контейнера
        const updateScale = () => {
            if (containerRef.current) {
                const containerWidth = (containerRef.current as HTMLDivElement).clientWidth;
                // Вы можете настроить padding или максимальный размер, который PDF может занять
                const maxScaleWidth = containerWidth; // Предположим, что контейнер уже включает padding
                // Предполагается, что ширина PDF для масштаба 1.0 равна 595.28 (стандартный размер для PDF)
                const scaleFactor = maxScaleWidth / 595.28 * sM;
                setScale(scaleFactor);
            }
        };

        // Вызываем функцию при первой загрузке компонента
        updateScale();
        // Добавляем слушателя события на изменение размера окна, чтобы обновить масштаб при изменении размеров окна
        window.addEventListener('resize', updateScale)

        // Удаление слушателя события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', updateScale)
        }
    }, [sM])

    // Функция для смены меню
    const selectMenu = (menu) => {
        setCurrentMenu(menu)
        setSM(menu.sM)
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    return (
        <div ref={containerRef} className='container'>
            <div className='menu-viewer'>
                <div className='menu-viewer__menu'>
                    {menus.map((menu, i) => (
                        <button className={`btn btn_black ${currentMenu === menus[i] ? 'selected' : ''}`}
                            key={menu.name} onClick={() => selectMenu(menu)}>
                            {menu.name}
                        </button>
                    ))}
                </div>
                <div className='menu-viewer__pdf'>
                    <Document file={currentMenu.img} onLoadSuccess={onDocumentLoadSuccess} onLoadError={(error) => console.log('Image load: ', error)}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} scale={scale} />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    )
}

export default MenuViewer
