import { Carousel } from '@mantine/carousel'
import { Box, Stack, useMantineTheme, Image, Text, Title, Blockquote } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FaRankingStar } from 'react-icons/fa6'
import ModalSlider from './ModalSlider'
import { DEFAULTS } from 'defaults'

const IMAGES = [
    DEFAULTS.URL.CDN + `/img/sports-camps/outdoor-gym/1.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/outdoor-gym/2.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/outdoor-gym/3.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/outdoor-gym/4.webp`,
]

export default function OutdoorGym() {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)


    return (
        <Stack miw={'80%'} gap={24}>
            <Stack gap={8}>
                <Title order={4} size={mobile ? 20 : 'h4'}>Об объекте</Title>
                <Text size={mobile ? 'xs' : 'sm'}>
                    Площадка оснащена 16 современными тренажерами, которые позволяют заниматься как базовыми,
                    так и специализированными упражнениями на все группы мышц. Это отличное место для любителей
                    воркаута и функциональных тренировок, которые предпочитают занятия на свежем воздухе.
                </Text>
            </Stack>
            
            <ModalSlider images={IMAGES} alt={'Спортивные сборы на Плазме в Донском. Уличные тренажеры.'} />
            
            {/* <Text size={mobile ? 'xs' : 'sm'}>
                Просторное расположение тренажеров позволяет одновременно тренироваться нескольким группам,
                а использование надежных материалов гарантирует их долговечность и безопасность.
            </Text> */}
            <Blockquote fs={mobile ? 'xs' : 'sm'} color="gray" radius="xs" iconSize={48} styles={{ icon: { background: '#FAFCFF' } }}
                icon={<FaRankingStar size={24} />} mt="xl" p={24} lh={'125%'}
            >
                Просторное расположение тренажеров позволяет одновременно тренироваться нескольким группам,
                а использование надежных материалов гарантирует их долговечность и безопасность.
            </Blockquote>
        </Stack>
    )
}