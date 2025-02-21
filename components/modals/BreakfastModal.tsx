import { useDisclosure, useMediaQuery, useOrientation } from '@mantine/hooks'
import { Modal, Button, Text, ScrollArea, Stack, em, Loader } from '@mantine/core'
import { Document, Page } from 'react-pdf'
import { useEffect, useRef, useState } from 'react'
import { LoadError, Viewer } from '@react-pdf-viewer/core'

export default function BreakfastModal() {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`)
    const isVerticalFull = useMediaQuery(`(max-height: ${em(500)})`)
    const [opened, { open, close }] = useDisclosure(false)
    const [numPages, setNumPages] = useState(null)
    const containerRef = useRef()
    const [sM, setSM] = useState(1)
    const [scale, setScale] = useState(1)
    const [containerWidth, setContainerWidth] = useState(0)
    const [updateCounter, setUpdateCounter] = useState(0)
    const { angle, type } = useOrientation();

    useEffect(() => {
        // Обновление масштаба в зависимости от размера контейнера
        const updateScale = () => {
            if (containerRef.current) {
                const cw = (containerRef.current as HTMLDivElement).clientWidth
                const maxScaleWidth = cw
                setContainerWidth(cw)
                const scaleFactor = maxScaleWidth / 595.28 * sM;
                setScale(scaleFactor);
            }
        };

        updateScale()
        window.addEventListener('resize', updateScale)

        return () => {
            window.removeEventListener('resize', updateScale)
        }
    }, [sM, updateCounter])

    const onDocumentLoadSuccess = ({ numPages }) => {
        setUpdateCounter(p => p + 1)
        setNumPages(numPages);
    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => {
                    close()
                    setUpdateCounter(p => p + 1)
                }}
                title="Меню завтраков"
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
                    },
                    content: {
                        height: 'fit-content'
                    },
                    inner: {
                        alignItems: isMobile ? 'flex-end' : 'center',
                        maxWidth: isVerticalFull && 720,
                        left: isVerticalFull && '50%',
                        transform: isVerticalFull && 'translateX(-50%)',
                    },
                }}
                fullScreen={isMobile || isVerticalFull}
            >
                <Stack ref={containerRef} gap={4} w={'100%'}>
                    {/* {containerWidth} */}
                    <Document
                        file={`/pdf/breakfast.pdf?${type}`}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={(error) => console.log('Image load: ', error)}
                        loading={
                            <Stack w={'100%'} mih={200} align='center' justify='center'>
                                <Loader color={'#252525'} size={48} />
                            </Stack>
                        }
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


            <Text fz={16} td={'underline'} style={{ cursor: 'pointer' }} onClick={open}>Меню завтраков</Text>
        </>
    );
}