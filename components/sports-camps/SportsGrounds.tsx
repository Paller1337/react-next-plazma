import { Carousel } from '@mantine/carousel'
import { Box, Stack, useMantineTheme, Image, Text, Title, Blockquote } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FaRankingStar } from 'react-icons/fa6'
import ModalSlider from './ModalSlider'
import { DEFAULTS } from 'defaults'

const IMAGES = [
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-grounds/1.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-grounds/2.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-grounds/3.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-grounds/4.webp`,
    DEFAULTS.URL.CDN + `/img/sports-camps/sports-grounds/5.webp`,
]

export default function SportsGrounds() {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)


    return (
        <Stack miw={'80%'} gap={24}>
            <Stack gap={8}>
                <Title order={4} size={mobile ? 20 : 'h4'}>Об объекте</Title>
                <Text size={mobile ? 'xs' : 'sm'}>
                    Покрытие из резиновой крошки и разметка делают эти площадки подходящими для различных спортивных занятий,
                    включая баскетбол, футбол и волейбол. Площадки обеспечивают безопасную тренировку благодаря прочному и
                    нескользящему покрытию, а также позволяют проводить занятия с минимальным риском травм.
                </Text>
            </Stack>

            <ModalSlider images={IMAGES} alt={'Спортивные сборы на Плазме в Донском. Универсальные спортивные площадки.'} />

            {/* <Text size={mobile ? 'xs' : 'sm'}>
                В пляжном центре предусмотрены трибуны для зрителей и возможность онлайн-трансляции,
                что делает его привлекательным как для профессиональных спортсменов, так
                и для любителей пляжных видов спорта.
            </Text> */}
            <Blockquote fs={mobile ? 'xs' : 'sm'} color="gray" radius="xs" iconSize={48} styles={{ icon: { background: '#FAFCFF' } }}
                icon={<FaRankingStar size={24} />} mt="xl" p={24} lh={'125%'}
            >
                Универсальные площадки особенно популярны в летний сезон, создавая идеальные
                условия для тренировок на открытом воздухе в окружении природы.
            </Blockquote>
        </Stack>
    )
}