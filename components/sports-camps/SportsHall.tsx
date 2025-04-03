import { Carousel } from '@mantine/carousel'
import { Box, Stack, useMantineTheme, Image, Text, Title, Blockquote, Group, List } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FaRankingStar } from 'react-icons/fa6'
import ModalSlider from './ModalSlider'
import { DEFAULTS } from 'defaults'
import PlazmaSertItem from '../PlazmaSertItem'
import SNW from '../SNW'

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

            <Group gap={12} justify={mobile ? 'center' : 'space-between'} pb={mobile ? 48 : 12}>
                <Stack gap={12} maw={mobile ? '100%' : '70%'}>
                    <Title order={4} size={mobile ? 20 : 'h4'}>Сертифицированный спортивный объект</Title>
                    <Text size={mobile ? 'xs' : 'sm'}>
                        Многофункциональный спортивный зал, расположенный по адресу: Тульская область, г. Донской, микрорайон Центральный, ул. Никольская, прошёл добровольную сертификацию по системе <b>«РОССПОРТСЕРТИФИКАТ. БЕЗОПАСНОСТЬ, КАЧЕСТВО, ДОСТУПНОСТЬ»</b>.
                    </Text>

                    <Stack gap={4} py={12}>
                        <Text fz={mobile ? 15 : 18} fw={600}>Объект соответствует требованиям:</Text>
                        <List size={'xs'} styles={{ itemLabel: { fontSize: mobile ? 15 : 18 }, item: { paddingBlock: 2 } }}>
                            <List.Item><SNW>п. 5.1, 5.3 ГОСТ Р 52025-2021</SNW></List.Item>
                            <List.Item><SNW>п. 5 ГОСТ Р 55529-2013</SNW></List.Item>
                        </List>
                    </Stack>

                    <Stack gap={2}>
                        <Text size={mobile ? 'xs' : 'sm'}>
                            Срок действия сертификата: <b> с 14 февраля 2025 г. по 14 февраля 2028 г.</b>
                        </Text>
                        <Text size={mobile ? 'xs' : 'sm'}>
                            Орган по сертификации: ООО «НИИ ПБСС»
                        </Text>
                    </Stack>

                    <Text size={mobile ? 'xs' : 'sm'}>
                        Сертификация подтверждает соответствие спортивного зала современным требованиям безопасности и качества.
                    </Text>


                </Stack>

                <PlazmaSertItem img={'/img/certificate.webp'} />
            </Group>
        </Stack>
    )
}