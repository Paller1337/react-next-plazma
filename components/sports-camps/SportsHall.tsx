import { Carousel } from '@mantine/carousel'
import { Box, Stack, useMantineTheme, Image, Text, Title, Blockquote } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FaRankingStar } from 'react-icons/fa6'
import ModalSlider from './ModalSlider'
import { DEFAULTS } from 'defaults'

const IMAGES = [
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-hall/1.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-hall/2.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-hall/3.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-hall/4.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-hall/5.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-hall/6.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-hall/7.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-hall/8.webp`,
]



export default function SportsHall() {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

    return (
        <Stack miw={'80%'} gap={24}>
            <Stack gap={8}>
                <Title order={4} size={mobile ? 20 : 'h4'}>Об объекте</Title>
                <Text size={mobile ? 'xs' : 'sm'}>
                    Спортивный зал имеет размеры 25x44 метра и высоту потолков 11 метров, что позволяет проводить тренировки
                    и игры по мини-футболу, баскетболу, волейболу, а также занятия танцами, гимнастикой и единоборствами.
                    Зал оснащен трибунами для зрителей, удобными раздевалками и медицинским кабинетом для поддержки
                    здоровья спортсменов.
                </Text>
            </Stack>

            <ModalSlider
                images={IMAGES}
                alt={'Спортивные сборы на Плазме в Донском. Универстальный спортивный зал.'}
            />

            {/* <Text size={mobile ? 'xs' : 'sm'}>
                Для повышения удобства тренировок в зале установлено профессиональное спортивное оборудование,
                включая ворота для мини-футбола, баскетбольные стойки, сетки для волейбола и гимнастические зеркала.
                Это пространство идеально подходит для интенсивных тренировок и соревнований самого разного уровня.
            </Text> */}
            <Blockquote fs={mobile ? 'xs' : 'sm'} color="gray" radius="xs" iconSize={48} styles={{ icon: { background: '#FAFCFF' } }}
                icon={<FaRankingStar size={24} />} mt="xl" p={24} lh={'125%'}
            >
                Для повышения удобства тренировок в зале установлено профессиональное спортивное оборудование,
                включая ворота для мини-футбола, баскетбольные стойки, сетки для волейбола и гимнастические зеркала.
                Это пространство идеально подходит для интенсивных тренировок и соревнований самого разного уровня.
            </Blockquote>
        </Stack>
    )
}