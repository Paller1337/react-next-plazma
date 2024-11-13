import { Carousel } from '@mantine/carousel'
import { Box, Stack, useMantineTheme, Image, Text, Title, Blockquote } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FaRankingStar } from 'react-icons/fa6'
import ModalSlider from './ModalSlider'
import { DEFAULTS } from 'defaults'

const IMAGES = [
    DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/1.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/2.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/3.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/4.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/5.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/6.webp`,
    // DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/7.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/8.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/9.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/10.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/universal-tents/11.webp`,
]

export default function UniversalTents() {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    

    return (
        <Stack miw={'80%'} gap={24}>
            <Stack gap={8}>
                <Title order={4} size={mobile ? 20 : 'h4'}>Об объекте</Title>
                <Text size={mobile ? 'xs' : 'sm'}>
                    На территории расположены 4 шатра, покрытых лакированной доской,
                    что делает их подходящими для тренировок, занятий танцами и гимнастикой.
                    Эти шатры могут трансформироваться под различные задачи и обеспечивают
                    удобное укрытие в любую погоду.
                </Text>
            </Stack>
            
            <ModalSlider images={IMAGES} alt={'Спортивные сборы на Плазме в Донском. Универсальные спортивные шатры.'} />
            
            {/* <Text size={mobile ? 'xs' : 'sm'}>
                Просторное расположение тренажеров позволяет одновременно тренироваться нескольким группам,
                а использование надежных материалов гарантирует их долговечность и безопасность.
            </Text> */}

            <Blockquote fs={mobile ? 'xs' : 'sm'} color="gray" radius="xs" iconSize={48} styles={{ icon: { background: '#FAFCFF' } }}
                icon={<FaRankingStar size={24} />} mt="xl" p={24} lh={'125%'}
            >
                Дополнительно в шатрах есть зоны для отдыха, где можно провести время между занятиями или
                организовать досуговые мероприятия, такие как просмотры спортивных матчей или
                тематические встречи.
            </Blockquote>
        </Stack>
    )
}