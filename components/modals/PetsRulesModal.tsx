import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { Modal, Button, Text, ScrollArea, Stack, em } from '@mantine/core'
import { Document, Page } from 'react-pdf'
import { useEffect, useRef, useState } from 'react'
import { LoadError, Viewer } from '@react-pdf-viewer/core'



export default function PetsRulesModal() {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`)
    const [opened, { open, close }] = useDisclosure(false)
    const [numPages, setNumPages] = useState(null)
    const containerRef = useRef()
    const [sM, setSM] = useState(1)
    const [scale, setScale] = useState(1)
    const [containerWidth, setContainerWidth] = useState(0)
    const [modalIsLoad, setModalIsLoad] = useState(false)

    useEffect(() => {
        // Обновление масштаба в зависимости от размера контейнера
        const updateScale = () => {
            if (containerRef.current) {
                const cw = (containerRef.current as HTMLDivElement).clientWidth;
                // Вы можете настроить padding или максимальный размер, который PDF может занять
                const maxScaleWidth = cw; // Предположим, что контейнер уже включает padding
                setContainerWidth(cw)
                // Предполагается, что ширина PDF для масштаба 1.0 равна 595.28 (стандартный размер для PDF)
                const scaleFactor = maxScaleWidth / 595.28 * sM;
                setScale(scaleFactor);
            }
        };

        // Вызываем функцию при первой загрузке компонента
        updateScale();
        // Добавляем слушателя события на изменение размера окна, чтобы обновить масштаб при изменении размеров окна
        window.addEventListener('DOMContentLoaded', updateScale)
        window.addEventListener('resize', updateScale)
        window.addEventListener('orientationchange', updateScale)

        // Удаление слушателя события при размонтировании компонента
        return () => {
            window.removeEventListener('DOMContentLoaded', updateScale)
            window.removeEventListener('orientationchange', updateScale)
            window.removeEventListener('resize', updateScale)
        }
    }, [sM, modalIsLoad])

    const onDocumentLoadSuccess = ({ numPages }) => {
        setModalIsLoad(true)
        setNumPages(numPages);
    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => {
                    close()
                    setModalIsLoad(false)
                }}
                title="Правила проживания с животными"
                scrollAreaComponent={ScrollArea.Autosize}
                size={'xl'}
                radius={0}
                styles={{
                    body: {
                        padding: 0,
                    },
                    header: {
                        background: '#252525',
                        color: '#fff',
                    },
                    close: {
                        background: '#fff',
                        borderRadius: 0
                    }
                }}
                fullScreen={isMobile}
            >
                <Stack ref={containerRef} gap={4} w={'100%'}>
                    {/* {containerWidth} */}
                    <Document
                        file={'/pdf/rules/pets.pdf'}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={(error) => console.log('Image load: ', error)}

                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                // scale={scale}
                                width={containerWidth}
                            />
                        ))}
                    </Document>
                </Stack>
            </Modal>


            <Text fz={16} td={'underline'} style={{ cursor: 'pointer' }} onClick={open}>Правила проживания с животными</Text>
        </>
    );
}