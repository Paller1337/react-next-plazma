import { Carousel } from '@mantine/carousel'
import { Box, Stack, useMantineTheme, Image, Text, Blockquote, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FaRankingStar } from 'react-icons/fa6'
import ModalSlider from './ModalSlider'
import { DEFAULTS } from 'defaults'

const IMAGES = [
    DEFAULTS.URL.CDN + `/img/sports-camps/beach-center/1.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/beach-center/2.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/beach-center/3.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/beach-center/4.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/beach-center/5.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/beach-center/6.webp`,
]

export default function BeachCenter() {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)


    return (
        <Stack miw={'80%'} gap={24}>
            <Stack gap={8}>
                <Title order={4} size={mobile ? 20 : 'h4'}>Об объекте</Title>
                <Text size={mobile ? 'xs' : 'sm'}>
                    Центр оснащен четырьмя площадками с подогреваемым кварцевым песком, глубина которого достигает 40 см.
                    Такой уровень подготовки позволяет проводить тренировки и соревнования по пляжному футболу, волейболу
                    и другим пляжным дисциплинам в любое время года.
                </Text>
            </Stack>
            
            <ModalSlider images={IMAGES} alt={'Спортивные сборы на Плазме в Донском. Пляжный центр.'} />

            {/* <Text size={mobile ? 'xs' : 'sm'}>
                В пляжном центре предусмотрены трибуны для зрителей и возможность онлайн-трансляции,
                что делает его привлекательным как для профессиональных спортсменов, так
                и для любителей пляжных видов спорта.
            </Text> */}
            <Blockquote fs={mobile ? 'xs' : 'sm'} color="gray" radius="xs" iconSize={48} styles={{ icon: { background: '#FAFCFF' } }}
                icon={<FaRankingStar size={24} />} mt="xl" p={24} lh={'125%'}
            >
                В пляжном центре предусмотрены трибуны для зрителей и возможность онлайн-трансляции,
                что делает его привлекательным как для профессиональных спортсменов, так
                и для любителей пляжных видов спорта.
            </Blockquote>
        </Stack>
    )
}