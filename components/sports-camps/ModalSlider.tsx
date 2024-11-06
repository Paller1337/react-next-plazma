import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import { Box, useMantineTheme, Image as SlideImg, Loader, Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'

export default function ModalSlider({ images, alt, }) {
    const TRANSITION_DURATION = 200
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const [embla, setEmbla] = useState<Embla | null>(null)

    const [loaded, setLoaded] = useState(false)

    // Инициализируем хук анимации на уровне компонента
    useAnimationOffsetEffect(embla, loaded ? TRANSITION_DURATION : 0)

    // Проверка загрузки изображений
    useEffect(() => {
        let loadedImages = 0;
        images.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages += 1;
                if (loadedImages === images.length) {
                    setLoaded(true)
                }
            };
        });
    }, [images])

    return loaded ? (
        <Carousel
            getEmblaApi={setEmbla}
            align="center"
            slideSize={'100%'}
            loop
            // dragFree
            slideGap="md"
            slidesToScroll={1}
            h={mobile ? 'fit-content' : 520}
            w='100%'
            withIndicators
            styles={{
                viewport: {
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center'
                },
                container: {
                    // margin: 'auto auto'
                }
            }}
        >
            {images.map(x => (
                <Carousel.Slide key={x}>
                    <Box w='100%' style={{ overflow: 'hidden' }}>
                        <SlideImg
                            src={x}
                            alt={alt}
                            fit='cover'
                            w={'100%'}
                            h={'100%'}
                        />
                    </Box>
                </Carousel.Slide>
            ))}
        </Carousel>
    ) :
        <Stack h={mobile ? 240 : 420} bg={'#EBF2F4'} align='center' justify='center'>
            <Loader />
        </Stack>
}