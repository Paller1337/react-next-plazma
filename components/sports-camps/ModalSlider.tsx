import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import { Box, useMantineTheme, Image as SlideImg, Loader, Stack, BackgroundImage } from '@mantine/core'
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
        <Stack h={mobile ? 240 : 420} bg={'#EBF2F4'} pos={'relative'}>
            <BackgroundImage src={images[0]} h={'100%'} w={'100%'} pos={'relative'} style={{ zIndex: 9 }} />
            <Stack
                pos={'absolute'} left={0} right={0} top={0} bottom={0}
                style={{ zIndex: 10, background: 'rgba(17, 65, 126, 0.60)', backdropFilter: 'blur(2px)' }}
                align='center' justify='center'
            >
                <Loader color='white' size={48}  />
            </Stack>
        </Stack>
}