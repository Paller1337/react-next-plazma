import { Carousel } from '@mantine/carousel'
import { Box, Stack, useMantineTheme, Image, Text, Title, Blockquote } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { FaRankingStar } from 'react-icons/fa6'
import ModalSlider from './ModalSlider'

const IMAGES = [
    `/img/sports-camps/gym/1.jpg`,
    `/img/sports-camps/gym/2.jpg`,
    `/img/sports-camps/gym/3.jpg`,
    `/img/sports-camps/gym/4.jpg`,
    `/img/sports-camps/gym/5.jpg`,
]

export default function Gym() {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

    return (
        <Stack miw={'80%'} gap={24}>
            <Stack gap={8}>
                <Title order={4} size={mobile ? 20 : 'h4'}>Об объекте</Title>
                <Text size={mobile ? 'xs' : 'sm'}>
                    Зал оснащен высококачественными тренажерами для всех групп мышц, что позволяет проводить интенсивные тренировки
                    с акцентом на развитие силы, выносливости и координации. Просторное помещение и современное оборудование
                    создают комфортные условия для тренировок любого уровня.
                </Text>
            </Stack>

            <ModalSlider images={IMAGES} alt={'Спортивные сборы на Плазме в Донском. Тренажерный зал.'} />

            {/* <Text size={mobile ? 'xs' : 'sm'}>
            Просторное расположение тренажеров позволяет одновременно тренироваться нескольким группам,
            а использование надежных материалов гарантирует их долговечность и безопасность.
        </Text> */}

            <Blockquote fs={mobile ? 'xs' : 'sm'} color="gray" radius="xs" iconSize={48} styles={{ icon: { background: '#FAFCFF' } }}
                icon={<FaRankingStar size={24} />} mt="xl" p={24} lh={'125%'}
            >
                Тренажерный зал доступен исключительно для участников спортивных сборов,
                что обеспечивает спокойную обстановку для тренировок и удобство занятий
                в любое время.
            </Blockquote>
        </Stack>
    )
}