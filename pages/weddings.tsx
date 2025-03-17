import Head from 'next/head'
import Link from 'next/link'
import vkCloudLoader from '@/mw/utils/imageLoader'
import TextBlock from '@/components/TextBlock'
import { Box, Button, Divider, Group, Stack, Text, Title, Image, Grid, Modal } from '@mantine/core'
import { MdPhone } from "react-icons/md"
import { Carousel } from '@mantine/carousel'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import React from 'react'
import { IoMdClose } from "react-icons/io"
import { DEFAULTS } from 'defaults'

const colors = {
    main: '#2F2525',
    subtitle: '#6E6767',
    dividerSub: '#D5D3D3'
}

interface WeddingItemProps {
    title?: React.ReactNode
    subtitle?: string
    description: string[]
    images: string[]
}
const WeddingItem = ({ title, subtitle, description, images }: WeddingItemProps) => {
    const isMobile = useMediaQuery('(max-width: 620px)')
    const isLaptop = useMediaQuery('(max-width: 1024px)')
    const isLaptopB = useMediaQuery('(max-width: 1999px)')
    const isNotebook = useMediaQuery('(max-width: 1324px)')

    const [modalImage, setModalImage] = React.useState<string | undefined>(images[0])

    const [opened, { open, close }] = useDisclosure(false)

    const gridWidth = images && images?.length > 0 ? 12 / images.length : 6

    const handleImageModal = (img) => {
        setModalImage(img)
        open()
    }
    return (<>
        <Modal
            styles={{
                header: {
                    position: 'absolute',
                    background: 'transparent',
                    right: '12px',
                    top: '12px'
                },
                body: {
                    padding: '0',
                    height: '100%'
                },
                content: {
                    height: 'fit-content',
                    background: 'none'
                },
                inner: isMobile ? {
                    padding: 0
                } : {}
            }}
            closeButtonProps={{
                icon: <Stack opacity={.5} miw={32} mih={32} bg={'rgba(255, 255, 255)'} justify='center' align='center'>
                    <IoMdClose size={24} color='#262626' />
                </Stack>
            }}

            centered opened={opened}
            onClose={close}
            size='xl'
            radius={0}
        >
            <Image
                radius={0} w='100%' mah='60vh' h='100%'
                src={modalImage}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
                alt=''
            />
        </Modal>
        <Stack py={isMobile || isLaptop ? 32 : 58} gap={isMobile ? 32 : 64}>
            <Grid gutter={{ base: isMobile ? 32 : 48 }}
                // data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
                style={{ overflow: 'hidden' }}
            >
                <Grid.Col span={{ base: 12, md: 12, lg: 8 }}>
                    <Stack gap={isMobile ? 16 : 32} maw={820}>
                        <Title ff={'Georgia'} fz={isMobile ? 30 : isNotebook ? 50 : 64} fw={600} tt={'uppercase'} c={colors.main} lh={'115%'}>
                            {title}
                        </Title>
                        <Text ff={'Lora'} fz={isMobile ? 18 : 24} c={colors.subtitle}>
                            {subtitle}
                        </Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
                    <Stack gap={isMobile ? 16 : 24} pt={10} maw={820}>
                        {description.map((d, index) => (
                            <Text key={'desc-' + d + index} ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                {d}
                            </Text>
                        ))}
                    </Stack>
                </Grid.Col>
            </Grid>

            <Group>
                {isNotebook ?
                    <Carousel
                        slideSize="70%"
                        height={isMobile ? 360 : isLaptop ? 550 : 750}
                        align="start"
                        slideGap={isMobile ? 24 : 48}
                        controlSize={25}
                        dragFree
                        previousControlProps={{
                            style: {
                                width: '32px',
                                height: '32px',
                                borderRadius: 0
                            }
                        }}
                        nextControlProps={{
                            style: {
                                width: '32px',
                                height: '32px',
                                borderRadius: 0
                            }
                        }}
                    // withControls={false}
                    >
                        {images.map((img, i) => (
                            <Carousel.Slide key={img + i + 'img'}>
                                <Image src={img} width={'100%'} height={isMobile ? 360 : isLaptop ? 550 : 750} alt={'alt'} onClick={() => handleImageModal(img)} />
                            </Carousel.Slide>
                        ))}
                    </Carousel>

                    :
                    <Grid gutter={{ base: 48, xs: 24, md: 48 }}
                        style={{ overflow: 'hidden' }}
                        w={'100%'}
                    >
                        {images.map((img, i) => (
                            <Grid.Col span={{ base: 12, lg: gridWidth }} key={img + i + 'img-grid'}>
                                <Image src={img} width={'100%'} height={isMobile ? 360 : isLaptop ? 550 : isNotebook ? 650 : 650} alt={'alt'} onClick={() => handleImageModal(img)} />
                            </Grid.Col>
                        ))}
                    </Grid>
                }
            </Group>
        </Stack>
    </>
    )
}


const SNW = ({ children }: { children: string }) => {
    return (
        <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
    )
}

const FeedbackButton = ({ fw }) => {
    const isMobile = useMediaQuery('(max-width: 620px)')
    const openPhone = () => {
        window.open('tel:+79038438929')
    }
    return (
        <Button bg={'#DE3753'} c={'#fff'} radius={0} h={isMobile ? 50 : 60} w={isMobile || fw ? '100%' : 330} onClick={openPhone}>
            <Group align='center' gap={12} w={'fit-content'}>
                <Text ff={'Georgia'} fz='16px' fw={300} c={'white'} lh={'115%'}>
                    Уточнить детали
                </Text>
                <MdPhone size={24} color='#fff' />
            </Group>
        </Button>
    )
}

export default function PageWeddings() {
    const isDesktop = useMediaQuery('(min-width: 1320px)')
    const isNotebook = useMediaQuery('(max-width: 1324px)')
    const isLaptop = useMediaQuery('(max-width: 1199px)')
    const isMobile = useMediaQuery('(max-width: 620px)')


    return (
        <>
            <Head>
                <title>Ваша свадьба в парк-отеле «PLAZMA»</title>
                {/* <meta name='description' content='' /> */}

                <meta
                    property='og:title'
                    content='Ваша свадьба в парк-отеле «PLAZMA»' />
                {/* <meta
                    property='og:description'
                    content='' /> */}
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-meals'>
                <Stack mt={isMobile ? 0 : isLaptop ? 80 : 140}>
                    <Stack
                        key={'promo'}
                        py={isMobile ? 0 : 32}
                        px={isMobile ? 0 : isLaptop ? 12 : 32}
                    >
                        <Stack
                            key={'promo'}
                            bg={isMobile ? `url("${DEFAULTS.URL.CDN}/img/weddings/promo-m.webp")` : `url("${DEFAULTS.URL.CDN}/img/weddings/promo-d.webp")`}
                            h={isMobile ? 620 : 800}
                            px={isMobile ? 24 : 50} py={24}
                            justify={isMobile ? 'flex-end' : 'center'}
                            bgsz={isMobile ? 'cover' : 'auto'}
                            bgp={isMobile ? 'top center' : 'auto auto'}

                        >
                            <Stack pt={96} gap={8} align={isMobile ? 'center' : 'flex-start'}>
                                <Title ff={'Georgia'} fz={isMobile ? 32 : 40} fw={400} tt={'uppercase'} c={'white'} ta={isMobile ? 'center' : 'left'}>свадьба, <SNW>о которой</SNW> вы мечтаете</Title>
                                <Text ff={'Georgia'} fz={isMobile ? 16 : 18} fw={300} c={'white'} lh={'115%'} ta={isMobile ? 'center' : 'left'}>
                                    Мы знаем, как важно, чтобы день прошёл идеально, <br />
                                    и с радостью поможем в организации.
                                </Text>
                                <Stack pt={24} w={'100%'}>
                                    <FeedbackButton fw={false} />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack key={'content'} gap={isMobile ? 48 : isLaptop ? 64 : 96} px={isMobile ? 12 : 32}>
                        <Stack py={64} gap={96}>
                            <Text ff={'Lora'} fz={isMobile ? 20 : 24} c={colors.main} lh={'150%'} maw={1100}>
                                Уже более ста пар доверили нам самый важный день в своей жизни – рождение новой семьи.
                                У нас легко быть собой и наслаждаться праздником: зеленые ландшафты вместо фотозон,
                                стильные интерьеры вместо декораций и настоящие эмоции вместо сценариев.
                                <br />Мы готовы помочь вам в написании первой главы вашей долгой и счастливой истории любви
                            </Text>
                            <Divider color={colors.main} />
                        </Stack>

                        <WeddingItem
                            title={<>Отдельное здание, <SNW>только для вас</SNW></>}
                            subtitle={'Место, которое отражает вашу историю, эмоции и стиль'}
                            description={[
                                `Наш банкетный зал — это самостоятельное здание, принадлежащее только вам и вашим близким.
                                Площадь 120 кв. м идеально подходит для 70–80 гостей:
                                здесь хватит места для банкетной зоны, танцпола и фотозон, так что никто не почувствует тесноты.`,
                                `Мы продумали каждую деталь, чтобы вы наслаждались красотой и комфортом своего праздника.`,
                            ]}
                            images={[
                                `${DEFAULTS.URL.CDN}/img/weddings/1-1.webp`,
                                `${DEFAULTS.URL.CDN}/img/weddings/1-2.webp`
                            ]}
                        />

                        <Divider color={colors.main} />

                        <WeddingItem
                            title={<>Выездная церемония <SNW>и фуршет</SNW> <SNW>для гостей</SNW></>}
                            subtitle={'Скажите заветное «Да» под открытым небом'}
                            description={[
                                `Мы предлагаем выездную церемонию на свежем воздухе, чтобы ваш особенный момент прошёл среди природы и в окружении самых близких. 
                                Просторная территория парк-отеля с живописными локациями создаст романтический антураж для обмена клятвами.`,
                                `Пока вы наслаждаетесь фотосессией, гости не будут скучать. Для них — фуршет с шампанским и закусками, 
                                прогулка по зелёной территории и атмосфера праздника до начала банкета.`,
                            ]}
                            images={[
                                `${DEFAULTS.URL.CDN}/img/weddings/2-1.webp`,
                                `${DEFAULTS.URL.CDN}/img/weddings/2-2.webp`
                            ]}
                        />

                        <Divider color={colors.main} />

                        <WeddingItem
                            title={<>Территория 7 га <SNW>для фотосессий</SNW></>}
                            subtitle={'Создайте уникальные кадры без лишней суеты'}
                            description={[
                                `Наша площадка создаёт идеальные условия для  свадебной фотосессии. 
                                На территории парк-отеля вы найдёте живописные зелёные зоны, уединённые уголки и 
                                просторные открытые пространства, которые станут идеальным фоном для ваших снимков.`,
                                `Мы предлагаем варианты пеших прогулок и дополнительных активностей, чтобы гости не скучали, пока жених и невеста заняты фотосессией.`,
                            ]}
                            images={[
                                `${DEFAULTS.URL.CDN}/img/weddings/3-1.webp`,
                                `${DEFAULTS.URL.CDN}/img/weddings/3-2.webp`
                            ]}
                        />

                        <Divider color={colors.main} />

                        <WeddingItem
                            title={<>Индивидуальное меню <SNW>и сервировка</SNW></>}
                            subtitle={'Каждый гость будет доволен'}
                            description={[
                                `Меню для свадьбы — это не просто набор блюд, а тщательно продуманная концепция. 
                                Мы учитываем вкусы молодожёнов и их гостей, а также возможные диетические ограничения. `,
                                `Наш менеджер поможет выбрать комбинацию, которая всех порадует. Особое внимание уделяется сервировке: визуальное наслаждение — важная часть вашего праздника. 
                                Официанты работают в стильной форме и строго соблюдают время подачи блюд, включая момент торжественного выноса свадебного торта.`,
                            ]}
                            images={[
                                `${DEFAULTS.URL.CDN}/img/weddings/4-1.webp`,
                                `${DEFAULTS.URL.CDN}/img/weddings/4-2.webp`,
                                `${DEFAULTS.URL.CDN}/img/weddings/4-3.webp`
                            ]}
                        />

                        <Divider color={colors.main} />

                        <WeddingItem
                            title={<>Техническое оснащение</>}
                            subtitle={'Сделайте праздник ещё ярче'}
                            description={[
                                `Всё необходимое оборудование уже на месте, так что вам не нужно арендовать или привозить технику отдельно. 
                                Мы поможем с настройкой, чтобы ваш праздник прошёл без накладок.`,
                                `Проектор: покажите трогательные фотоистории вашей пары или удивите гостей оригинальной презентацией.`,
                            ]}
                            images={[
                                `${DEFAULTS.URL.CDN}/img/weddings/5-1.webp`,
                                `${DEFAULTS.URL.CDN}/img/weddings/5-2.webp`
                            ]}
                        />

                        <Divider color={colors.main} />

                        <Group w={'100%'} py={isMobile || isLaptop ? 32 : 58}>
                            <Grid
                                gutter={{ base: isMobile ? 32 : 48 }} w={'100%'}
                                style={{ overflow: 'hidden' }}
                                styles={{ inner: { flexDirection: isLaptop ? 'column-reverse' : 'row' } }}
                            >
                                <Grid.Col span={{ base: 12, md: 12, lg: 8 }}>
                                    <Image src={`${DEFAULTS.URL.CDN}/img/weddings/6.webp`} width={'100%'} height={isMobile ? 420 : isNotebook ? 600 : 810} alt={'alt'} pt={isMobile ? 0 : 12} pb={4} />
                                </Grid.Col>

                                <Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
                                    <Stack justify='space-between' h={'100%'} gap={48}>
                                        <Stack gap={isMobile ? 16 : 32} maw={820}>
                                            <Title ff={'Georgia'} fz={isMobile ? 30 : isNotebook ? 50 : 64} fw={600} tt={'uppercase'} c={colors.main} lh={'115%'}>
                                                Важные правила площадки
                                            </Title>
                                        </Stack>
                                        <Stack gap={isMobile ? 16 : 24} pt={10} maw={820}>
                                            <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                Мы сделаем всё, чтобы молодожёны и гости чувствовали себя счастливыми и расслабленными.
                                                Однако просим соблюдать несколько простых правил.
                                            </Text>
                                            <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                В банкетном зале запрещено использование хлопушек и открытых огней, а также битьё фужеров.
                                            </Text>

                                            <Divider color={colors.dividerSub} />

                                            <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                Это важно для сохранения уюта и порядка в зале, а также безопасности всех участников праздника.                                    </Text>
                                        </Stack>
                                    </Stack>
                                </Grid.Col>
                            </Grid>
                        </Group>

                        <Group w={'100%'} py={isMobile || isLaptop ? 0 : 58} mb={120}>
                            <Grid
                                gutter={{ base: isMobile ? 32 : 48 }} w={'100%'}
                                style={{ overflow: 'hidden' }}
                            >
                                <Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
                                    <Stack justify='space-between' h={'100%'} gap={48}>
                                        <Stack gap={isMobile ? 16 : 32} maw={820}>
                                            <Title ff={'Georgia'} fz={isMobile ? 30 : isNotebook ? 50 : 64} fw={600} tt={'uppercase'} c={colors.main} lh={'115%'}>
                                                Давайте обсудим детали
                                            </Title>
                                        </Stack>
                                        <Stack gap={isMobile ? 16 : 24} pt={10} maw={820}>
                                            <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                Мы с радостью ответим на все вопросы, подберём свободные даты и поможем вам организовать незабываемое торжество.
                                            </Text>

                                            <Divider color={colors.dividerSub} />

                                            <Stack gap={12} pb={32}>
                                                <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                    <span style={{ fontWeight: 700 }}>Телефон:</span> +7(903)843-89-29
                                                </Text>
                                                <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                    <span style={{ fontWeight: 700 }}>Email:</span> anna@kplazma.ru
                                                </Text>
                                                <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                    <span style={{ fontWeight: 700 }}>Адрес:</span> <SNW>г. Донской,</SNW> <SNW>ул. Герцена,</SNW> <SNW>дом 14,</SNW> <SNW>Парк-отель «Plazma»</SNW>
                                                </Text>
                                            </Stack>
                                            <FeedbackButton fw={isMobile || (isNotebook && !isLaptop) || isDesktop} />
                                        </Stack>
                                    </Stack>
                                </Grid.Col>

                                <Grid.Col span={{ base: 12, md: 12, lg: 8 }}>
                                    <Image src={`${DEFAULTS.URL.CDN}/img/weddings/7.webp`} width={'100%'} height={isMobile ? 420 : isNotebook ? 600 : 810} alt={'alt'} pt={isMobile ? 0 : 12} />
                                </Grid.Col>
                            </Grid>
                        </Group>
                    </Stack>
                </Stack>
            </main>
        </>

    )
}
