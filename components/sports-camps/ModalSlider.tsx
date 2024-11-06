import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import { Box, useMantineTheme, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'

export default function ModalSlider({ images, alt, }) {
    const TRANSITION_DURATION = 200
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const [embla, setEmbla] = useState<Embla | null>(null)

    useAnimationOffsetEffect(embla, TRANSITION_DURATION);
    return (
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
                        <Image
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
    )
}