import Head from 'next/head'
// import Image from 'next/image'
import PromoMin from '../components/PromoMin'
import ColumnCard from '../components/ColumnCard'
import TextBlock from '../components/TextBlock'
import SportCalculator from '../components/SportCalculator'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination } from 'swiper'
import vkCloudLoader from '@/mw/utils/imageLoader'
import { DEFAULTS } from 'defaults'
import SportObjectsMenu from '@/components/SportObjectsMenu'
import RowCard from '@/components/RowCard'
import SportNews from '@/components/SportNews'
import SportRequest from '@/components/SportRequest'
import { Button, Divider, Grid, Group, Input, Modal, Paper, rem, Stack, Text, Textarea, Title, useMantineTheme, Image, Box, em } from '@mantine/core'
import { Calendar, Eye } from 'react-feather'
import { IVKGroupWallPost } from '@/mw/types/VKGroupWallPost'
import { getVkWall } from '@/mw/utils/getVkWall'
import { DateTime } from 'luxon'
import { FaCalculator, FaPlus } from "react-icons/fa"
import { ReactSVG } from 'react-svg'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel'


interface SportCampsPageProps {
    vkposts: IVKGroupWallPost[]
}
export const getServerSideProps = async () => {
    try {
        const posts = await getVkWall()
        return {
            props: {
                vkposts: posts,
            } as SportCampsPageProps
        }
    } catch (error) {
        console.error(error)
    }

    return {
        props: {
            vkposts: null,
        } as SportCampsPageProps
    }
}
interface IVKPost {
    link: string
    text: string
    date: string
    image: {
        height: number;
        type: string;
        url: string;
        width: number;
    }
    views: number
    id: number
}

const CalcButton = ({ onClick }) => {
    return (
        <Button size='md' variant='outline' radius={0} color='#262626' py={18} px={34} h={'fit-content'} w={'fit-content'}
            onClick={onClick}
        >
            <Group gap={12} align='center'>
                <Text size='sm'>Заказать расчет стоимости</Text>
                <FaCalculator />
            </Group>
        </Button>
    )
}

const VKPost = ({ image, text, views, link, date }: IVKPost) => {
    const isMobile = useMediaQuery(`(max-width: ${em(720)})`)
    return (<>
        <Stack h={520} w={isMobile ? '100%' : '90%'} maw={isMobile ? '100%' : 456} p={24} justify='space-between'
            style={{
                backgroundColor: '#1B2128',
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 63.92%, 
                rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45.08%, rgba(0, 0, 0, 0.40) 100%), 
                linear-gradient(0deg, var(--Miscellaneous-_Kit-Section-Stroke, rgba(0, 0, 0, 0.30)) 0%, 
                var(--Miscellaneous-_Kit-Section-Stroke, rgba(0, 0, 0, 0.30)) 100%), url(${image.url}) lightgray 50% / cover no-repeat`,
                backgroundSize: 'cover'
            }}>
            <Text size='xxs' tt={'uppercase'} c={'white'} opacity={.5} style={{ letterSpacing: .5 }}>VK.COM/plazma.sport</Text>
            <Stack gap={12}>
                <Group>
                    <Group gap={24}>
                        <Group gap={8}>
                            <Text size='md' c={'white'}>{views}</Text>
                            <Eye color='white' size={24} />
                        </Group>
                        <Group gap={8}>
                            <Text size='md' c={'white'}>{date}</Text>
                            <Calendar color='white' size={24} />
                        </Group>
                    </Group>
                </Group>
                <Divider opacity={.5} />
                <Text size='md' c='white' lineClamp={2} w={'100%'}>{text}</Text>
            </Stack>
        </Stack>
    </>)
}

interface SportVillageItemProps {
    images: string[]
    dir: 'iltr' | 'irtl'
    title: string
    desc: string
    id: string
    openModal: () => void
}

const SportVillageItem = ({ images, title, desc, id, dir, openModal }: SportVillageItemProps) => {
    const theme = useMantineTheme()
    const min = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    return (
        <Grid gutter={48}
            data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
        >
            {dir === 'irtl' || min ?
                <Grid.Col span={{ lg: 4, md: 12 }}>
                    <Stack px={{ lg: 48, md: 0 }} gap={20} h={'100%'} justify='center'>
                        <Title order={3} style={{ letterSpacing: -1.5 }}>{title}</Title>
                        <Text size='md'>{desc}</Text>
                        <CalcButton onClick={openModal} />
                    </Stack>
                </Grid.Col> : <></>}

            <Grid.Col span={{ lg: 8, md: 12 }}>
                <Grid gutter={48}>
                    <Grid.Col span={{ lg: 4, md: 12 }}>
                        <Group
                            style={{
                                height: 700,
                                minWidth: 380,
                                backgroundImage: `url(${images[0]})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ lg: 8, md: 12 }}>
                        <Group
                            style={{
                                height: 700,
                                minWidth: 380,
                                width: '100%',
                                backgroundImage: `url(${images[1]})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        />
                    </Grid.Col>
                </Grid>
            </Grid.Col>

            {dir === 'iltr' && !min ?
                <Grid.Col span={{ lg: 4, md: 12 }}>
                    <Stack px={48} gap={20} h={'100%'} justify='center'>
                        <Title order={3} style={{ letterSpacing: -1.5 }}>{title}</Title>
                        <Text size='md'>{desc}</Text>
                        <CalcButton onClick={openModal} />
                    </Stack>
                </Grid.Col> : <></>}
        </Grid>
    )
}

interface SportFormProps {
    onSubmit?: () => void
}
const SportForm = ({ onSubmit }: SportFormProps) => {

    return (
        <>
            <Stack py={48} top={10}>
                <Title order={3} ta={'center'}>Заявка на сборы</Title>
                <Stack gap={0} p={0} pos={'relative'} style={{ zIndex: 1 }}>
                    <Text size='md' ta={'center'} >
                        Заполните форму, отправьте заявку и наш менеджер свяжется с вами,
                        уточнит все детали и ответит на любые вопросы.
                    </Text>
                    <Paper bg={'#DCF0FF'} style={{ top: 20, right: 0, bottom: -5, left: 75, zIndex: -1 }} pos={'absolute'} />
                </Stack>
            </Stack>

            <Stack gap={24}>
                <Input.Wrapper label="Название команды" description={' '}>
                    <Input
                        radius={0} styles={{ input: { padding: 12, height: 'fit-content', borderColor: "#1B2128" } }}
                        placeholder="Например: Чемпионы"
                    />
                </Input.Wrapper>

                <Textarea
                    label="Площадка для тренировок"
                    description=" "
                    placeholder="Опишите необходимое вам помещение, покрытие, площадь."
                    radius={0} styles={{ input: { padding: 12, height: 'fit-content', borderColor: "#1B2128" } }}
                />

                <Input.Wrapper label="Ф.И.О." description={' '}>
                    <Input
                        type='text'
                        radius={0} styles={{ input: { padding: 12, height: 'fit-content', borderColor: "#1B2128" } }}
                        placeholder="Иванов Иван"
                    />
                </Input.Wrapper>

                <Input.Wrapper label="Ф.И.О." description={' '}>
                    <Input
                        type='text'
                        radius={0} styles={{ input: { padding: 12, height: 'fit-content', borderColor: "#1B2128" } }}
                        placeholder="Иванов Иван"
                    />
                </Input.Wrapper>

                <Textarea
                    label="Комментарий"
                    description=" "
                    placeholder="Ваш вопрос..."
                    radius={0} styles={{ input: { padding: 12, height: 'fit-content', borderColor: "#1B2128" } }}
                />

                <Button color='#2A4F78' radius={0} py={18} w={330} h={'fit-content'} onClick={onSubmit}>
                    <Group gap={12} align='center'>
                        <Text size='sm' c={'#F1F1F1'}>Позвоните мне</Text>
                    </Group>
                </Button>
            </Stack>
        </>
    )
}

interface PlacementVariantProps {
    img: string
    title: string
    desc: string
}

const PlacementVariant = ({ img, title, desc }: PlacementVariantProps) => {
    return (
        <Grid.Col span={4}>
            <Stack gap={24}>
                <Group
                    style={{
                        height: 420,
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                />
                <Stack gap={12}>
                    <Title order={4}>{title}</Title>
                    <Text size='xs'>{desc}</Text>
                </Stack>
            </Stack>
        </Grid.Col>
    )
}

interface SportObjectVariantProps {
    img: string
    title: string
    desc: string
}

const SportObjectVariant = ({ img, title, desc }: SportObjectVariantProps) => {
    return (
        <Grid.Col span={4}>
            <Stack gap={24}>
                <Group
                    style={{
                        height: 420,
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                />
                <Stack gap={12}>
                    <Title order={4}>{title}</Title>
                    <Text size='xs' lineClamp={2}>{desc}</Text>
                    <Button
                        radius={0}
                        bg={'#2A4F78'}
                        c={'#F1F1F1'}
                        fw={300}
                        px={32}
                        py={14}
                        w={'fit-content'}
                        h={'fit-content'}
                    >Подробнее</Button>
                </Stack>
            </Stack>
        </Grid.Col>
    )
}

export default function PageSportsCamps(props: SportCampsPageProps) {
    const [opened, { open, close }] = useDisclosure(false)
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                closeButtonProps={{
                    size: 48
                }}
                fullScreen
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                    bg: 'rgba(17, 65, 126, 0.60)'
                }}
                styles={{
                    inner: {
                        right: 0,
                        maxWidth: 780,
                    },
                    header: {
                        background: 'transparent',
                        height: 0,
                        padding: '60px 40px 0 40px'
                    }
                }}
                transitionProps={{
                    transition: 'fade',
                }}
            >
                <Stack px={96} gap={0}>
                    <SportForm />
                </Stack>
            </Modal >

            <Head>
                <title>Спортивная база отдыха «PLAZMA.SPORT»</title>
                <meta name='description' content='К 2023 году мы стали площадкой для 
                спортивных сборов для более чем 100 команд, в том числе для Академии 
                ФК «Локомотив» г.Москва, Академии Баскетбола «Олимпийская деревня-80» г.Москва.' />

                <meta
                    property='og:title'
                    content='Спортивная база отдыха «PLAZMA.SPORT»' />
                <meta
                    property='og:description'
                    content='К 2023 году мы стали площадкой для 
                    спортивных сборов для более чем 100 команд, в том числе для Академии 
                    ФК «Локомотив» г.Москва, Академии Баскетбола «Олимпийская деревня-80» г.Москва.' />
                <meta
                    property='og:image'
                    content='' />

                <meta
                    property='og:type'
                    content='website' />
            </Head>

            <main className='page page-sports-camps'>
                <div className='relative main-wrap' data-scroll-container>
                    <PromoMin
                        // imgUrl={images.backgrounds.imgsportsCampsMinJpg}
                        image='sports-camp'
                        title='СПОРТ В ПАРК-ОТЕЛЕ PLAZMA'
                        description={`Мы любим спорт и поэтому предоставляем нашим единомышленникам 
                        комфортабельные условия для тренировок, питания и проживания.`}
                        button={{
                            text: 'Рассчитать сборы',
                            link: '#calculator',
                            icon: '/svg/calc.svg',
                        }}
                    />


                    {/* <div className='page-events__welcome text-section text-section_big container' data-scroll-section
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                        <span className='h2-title'>«PLAZMA.SPORT»</span>
                        <span className='text'>
                            К 2023 году мы стали площадкой для спортивных сборов для более чем 150 команд,
                            в том числе для Академии ФК «Локомотив» г.Москва, СШОР «ЦСКА» по баскетболу г. Москва,
                            гимнасток из СШОР Пушкинского района г. Санкт-Петербург.
                        </span>
                    </div> */}
                    <Stack px={48} gap={96} align='center'>
                        <Stack gap={48}>
                            <Stack pt={96} gap={24} align='center'>
                                <Stack gap={20} maw={872} align='center'
                                    data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                    <Title order={2}>Спортивные мероприятия</Title>
                                    <Text size={'md'} ta={'center'}>
                                        На базе нашего комплекса круглый год проводятся спортивные мероприятия по различным спортивным дисциплинам
                                    </Text>
                                </Stack>

                                <Stack gap={24} py={48}>
                                    <Stack h={60} pos={'relative'}>
                                        <Text
                                            style={{
                                                transform: 'translateX(-50%)',
                                                whiteSpace: 'nowrap'
                                            }}
                                            pos={'absolute'}
                                            left={'50%'}
                                            bottom={-50}
                                            size={rem(96)}
                                            c={'rgba(41, 79, 120, 0.10)'}
                                            tt={'uppercase'}
                                        >Последние новости</Text>
                                    </Stack>
                                    <Group gap={30} w={'100%'} maw={'100vw'} justify={'start'} pos={'relative'} style={{ zIndex: 10 }} wrap='nowrap'>
                                        {mobile
                                            ?
                                            <Carousel
                                                align="start"
                                                slideSize="100%"
                                                loop
                                                slideGap="md"
                                                slidesToScroll={mobile ? 1 : 2}
                                                h={700}
                                                w='100%'
                                            >
                                                {props.vkposts && props.vkposts?.length > 0 ? props.vkposts.map(p => {
                                                    const img = p?.attachments[0]?.photo.sizes.find(x => x.height > 510 && x.width > 710)
                                                    const date = DateTime.fromSeconds(p?.date ?? 0).toLocaleString(DateTime.DATETIME_MED)
                                                    return (
                                                        <Carousel.Slide
                                                            key={p.hash + '-slide'}
                                                            bg={'red'}
                                                        >
                                                            <Box w='100%'>
                                                                <VKPost
                                                                    link={`https://vk.com/plazma.sport?w=wall-218633598_${p.id}`}
                                                                    views={p.views.count}
                                                                    key={p.hash}
                                                                    id={p.id}
                                                                    date={date}
                                                                    text={p.text}
                                                                    image={img}
                                                                />
                                                            </Box>
                                                        </Carousel.Slide>
                                                    )
                                                }
                                                ) : <></>}
                                            </Carousel>
                                            :
                                            props.vkposts && props.vkposts?.length > 0 ? props.vkposts.map(p => {
                                                const img = p?.attachments[0]?.photo.sizes.find(x => x.height > 510 && x.width > 710)
                                                const date = DateTime.fromSeconds(p?.date ?? 0).toLocaleString(DateTime.DATETIME_MED)
                                                return (
                                                    <VKPost
                                                        link={`https://vk.com/plazma.sport?w=wall-218633598_${p.id}`}
                                                        views={p.views.count}
                                                        key={p.hash}
                                                        id={p.id}
                                                        date={date}
                                                        text={p.text}
                                                        image={img}
                                                    />
                                                )
                                            }
                                            ) : <></>
                                        }
                                    </Group>
                                </Stack>
                            </Stack>

                            <Stack py={68} gap={40} align='center'>
                                <Title order={3}>Оставьте Заявку на Сборы</Title>
                                <Text size='md'>Открыт прием заявок на 2026 год</Text>
                                <Group>
                                    <CalcButton onClick={open} />

                                    <Button color='#2A4F78' radius={0} py={18} w={330} h={'fit-content'}>
                                        <Group gap={12} align='center'>
                                            <Text size='sm' c={'#F1F1F1'}>Презентация Plazma Sport</Text>
                                            <ReactSVG
                                                src='/svg/down-long.svg'
                                            />
                                        </Group>
                                    </Button>
                                </Group>
                            </Stack>
                        </Stack>

                        <Stack py={96}>
                            <Text size={rem(64)} maw={1260} ta={'center'} style={{ lineHeight: '140%' }}
                                data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
                            >
                                Добро пожаловать в Plazma Sport:
                                Здесь Комфорт и Удобства
                            </Text>
                        </Stack>


                        <Stack py={52}>
                            <Image
                                alt=''
                                src={'/img/sports-camps/promo-pres.png'}
                                h={800}
                                w='100%'
                            />
                        </Stack>


                        <Group py={96} px={64}>
                            <Stack maw={880} py={48} pr={64} gap={20}>
                                <Title order={2}>О нас</Title>
                                <Text size='lg'>
                                    К 2024 году мы стали площадкой для спортивных сборов более чем 200 команд, в том
                                    числе для Академии ФК «Локомотив» г.Москва, СШОР по баскетболу «ЦСКА» г. Москва,
                                    гимнасток из СШОР Пушкинского района г. Санкт-Петербург, танцоров из сети PROтанцы,
                                    секции при волейбольном клубе «Динамо» г.Москва, футболистов из школы Спартак Юниор
                                    г.Мурманск и многих других
                                </Text>
                            </Stack>

                            <Group w={720} h={650} bg={'cyan'}>

                            </Group>
                        </Group>

                        <Stack w={'100%'} align='center'>
                            <Stack maw={1040} py={48} pr={64} gap={20} align='center'>
                                <Title order={2}>Спортивная деревня</Title>
                                <Text size='md' ta={'center'}>
                                    Спортивная деревня — это современный комплекс с инфраструктурой, специально созданной для
                                    комфортного проживания, тренировок и отдыха спортсменов.
                                </Text>
                            </Stack>

                            <Stack gap={96}>
                                <SportVillageItem
                                    dir='iltr'
                                    images={['/img/sports-camps/terr_1.png', '/img/sports-camps/terr_2.png']}
                                    title={'Территория'}
                                    desc={`В спортивной деревне предусмотрена изолированная территория, созданная специально для спортсменов.
                                        Это позволяет участникам сборов тренироваться и отдыхать в комфортной и приватной обстановке,
                                        где ничто не отвлекает от процесса подготовки.`}
                                    id={'territory'}
                                    openModal={open}
                                />

                                <SportVillageItem
                                    dir='irtl'
                                    images={['/img/sports-camps/pl_1.png', '/img/sports-camps/pl_2.png']}
                                    title={'Размещение спортсменов'}
                                    desc={`Для размещения спортсменов предусмотрено 8 корпусов. В каждом корпусе имеется 
                                    отдельный номер для тренера и 10 комфортабельных номеров для спортсменов. 
                                    Такое размещение позволяет обеспечить удобство и создать условия для эффективного отдыха и подготовки к тренировкам.`}
                                    id={'placement'}
                                    openModal={open}
                                />

                                <SportVillageItem
                                    dir='iltr'
                                    images={['/img/sports-camps/meal_1.png', '/img/sports-camps/meal_2.png']}
                                    title={'Питание'}
                                    desc={`В парк-отеле «Plazma» для спортсменов создана отдельная столовая, 
                                    доступная только участникам сборов, что обеспечивает спокойную обстановку 
                                    и комфорт во время приема пищи, без посторонних гостей.`}
                                    id={'meal'}
                                    openModal={open}
                                />

                                <SportVillageItem
                                    dir='irtl'
                                    images={['/img/sports-camps/so_1.png', '/img/sports-camps/so_2.png']}
                                    title={'Спортивные объекты'}
                                    desc={`На территории спортивной деревни расположены современные спортивные объекты: просторные шатры для тренировок, 
                                    оборудованная воркаут-площадка и круговая беговая дорожка длиной 450 метров, частично покрытая резиновой крошкой. 
                                    Эти объекты созданы для полноценной подготовки спортсменов в удобной и безопасной среде.`}
                                    id={'sportobj'}
                                    openModal={open}
                                />

                                <SportVillageItem
                                    dir='iltr'
                                    images={['/img/sports-camps/pastime_1.png', '/img/sports-camps/pastime_2.png']}
                                    title={'Досуг'}
                                    desc={`В шатрах для спортсменов организуются показы фильмов, спортивные трансляции и вечерние дискотеки. 
                                    Это помогает участникам сборов расслабиться и провести время с удовольствием после насыщенного тренировочного дня. 
                                    К 2025 году планируется открытие отдельного актового зала, который расширит возможности для досуга и проведения культурных мероприятий.`}
                                    id={'pastime'}
                                    openModal={open}
                                />
                            </Stack>
                        </Stack>

                        <Stack py={96} gap={48} w={'100%'}>
                            <Title order={3}>Дополнительные Варианты Размещения</Title>
                            <Grid gutter={48}>
                                <PlacementVariant
                                    title='Корпус №6'
                                    desc='Вместимость 50 - 57 человек.'
                                    img='/img/sports-camps/corp6.png'
                                />
                                <PlacementVariant
                                    title='Корпус №5'
                                    desc='Вместимость 70 - 72 человек.'
                                    img='/img/sports-camps/corp5.png'
                                />
                                <PlacementVariant
                                    title='Корпус №3'
                                    desc='Вместимость 64 - 66 человек.'
                                    img='/img/sports-camps/corp3.png'
                                />
                            </Grid>
                        </Stack>

                        <Stack py={96} gap={48} w={'100%'}>
                            <Title order={3}>Наши Спортивные Объекты</Title>
                            <Grid gutter={48}>
                                <SportObjectVariant
                                    title='Пляжный центр'
                                    desc='Первый в Тульской области крытый зал для пляжных видов спорта с кварцевым подогреваемым песком.'
                                    img='/img/sports-camps/corp6.png'
                                />
                                <SportObjectVariant
                                    title='Универсальный спортзал'
                                    desc='Размер манежа составляет 25х44 метра, высота — 11 метров. Зал предназначен для мини-футбола, волейбола, баскетбола, танцев, гимнастики, единоборств.'
                                    img='/img/sports-camps/corp5.png'
                                />
                                <SportObjectVariant
                                    title='Универсальные крытые площадки'
                                    desc='Первый в Тульской области крытый зал для пляжных видов спорта с кварцевым подогреваемым песком.'
                                    img='/img/sports-camps/corp3.png'
                                />

                                <SportObjectVariant
                                    title='Уличные площадки'
                                    desc='Размер манежа составляет 25х44 метра, высота — 11 метров. Зал предназначен для мини-футбола, волейбола, баскетбола, танцев, гимнастики, единоборств.'
                                    img='/img/sports-camps/corp5.png'
                                />
                                <SportObjectVariant
                                    title='Уличные тренажеры'
                                    desc='Первый в Тульской области крытый зал для пляжных видов спорта с кварцевым подогреваемым песком.'
                                    img='/img/sports-camps/corp3.png'
                                />

                                <SportObjectVariant
                                    title='Универсальные шатры'
                                    desc='Размер манежа составляет 25х44 метра, высота — 11 метров. Зал предназначен для мини-футбола, волейбола, баскетбола, танцев, гимнастики, единоборств.'
                                    img='/img/sports-camps/corp5.png'
                                />
                            </Grid>
                        </Stack>

                        <Stack w={'100%'} align='center'>
                            <Stack maw={1180} py={48} pr={64} gap={20} align='center'>
                                <Title order={2}>Спортивные сборы</Title>
                                <Text size='md' ta={'center'}>
                                    Повысьте свою спортивную производительность с помощью наших передовых спортивных сооружений, включающих
                                    первоклассный спортзал, теннисные корты и освежающий бассейн.
                                </Text>
                            </Stack>

                            <Grid w={'100%'} style={{ alignSelf: 'baseline' }} gutter={96}>
                                <Grid.Col span={8}>
                                    <Stack gap={48}>
                                        <Paper bg={'url(/img/sports-camps/photos/1.png)'} h={700} w={'100%'} bgsz={'cover'} radius={0} />
                                        <Paper bg={'url(/img/sports-camps/photos/2.png)'} h={700} w={'100%'} bgsz={'cover'} radius={0} />
                                        <Paper bg={'url(/img/sports-camps/photos/3.png)'} h={700} w={'100%'} bgsz={'cover'} radius={0} />
                                        <Paper bg={'url(/img/sports-camps/photos/4.png)'} h={700} w={'100%'} bgsz={'cover'} radius={0} />
                                        <Paper bg={'url(/img/sports-camps/photos/5.png)'} h={700} w={'100%'} bgsz={'cover'} radius={0} />
                                        <Paper bg={'url(/img/sports-camps/photos/6.png)'} h={700} w={'100%'} bgsz={'cover'} radius={0} />
                                    </Stack>
                                </Grid.Col>

                                <Grid.Col span={4} top={10} pos={'sticky'} style={{
                                    // border: '5px solid #f23',
                                    height: 'fit-content'
                                }} >
                                    <Stack gap={0} p={0}>
                                        <SportForm onSubmit={open} />
                                    </Stack>
                                </Grid.Col>
                            </Grid>
                        </Stack>
                    </Stack>


                    <div className='page-sports-camps__calculate container'
                        data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                        <TextBlock title={{ type: 'h2', text: 'Заявка на расчет сборов в «PLAZMA»' }}
                            style={{ paddingBottom: 40, paddingTop: 70 }}
                        />

                        {/* <SportCalculator /> */}
                        {/* <SportRequest /> */}
                    </div>
                </div >
            </main >

        </>

    )
}
