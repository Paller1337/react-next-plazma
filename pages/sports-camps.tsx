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
import { Button, Divider, Grid, Group, Input, Modal, Paper, rem, Stack, Text, Textarea, Title, useMantineTheme, Image, Box, em, BackgroundImage, StyleProp, BackgroundImageProps, InputBase, LoadingOverlay } from '@mantine/core'
import { Calendar, Eye } from 'react-feather'
import { IVKGroupWallPost } from '@/mw/types/VKGroupWallPost'
import { getVkWall } from '@/mw/utils/getVkWall'
import { DateTime } from 'luxon'
import { FaCalculator, FaLink, FaPlus } from "react-icons/fa"
import { ReactSVG } from 'react-svg'
import { useClickOutside, useDebouncedState, useDisclosure, useLocalStorage, useMediaQuery, useScrollIntoView, useTimeout } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useMetrika } from '@/components/ym/YMContext'
import { DatePicker } from '@mantine/dates'
import 'dayjs/locale/ru'
import InputText from '@/components/form/InputText'
import { IMaskInput } from 'react-imask'
import SportsHall from '@/components/sports-camps/SportsHall'
import BeachCenter from '@/components/sports-camps/BeachCenter'
import SportsGrounds from '@/components/sports-camps/SportsGrounds'
import OutdoorGym from '@/components/sports-camps/OutdoorGym'
import Gym from '@/components/sports-camps/Gym'
import UniversalTents from '@/components/sports-camps/UniversalTents'


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
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const queryMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)

    return (
        <Button
            size={mobile ? 'sm' : queryMd ? 'md' : 'md'}
            py={mobile ? 12 : queryMd ? 14 : 18}
            px={mobile ? 24 : queryMd ? 24 : 34}
            variant='outline'
            radius={0}
            // color='#262626'

            bg={'#2A4F78'}
            c={'#F1F1F1'}
            h={'fit-content'}
            w={'fit-content'}
            onClick={onClick}
        >
            <Group gap={12} align='center' wrap='nowrap'>
                <Text size='sm'>Заказать расчет стоимости</Text>
                <FaCalculator />
            </Group>
        </Button>
    )
}

const VKPost = ({ image, text, views, link, date }: IVKPost) => {
    const isMobile = useMediaQuery(`(max-width: ${em(720)})`)

    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const queryMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)

    const fontScaleMin = useMediaQuery(`(max-width: 1340px)`)

    const queryMinLg = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`)
    const queryLg = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`)
    const router = useRouter()
    return (<>
        <Stack h={isMobile ? 420 : 520} miw={queryMinLg ? '30%' : '100%'} flex={queryMinLg ? '1 0 0' : '0 0 0'} maw={queryMinLg ? 510 : '100%'} p={24} justify='space-between'
            style={{
                backgroundColor: '#1B2128',
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 63.92%, 
                rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45.08%, rgba(0, 0, 0, 0.40) 100%), 
                linear-gradient(0deg, var(--Miscellaneous-_Kit-Section-Stroke, rgba(0, 0, 0, 0.30)) 0%, 
                var(--Miscellaneous-_Kit-Section-Stroke, rgba(0, 0, 0, 0.30)) 100%), url(${image.url}) lightgray 50% / cover no-repeat`,
                backgroundSize: 'cover'
            }}
            onClick={() => router.push(link, '_blank')}
        >
            {/* <span style={{ color: 'white' }}>{'queryMd: ' + queryMd}</span><br />
            <span style={{ color: 'white' }}>{'queryMinLg: ' + queryMinLg}</span><br />
            <span style={{ color: 'white' }}>{'queryLg: ' + queryLg}</span> */}
            <Group justify='space-between'>
                <Text size='xxs' tt={'uppercase'} c={'white'} opacity={.5} style={{ letterSpacing: .5 }}>VK.COM/plazma.sport</Text>
                <FaLink color='white' />
            </Group>
            <Stack gap={12} maw={'100%'}>
                <Group>
                    <Group gap={mobile ? 8 : queryMd || fontScaleMin ? 12 : 24}>
                        <Group gap={mobile ? 4 : queryMd || fontScaleMin ? 4 : 8}>
                            <Text size={mobile ? 'xs' : queryMd || fontScaleMin ? 'xs' : 'sm'} c={'white'}>{views}</Text>
                            <Eye color='white' size={mobile ? 14 : queryMd || fontScaleMin ? 14 : 24} />
                        </Group>
                        <Group gap={mobile ? 4 : queryMd || fontScaleMin ? 4 : 8}>
                            <Text size={mobile ? 'xs' : queryMd || fontScaleMin ? 'xs' : 'sm'} c={'white'}>{date}</Text>
                            <Calendar color='white' size={mobile ? 14 : queryMd || fontScaleMin ? 14 : 24} />
                        </Group>
                    </Group>
                </Group>
                <Divider opacity={.5} />
                <Text size={mobile ? 'xs' : queryMd || fontScaleMin ? 'xs' : 'sm'} c='white' lineClamp={2} w={'100%'}>{text}</Text>
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
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const queryMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    const queryLg = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`)
    const isMinImg = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`)

    if (mobile) {
        return (
            <Paper bg={'#EBF2F4'} radius={0} p={8}>
                <Grid gutter={{ base: 48, xs: 24, md: 48 }}
                    data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
                    style={{ overflow: 'hidden' }}
                >
                    <Grid.Col span={{ base: 12, lg: 6, xl: 4 }}>
                        <Stack px={{ base: 12, lg: 48 }} py={{ base: 12 }} gap={12} h={'100%'} align='center'>
                            <Title
                                order={3}
                                style={{ letterSpacing: -1.5 }}
                                size={mobile ? 'h4' : queryMd ? 'h4' : 'h3'}
                                ta={'center'}
                            >
                                {title}
                            </Title>
                            <Text
                                // size={mobile ? 'sm' : queryMd ? 'md' : 'lg'}
                                size={mobile ? 'xs' : queryMd ? 'md' : 'lg'}
                                ta={'center'}
                            >
                                {desc}
                            </Text>
                            <CalcButton onClick={openModal} />
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ lg: 6, xl: 8, md: 12 }}>
                        <Grid gutter={48}>
                            {isMinImg ?
                                <Grid.Col span={{ base: 12, lg: 4 }} p={mobile && 0}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <BackgroundImage
                                        h={mobile ? rem(320) : queryMd ? rem(520) : rem(700)}
                                        miw={mobile ? rem(120) : rem(380)}
                                        src={`${images[0]}`}
                                        bgsz={'cover'}
                                        bgr={'no-repeat'}
                                        bgp={'center'}
                                    />
                                </Grid.Col>
                                : <> </>}

                            <Grid.Col span={{ base: 12, lg: 8 }} p={mobile && 0}
                                style={{ overflow: 'hidden' }}
                            >
                                {/* <Group
                                style={{
                                    height: mobile ? rem(320) : queryMd ? rem(520) : rem(700),
                                    minWidth: mobile ? rem(120) : rem(380),
                                    // width: '100%',
                                    backgroundImage: `url(${images[1]})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}
                            /> */}
                                <BackgroundImage
                                    h={mobile ? rem(320) : queryMd ? rem(520) : rem(700)}
                                    miw={mobile ? rem(120) : rem(380)}
                                    src={images[1]}
                                    bgsz={'cover'}
                                    bgr={'no-repeat'}
                                    bgp={'center'}
                                />
                            </Grid.Col>
                        </Grid>
                    </Grid.Col >
                </Grid >
            </Paper>
        )
    } else {
        return (
            <Grid gutter={{ base: 48, xs: 24, md: 48 }}
                data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
                style={{ overflow: 'hidden' }}
            >
                {dir === 'irtl' || queryLg ?
                    <Grid.Col span={{ base: 12, lg: 6, xl: 4 }}>
                        <Stack px={{ base: 0, lg: 48 }} gap={20} h={'100%'} justify='center'>
                            <Title
                                order={3}
                                style={{ letterSpacing: -1.5 }}
                                size={mobile ? 'h5' : queryMd ? 'h4' : 'h3'}
                            >{title}</Title>
                            <Text
                                // size={mobile ? 'sm' : queryMd ? 'md' : 'lg'}
                                size={mobile ? 'xs' : queryMd ? 'md' : 'lg'}
                            >
                                {desc}
                            </Text>
                            <CalcButton onClick={openModal} />
                        </Stack>
                    </Grid.Col> : <></>}

                <Grid.Col span={{ lg: 6, xl: 8, md: 12 }}>
                    <Grid gutter={48}>
                        {isMinImg ?
                            <Grid.Col span={{ base: 12, lg: 4 }} p={mobile && 0}
                                style={{ overflow: 'hidden' }}
                            >
                                <BackgroundImage
                                    h={mobile ? rem(320) : queryMd ? rem(520) : rem(700)}
                                    miw={mobile ? rem(120) : rem(380)}
                                    src={`${images[0]}`}
                                    bgsz={'cover'}
                                    bgr={'no-repeat'}
                                    bgp={'center'}
                                />
                            </Grid.Col>
                            : <> </>}

                        <Grid.Col span={{ base: 12, lg: 8 }} p={mobile && 0}
                            style={{ overflow: 'hidden' }}
                        >
                            {/* <Group
                                style={{
                                    height: mobile ? rem(320) : queryMd ? rem(520) : rem(700),
                                    minWidth: mobile ? rem(120) : rem(380),
                                    // width: '100%',
                                    backgroundImage: `url(${images[1]})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}
                            /> */}
                            <BackgroundImage
                                h={mobile ? rem(320) : queryMd ? rem(520) : rem(700)}
                                miw={mobile ? rem(120) : rem(380)}
                                src={images[1]}
                                bgsz={'cover'}
                                bgr={'no-repeat'}
                                bgp={'center'}
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col >

                {dir === 'iltr' && !queryLg ?
                    <Grid.Col span={{ lg: 6, xl: 4, md: 12 }}>
                        <Stack px={48} gap={20} h={'100%'} justify='center'>
                            <Title
                                order={3}
                                size={mobile ? 'h5' : queryMd ? 'h4' : 'h3'}
                                style={{ letterSpacing: -1.5 }}
                            >
                                {title}
                            </Title>
                            <Text
                                // size='md'
                                size={mobile ? 'xs' : queryMd ? 'md' : 'lg'}
                            >
                                {desc}
                            </Text>
                            <CalcButton onClick={openModal} />
                        </Stack>
                    </Grid.Col> : <></>}
            </Grid >
        )
    }
}

const FormPhotos = () => {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const queryMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    const height = { base: 240, xs: 540, md: 340, lg: 700 }
    const styles = {
        w: '100%',
        bgsz: 'cover',
        radius: 0,
        h: height,
        src: ''
    } as BackgroundImageProps
    return (
        <Stack gap={mobile ? 24 : 48} pt={mobile ? 96 : 0} pb={mobile ? 48 : 96}>
            <BackgroundImage {...styles}
                src='/img/sports-camps/photos/1.png'
            />

            <BackgroundImage  {...styles}
                src='/img/sports-camps/photos/2.png'
            />

            <BackgroundImage  {...styles}
                src='/img/sports-camps/photos/3.png'
            />

            <BackgroundImage {...styles}
                src='/img/sports-camps/photos/4.png'
            />

            <BackgroundImage {...styles}
                src='/img/sports-camps/photos/5.png'
            />
        </Stack>
    )
}
interface SportFormProps {
    ymTag: string
}

interface ISportFormState {
    sport: string
    dateIn: string
    dateOut: string
    team: {
        name: string
        size: string
    },
    name: string
    phone: string
    comment: string
}
const SportForm = ({ ymTag }: SportFormProps) => {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const queryMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)

    const ym = useMetrika()
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(['utm']);

    const [error, setError] = useState(false)
    const [utm, setUtm] = useState('')

    const [phone, setPhone] = useState('')
    const [phoneValue, setPhoneValue] = useState('+7')
    const [formState, setFormState] = useState<ISportFormState>(null)
    const [formStateValidate, setFormStateValidate] = useState({
        sport: false,
        dateIn: false,
        dateOut: false,
        team: false,
        name: false,
        phone: false,
        comment: false
    })
    const [isLoading, setIsLoading] = useState(false)

    const [isBlur, setIsBlur] = useState(false)

    const [storageValue, setStorageValue, removeStorageValue] = useLocalStorage<ISportFormState>({
        key: 'sport-calc',
        defaultValue: null,
    })

    const [datePickerInValue, setDatePickerInValue] = useState<Date>(null)
    const [datePickerOutValue, setDatePickerOutValue] = useState<Date>(null)

    const [datePickerInVisible, setDatePickerInVisible] = useState(false)
    const [datePickerOutVisible, setDatePickerOutVisible] = useState(false)

    const dateInRef = useClickOutside(() => setDatePickerInVisible(false))
    const dateOutRef = useClickOutside(() => setDatePickerOutVisible(false))

    const pageQuery = router.query

    useEffect(() => {
        const utmCookie = cookies.utm

        if (pageQuery) {
            if (utmCookie) {
                console.log('utm-cookie: ', utmCookie)
                setUtm(utmCookie)
            }
            if (pageQuery.utm_campaign) {
                setUtm(pageQuery.utm_campaign.toString())
                setCookie('utm', `${pageQuery.utm_campaign.toString()}-[${DateTime.now().toLocaleString()}-${DateTime.now().hour}.${DateTime.now().minute}]`)
            }
        }
        console.log('utm: ', utm)
    }, [pageQuery]);

    useEffect(() => {
        // console.log({ storageValue })
        if ((storageValue && !formState)) {
            setFormState(storageValue)
            if (storageValue?.phone) setPhoneValue(storageValue?.phone)
            if (storageValue?.dateIn) setDatePickerInValue(DateTime.fromFormat(storageValue?.dateIn, 'yyyy-MM-dd').toJSDate())
            if (storageValue?.dateOut) setDatePickerOutValue(DateTime.fromFormat(storageValue?.dateOut, 'yyyy-MM-dd').toJSDate())
        }
    }, [storageValue, formState, setFormState])

    // useEffect(() => console.log({ datePickerInValue }), [datePickerInValue])
    // useEffect(() => console.log({ datePickerOutValue }), [datePickerOutValue])

    useEffect(() => {
        if (formState) {
            setStorageValue(formState)
        }
    }, [formState])

    useEffect(() => {
        setFormState(p => ({ ...p, phone: phone }))
    }, [phone])
    // useEffect(() => {
    //     console.log('Стоимость: ', result)
    // }, [result])

    const metrikaSubmit = () => {
        ym.reachGoal(`sportsCampSubmit`)

        console.log({ ymTag })
        ym.reachGoal(`sportsCamp-${ymTag}`)
        // toast('metrika send')
    }

    const handleSubmit = () => {
        if (!formState?.name) setFormStateValidate(p => ({ ...p, name: true }))
        if (!formState?.phone) setFormStateValidate(p => ({ ...p, phone: true }))
        if (!formState?.dateIn) setFormStateValidate(p => ({ ...p, dateIn: true }))
        if (!formState?.dateOut) setFormStateValidate(p => ({ ...p, dateOut: true }))

        if (!formState?.name || !formState?.phone || !formState?.dateIn || !formState?.dateOut) {
            toast.error('Заполните необходимые поля', {
                duration: 3000,
                style: {
                    fontSize: 15,
                    borderRadius: 0,
                    border: '1px solid #393939',
                    padding: '12px 18px'
                }
            });
            setError(true)
            return
        }

        if (formState?.phone && formState?.phone.length !== 12) {
            setFormStateValidate(p => ({ ...p, phone: true }))
            toast.error('Неверный номер телефона', {
                duration: 3000,
                style: {
                    fontSize: 15,
                    borderRadius: 0,
                    border: '1px solid #393939',
                    padding: '12px 18px'
                }
            });
            setError(true)
            return
        }

        const data = {
            data: formState,
            utm,
            ymTag
        }

        setIsLoading(true)
        fetch('/api/sport-feedback', {
            method: 'post',
            body: JSON.stringify(data),
        })
            .then(async res => {
                if (res.status === 200) {
                    const data = await res.json()
                    toast.success(data.status, {
                        duration: 3000,
                        style: {
                            fontSize: 15,
                            borderRadius: 0,
                            border: '1px solid #393939',
                            padding: '12px 18px'
                        }
                    })
                    metrikaSubmit()

                    removeStorageValue()
                    setFormState(p => ({
                        comment: '',
                        dateIn: '',
                        dateOut: '',
                        name: '',
                        phone: '',
                        sport: '',
                        team: {
                            name: '',
                            size: ''
                        }
                    }))
                    setPhoneValue(null)
                    setDatePickerInValue(null)
                    setDatePickerOutValue(null)

                    setIsBlur(true)
                } else {
                    const data = await res.json()
                    toast.error(data.status, {
                        duration: 3000,
                        style: {
                            fontSize: 15,
                            borderRadius: 0,
                            border: '1px solid #393939',
                            padding: '12px 18px'
                        }
                    });
                }
                setIsLoading(false)
            })
            .then(res => {
            })
    }


    // useEffect(() => {
    //     console.log('form: ', formState)
    // }, [formState])

    const formatNumber = (n: string) => {
        if (!n) return ""
        n = n.replace(/[\(\)\-\ ]/g, "")

        if (n.startsWith("+7")) {
            if (n[2] === '8') {
                return "+7" + n.slice(3)
            }
            return n
        }

        if (n[0] === '8') {
            n = "+7" + n.slice(1);
            if (n[2] === '8') {
                return "+7" + n.slice(3)
            }
            return n
        }

        return n
    }

    const inputStyle = (isError?) => ({
        paddingLeft: mobile ? 8 : 12,
        paddingRight: mobile ? 8 : 12,
        paddingTop: mobile ? 8 : 10,
        paddingBottom: mobile ? 8 : 10,
        height: 'fit-content',
        borderColor: isError ? "#F23" : "#1B2128"
    })

    return (
        <>
            <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />

            <Stack gap={0} p={0} maw={560} pos={'relative'}>
                <Stack
                    pos={'absolute'} top={0} left={0} right={0} bottom={0}
                    style={{ background: 'rgba(253, 253, 253, .7)', zIndex: 1000, visibility: isBlur ? 'visible' : 'hidden' }}
                    justify='center'
                    align='center'
                >
                    <Stack gap={24} bg={'rgb(255 255 255)'} px={24} py={24} align='center'
                        style={{ border: '1px solid #262626', boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.35)' }}
                    >
                        <Title
                            order={4}
                            size={mobile ? 'h5' : queryMd ? 'h5' : 'h4'}
                            ta={'center'}
                        >
                            Заявка отправлена
                        </Title>
                        <Text
                            size={mobile ? 'xs' : queryMd ? 'sm' : 'sm'}
                            ta={'center'}
                        >
                            С вами свяжется наш менеджер в ближайшее время
                        </Text>

                        <Button color='#2A4F78' radius={0} py={mobile ? 12 : 18} w={330} h={'fit-content'} onClick={() => setIsBlur(false)}>
                            <Group gap={12} align='center'>
                                <Text size='sm' c={'#F1F1F1'}>Хорошо</Text>
                            </Group>
                        </Button>
                    </Stack>
                </Stack>


                <Stack pb={48} top={10} gap={0}>
                    <Title
                        order={3}
                        size={mobile ? 'h4' : queryMd ? 'h4' : 'h3'}
                        ta={'center'}
                    >
                        Заявка на сборы
                    </Title>
                    <Stack gap={0} p={0} pos={'relative'} style={{ zIndex: 1 }}>
                        <Text
                            size={mobile ? 'xs' : queryMd ? 'sm' : 'sm'}
                            ta={'center'}
                        >
                            Заполните форму, отправьте заявку и наш менеджер свяжется с вами,
                            уточнит все детали и ответит на любые вопросы.
                        </Text>
                        <Paper bg={'#DCF0FF'} style={{ top: 20, right: 0, bottom: -5, left: 75, zIndex: -1 }} pos={'absolute'} />
                    </Stack>
                </Stack>

                <Stack gap={12}>
                    <Input.Wrapper
                        size='xs'
                        label="Спортивная дисциплина"
                        description={' '}
                    >
                        <Input
                            size='xs'
                            radius={0} styles={{ input: inputStyle() }}
                            placeholder="Например: Волейбол"
                            value={formState?.sport}
                            onChange={(event) => setFormState(p => ({ ...p, sport: event.target.value }))}
                        />
                    </Input.Wrapper>

                    <Group align='center'>
                        <Stack pos={'relative'} flex={'1 0 0'}>
                            {/* <InputText
                            label='Заезд' placeholder=''
                            onClick={e => e.preventDefault()}
                            value={DateTime.fromJSDate(datePickerInValue).toFormat('yyyy-MM-dd')}
                            onSelect={() => setDatePickerInVisible(true)}
                            type='date'
                            readOnly
                        /> */}
                            <Input.Wrapper
                                size='xs'
                                label="Заезд"
                                description={' '}
                                withAsterisk
                            >
                                <Input
                                    size='xs'
                                    radius={0} styles={{ input: inputStyle(formStateValidate?.dateIn) }}
                                    readOnly
                                    value={DateTime.fromJSDate(datePickerInValue).toFormat('yyyy-MM-dd')}
                                    onSelect={() => setDatePickerInVisible(true)}
                                    type='date'
                                    error={formStateValidate?.dateIn}
                                />
                            </Input.Wrapper>

                            <div ref={dateInRef} className={`sport-calculator__datepicker ${datePickerInVisible ? 'visible' : ''}`}>
                                <DatePicker
                                    locale="ru" size='sm' numberOfColumns={1}
                                    onChange={(e) => {
                                        setDatePickerInVisible(false)
                                        setDatePickerInValue(e)
                                        setFormStateValidate(p => ({ ...p, dateIn: false }))
                                        setFormState(p => ({ ...p, dateIn: DateTime.fromJSDate(e).toFormat('yyyy-MM-dd') }))
                                    }}
                                    minDate={DateTime.now().toJSDate()}
                                    onBlur={() => setDatePickerOutVisible(false)}
                                />
                            </div>
                        </Stack>
                        <div className='sport-calculator__date-separator'>-</div>
                        <Stack ref={dateOutRef} pos={'relative'} flex={'1 0 0'}>
                            {/* <InputText
                            label='Выезд' placeholder=''
                            onClick={e => e.preventDefault()}
                            value={DateTime.fromJSDate(datePickerOutValue).toFormat('yyyy-MM-dd')}
                            onSelect={() => setDatePickerOutVisible(true)}
                            type='date'
                            readOnly
                        /> */}
                            <Input.Wrapper
                                size='xs'
                                label="Выезд"
                                description={' '}
                                withAsterisk
                            >
                                {/* TODO Даты обязательны */}
                                <Input
                                    onClick={e => e.preventDefault()}
                                    value={DateTime.fromJSDate(datePickerOutValue).toFormat('yyyy-MM-dd')}
                                    onSelect={() => setDatePickerOutVisible(true)}
                                    type='date'
                                    size='xs'
                                    radius={0} styles={{ input: inputStyle(formStateValidate?.dateOut) }}
                                    readOnly
                                    error={formStateValidate?.dateOut}
                                />
                            </Input.Wrapper>
                            <div className={`sport-calculator__datepicker right ${datePickerOutVisible ? 'visible' : ''}`}>
                                <DatePicker
                                    locale="ru" size='sm' numberOfColumns={1}
                                    onChange={(e) => {
                                        setDatePickerOutVisible(false)
                                        setDatePickerOutValue(e)
                                        setFormStateValidate(p => ({ ...p, dateOut: false }))
                                        setFormState(p => ({ ...p, dateOut: DateTime.fromJSDate(e).toFormat('yyyy-MM-dd') }))
                                    }}
                                    minDate={datePickerInValue}
                                    onBlur={() => setDatePickerOutVisible(false)}
                                />
                            </div>
                        </Stack>
                    </Group>

                    <Input.Wrapper
                        size='xs'
                        label="Название команды"
                        description={' '}
                    >
                        <Input
                            size='xs'
                            radius={0} styles={{ input: inputStyle() }}
                            placeholder="Например: Чемпионы"
                            value={formState?.team?.name}
                            onChange={(event) => setFormState(p => ({ ...p, team: { ...p.team, name: event.target.value } }))}
                        />
                    </Input.Wrapper>

                    <Input.Wrapper
                        size='xs'
                        label="Количество человек"
                        description={' '}
                    >
                        <Input
                            size='xs'
                            type='number'
                            radius={0} styles={{ input: inputStyle() }}
                            placeholder="50"
                            value={formState?.team?.size}
                            onChange={(event) => setFormState(p => ({ ...p, team: { ...p.team, size: event.target.value } }))}
                        />
                    </Input.Wrapper>

                    {/* <Textarea
                    size='xs'
                    label="Площадка для тренировок"
                    description=" "
                    placeholder="Опишите необходимое вам помещение, покрытие, площадь."
                    radius={0} styles={{ input: { padding: 12, height: 'fit-content', borderColor: "#1B2128" } }}
                /> */}

                    <Input.Wrapper
                        size='xs'
                        label="Ф.И.О." description={' '}
                        withAsterisk
                    >
                        <Input
                            size='xs'
                            type='text'
                            radius={0} styles={{ input: inputStyle(formStateValidate?.name) }}
                            placeholder="Иванов Иван"
                            value={formState?.name}
                            onChange={(event) => {
                                setFormStateValidate(p => ({ ...p, name: false }))
                                setFormState(p => ({ ...p, name: event.target.value }))
                            }}
                            error={formStateValidate?.name}
                        />
                    </Input.Wrapper>

                    <InputBase
                        label='Телефон'
                        withAsterisk
                        component={IMaskInput}
                        mask="+7 (000) 000-00-00"
                        placeholder="Ваш номер"
                        size='xs'
                        radius={0} styles={{ input: inputStyle(formStateValidate?.phone) }}
                        value={phoneValue}
                        onInput={e => {
                            // @ts-ignore
                            let value = e.target.value
                            // console.log('value[4] ', value[4])
                            if (value[4] == '8') {
                                setPhoneValue('+7')
                            } else {
                                setPhoneValue(value)
                            }

                            // @ts-ignore
                            setPhone(formatNumber(e.target.value.toString()))
                            setFormStateValidate(p => ({ ...p, phone: false }))
                        }}
                        defaultValue={'+7'}
                        error={formStateValidate?.phone}
                    />

                    <Textarea
                        size='xs'
                        label="Комментарий"
                        description=" "
                        placeholder="Ваш вопрос..."
                        value={formState?.comment}
                        radius={0} styles={{ input: inputStyle() }}
                        onChange={(event) => setFormState(p => ({ ...p, comment: event.target.value }))}
                    />

                    <Button color='#2A4F78' radius={0} py={mobile ? 12 : 18} w={330} h={'fit-content'} onClick={handleSubmit}>
                        <Group gap={12} align='center'>
                            <Text size='sm' c={'#F1F1F1'}>Позвоните мне</Text>
                        </Group>
                    </Button>
                </Stack>
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
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const queryMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    return (
        <Grid.Col span={{ base: 12, lg: 4, xs: 6, }}
            data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
        >
            <Paper bg={'#EBF2F4'} radius={0} p={8}>
                <Stack gap={0}>
                    <Group
                        style={{
                            height: mobile ? 240 : queryMd ? 320 : 420,
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Stack
                        gap={mobile ? 4 : queryMd ? 8 : 12}
                        py={mobile ? 8 : queryMd ? 12 : 24}
                        px={mobile ? 4 : queryMd ? 8 : 12}
                    >
                        <Title
                            order={4}
                            size={mobile ? 'h5' : queryMd ? 'h4' : 'h4'}
                            lineClamp={1}
                        >
                            {title}
                        </Title>
                        <Text
                            size='xs'
                        >
                            {desc}
                        </Text>
                    </Stack>
                </Stack>
            </Paper>
        </Grid.Col>
    )
}

interface SportObjectVariantProps {
    img: string
    title: string
    desc: string
    content?: React.ReactNode
}

const SportObjectVariant = ({ img, title, desc, content }: SportObjectVariantProps) => {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const queryMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    const [opened, { open, close }] = useDisclosure(false)

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                closeButtonProps={{
                    size: 48
                }}
                size="auto"
                miw={'80%'}
                fullScreen={queryMd}
                radius={0}
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                    bg: 'rgba(17, 65, 126, 0.60)'
                }}
                styles={{
                    // inner: {
                    //     maxWidth: 780,
                    // },
                    body: {
                        padding: 0
                    },
                    header: {
                        background: '#EBF2F4',
                        padding: mobile ? '20px' : '40px',
                    },
                    title: {
                        fontSize: mobile ? 24 : 32,
                        fontWeight: 500
                    },
                    content: {
                        background: '#FAFCFF'
                    }
                }}
                transitionProps={{
                    transition: 'fade',
                    duration: 200
                }}
                title={title}
            >
                <Stack miw={'80%'} p={mobile ? 20 : 40} gap={0} maw={1090}>
                    {content}
                </Stack>
            </Modal >

            <Grid.Col span={{ base: 12, lg: 4, xs: 6, }}
                data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
            >
                <Paper bg={'#EBF2F4'} radius={0} p={8}>
                    <Stack gap={0}>
                        <Group
                            style={{
                                height: mobile ? 240 : queryMd ? 320 : 420,
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Stack
                            gap={mobile ? 4 : queryMd ? 8 : 12}
                            py={mobile ? 8 : queryMd ? 12 : 24}
                            px={mobile ? 4 : queryMd ? 8 : 12}
                        >
                            <Title
                                order={4}
                                size={mobile ? 'h5' : queryMd ? 'h4' : 'h4'}
                                lineClamp={1}
                            >{title}</Title>
                            <Text size='xs' lineClamp={2}>{desc}</Text>
                            {content
                                ?
                                <Button
                                    radius={0}
                                    bg={'#2A4F78'}
                                    c={'#F1F1F1'}
                                    fw={300}
                                    px={32}
                                    py={14}
                                    mt={mobile ? 8 : queryMd ? 8 : 0}
                                    w={'fit-content'}
                                    h={'fit-content'}
                                    onClick={open}
                                >
                                    Подробнее
                                </Button>
                                : <></>
                            }
                        </Stack>
                    </Stack>
                </Paper>
            </Grid.Col>
        </>
    )
}

export default function PageSportsCamps(props: SportCampsPageProps) {
    const [opened, { open, close }] = useDisclosure(false)
    const theme = useMantineTheme()
    const queryXs = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const queryMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    const queryLg = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`)
    const queryXl = useMediaQuery(`(max-width: ${theme.breakpoints.xl})`)

    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
        onScrollFinish: () => openCalcModal('welcome')
    })
    const { scrollIntoView: scrollToPres, targetRef: targetPres } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    })


    const [currentYmTag, setCurrentYmTag] = useState('')

    const openCalcModal = (tag) => {
        setCurrentYmTag(tag)
        open()
    }

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
                    },
                    content: {
                        background: '#FAFCFF'
                    }
                }}
                transitionProps={{
                    transition: 'fade',
                }}
            >
                <Stack px={mobile ? 12 : 96} pb={24} gap={0}>
                    <SportForm ymTag={currentYmTag} />
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
                            icon: '/svg/calc.svg',
                            onclick: () => {
                                scrollIntoView()
                            }
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
                    <Stack px={mobile ? rem(12) : queryMd ? rem(24) : rem(48)} gap={mobile ? rem(24) : queryMd ? rem(48) : rem(96)} align='center'>
                        <Stack gap={48} w={'100%'}>
                            <Stack pt={96} gap={24} align='center' w={'100%'}>
                                <Stack gap={20} maw={872} align='center'
                                    data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                                    <Title
                                        order={2}
                                        ta={'center'}
                                        size={mobile ? 'h4' : queryMd ? 'h3' : 'h2'}
                                    >Спортивные мероприятия</Title>
                                    <Text size={queryMd ? 'sm' : 'md'} ta={'center'}>
                                        На базе нашего комплекса круглый год проводятся спортивные мероприятия по различным спортивным дисциплинам
                                    </Text>
                                </Stack>

                                <Stack gap={0} py={48} w={'100%'}>
                                    <Stack h={50} pos={'relative'} mb={queryMd ? '-.5em' : '-1em'}>
                                        <Text
                                            style={{
                                                transform: 'translateX(-50%)',
                                                whiteSpace: 'nowrap'
                                            }}
                                            pos={'absolute'}
                                            left={'50%'}
                                            bottom={0}
                                            size={queryXl ? rem('7vw') : rem(96)}
                                            c={'rgba(41, 79, 120, 0.10)'}
                                            tt={'uppercase'}
                                        >Последние события</Text>
                                    </Stack>
                                    <Group
                                        gap={30} w={'100%'} maw={'100vw'}
                                        justify={'center'}
                                        pos={'relative'} p={24} pt={0} style={{ zIndex: 10 }}
                                        wrap='nowrap'
                                    >
                                        {queryLg
                                            ?
                                            <Carousel
                                                align="start"
                                                slideSize={queryLg && !queryMd ? '50%' : '100%'}
                                                loop
                                                slideGap="md"
                                                slidesToScroll={queryLg && !queryMd ? 2 : 1}
                                                h={mobile ? 420 : 520}
                                                w='100%'
                                            >
                                                {props.vkposts && props.vkposts?.length > 0 ? props.vkposts.map(p => {
                                                    const img = p?.attachments[0]?.photo.sizes.find(x => x.height > 510 && x.width > 710)
                                                    const date = DateTime.fromSeconds(p?.date ?? 0).toLocaleString(DateTime.DATETIME_MED)
                                                    return (
                                                        <Carousel.Slide
                                                            key={p.hash + '-slide'}
                                                        // bg={'red'}
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

                            <Stack
                                py={mobile ? rem(16) : queryMd ? rem(32) : rem(68)}
                                gap={mobile ? rem(24) : queryMd ? rem(32) : rem(40)}
                                align='center'
                            >
                                <Title
                                    order={3}
                                    size={mobile ? 'h4' : queryMd ? 'h4' : 'h3'}
                                    ta={'center'}
                                >
                                    Оставьте Заявку на Сборы
                                </Title>
                                <Text
                                    size={mobile ? 'sm' : queryMd ? 'sm' : 'md'}
                                >
                                    Открыт прием заявок на 2025 год
                                </Text>
                                <Group justify='center'>
                                    <CalcButton onClick={() => openCalcModal('startPres')} />
                                    <Button
                                        variant='outline'
                                        c='#262626'
                                        style={{ borderColor: '#262626' }}
                                        radius={0}
                                        size={mobile ? 'sm' : queryMd ? 'md' : 'md'}
                                        py={mobile ? 12 : queryMd ? 14 : 18}
                                        // px={mobile ? 24 : queryMd ? 24 : 34}
                                        w={330}
                                        h={'fit-content'}
                                        onClick={() => scrollToPres()}
                                    >
                                        <Group gap={12} align='center'>
                                            <Text size='sm'>
                                                Презентация Plazma Sport
                                            </Text>
                                            <ReactSVG
                                                src='/svg/down-long-d.svg'
                                            />
                                        </Group>
                                    </Button>
                                </Group>
                            </Stack>
                        </Stack>

                        <Stack ref={targetRef} py={mobile ? rem(48) : queryMd ? rem(48) : rem(96)}>
                            <Text size={mobile ? rem(24) : queryMd ? rem(40) : rem(64)} maw={1260} ta={'center'} style={{ lineHeight: '140%' }}
                                data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
                            >
                                Добро пожаловать в Plazma Sport:
                                Здесь Комфорт и Удобства
                            </Text>
                        </Stack>


                        <Stack
                            py={mobile ? rem(32) : queryMd ? rem(40) : rem(52)}
                            h={mobile ? rem(400) : queryMd ? rem(600) : rem(800)}
                            w={'100%'}
                        >
                            {/* <Image
                                alt=''
                                src={'/img/sports-camps/promo-pres.png'}
                                h={'100%'}
                                w='100%'
                                fit={'cover'}
                            /> */}

                            <BackgroundImage
                                src={'/img/sports-camps/promo-pres.png'}
                                radius={0}
                            >
                                <Stack h={mobile ? rem(400) : queryMd ? rem(600) : rem(800)}></Stack>
                            </BackgroundImage>
                        </Stack>


                        <Group
                            py={mobile ? rem(24) : queryMd ? rem(48) : rem(96)}
                            px={mobile ? rem(24) : queryMd ? rem(32) : rem(64)}
                        >
                            <Grid align='center'>
                                <Grid.Col span={{ lg: 7, md: 12 }}>
                                    <Stack
                                        py={mobile ? rem(12) : queryMd ? rem(32) : rem(48)}
                                        pr={mobile ? rem(12) : queryMd ? rem(32) : rem(64)}
                                        pl={mobile ? rem(0) : queryMd ? rem(0) : rem(0)}
                                        pt={mobile ? rem(48) : queryMd ? rem(0) : rem(0)}
                                        gap={mobile ? rem(12) : queryMd ? rem(16) : rem(20)}
                                        ref={targetPres}
                                    >
                                        <Title
                                            order={2}
                                            size={mobile ? 'h4' : queryMd ? 'h3' : 'h2'}
                                        >О нас</Title>
                                        <Text
                                            size={mobile ? 'xs' : queryMd ? 'md' : 'lg'}
                                            lh={'140%'}
                                        >
                                            К 2024 году мы стали площадкой для спортивных сборов более чем 200 команд, в том
                                            числе для Академии ФК «Локомотив» г.Москва, СШОР по баскетболу «ЦСКА» г. Москва,
                                            гимнасток из СШОР Пушкинского района г. Санкт-Петербург, танцоров из сети PROтанцы,
                                            секции при волейбольном клубе «Динамо» г.Москва, футболистов из школы Спартак Юниор
                                            г.Мурманск и многих других
                                        </Text>
                                    </Stack>
                                </Grid.Col>

                                <Grid.Col span={{ lg: 5, md: 12 }}>
                                    {/* <Group
                                        w={'100%'}
                                        h={mobile ? rem(320) : queryMd ? rem(420) : rem(650)}
                                        bg={'cyan'}
                                    >
                                    </Group> */}
                                    <BackgroundImage
                                        bgsz='cover'
                                        radius={0}
                                        src='/img/sports-camps/about_us.png'
                                        w={'100%'}
                                        h={mobile ? rem(320) : queryMd ? rem(420) : rem(650)}
                                    />
                                </Grid.Col>
                            </Grid>

                        </Group>

                        <Stack w={'100%'} align='center'>
                            <Stack maw={1040} py={48} pr={mobile ? 0 : queryMd ? rem(0) : rem(0)} gap={20} align='center'>
                                <Title
                                    order={2}
                                    size={mobile ? 'h4' : queryMd ? 'h3' : 'h2'}
                                    ta={'center'}
                                >
                                    Спортивная деревня
                                </Title>
                                <Text
                                    size={mobile ? 'xs' : queryMd ? 'md' : 'lg'}
                                    ta={'center'}
                                >
                                    Спортивная деревня — это современный комплекс с инфраструктурой, специально созданной для
                                    комфортного проживания, тренировок и отдыха спортсменов.
                                </Text>
                            </Stack>

                            <Stack gap={mobile ? 32 : 96}>
                                <SportVillageItem
                                    dir='iltr'
                                    images={['/img/sports-camps/terr_1.png', '/img/sports-camps/terr_2.png']}
                                    title={'Территория'}
                                    desc={`В спортивной деревне предусмотрена изолированная территория, созданная специально для спортсменов.
                                        Это позволяет участникам сборов тренироваться и отдыхать в комфортной и приватной обстановке,
                                        где ничто не отвлекает от процесса подготовки.`}
                                    id={'territory'}
                                    openModal={() => openCalcModal('territory')}
                                />

                                <SportVillageItem
                                    dir='irtl'
                                    images={['/img/sports-camps/pl_1.png', '/img/sports-camps/pl_2.png']}
                                    title={'Размещение спортсменов'}
                                    desc={`Для размещения спортсменов предусмотрено 8 корпусов. В каждом корпусе имеется 
                                    отдельный номер для тренера и 10 комфортабельных номеров для спортсменов. 
                                    Такое размещение позволяет обеспечить удобство и создать условия для эффективного отдыха и подготовки к тренировкам.`}
                                    id={'placement'}
                                    openModal={() => openCalcModal('placement')}
                                />

                                <SportVillageItem
                                    dir='iltr'
                                    images={['/img/sports-camps/meal_1.png', '/img/sports-camps/meal_2.png']}
                                    title={'Питание'}
                                    desc={`В парк-отеле «Plazma» для спортсменов создана отдельная столовая, 
                                    доступная только участникам сборов, что обеспечивает спокойную обстановку 
                                    и комфорт во время приема пищи, без посторонних гостей.`}
                                    id={'meal'}
                                    openModal={() => openCalcModal('meal')}
                                />

                                <SportVillageItem
                                    dir='irtl'
                                    images={['/img/sports-camps/so_1.png', '/img/sports-camps/so_2.png']}
                                    title={'Спортивные объекты'}
                                    desc={`На территории спортивной деревни расположены современные спортивные объекты: просторные шатры для тренировок, 
                                    оборудованная воркаут-площадка и круговая беговая дорожка длиной 450 метров, частично покрытая резиновой крошкой. 
                                    Эти объекты созданы для полноценной подготовки спортсменов в удобной и безопасной среде.`}
                                    id={'sportobj'}
                                    openModal={() => openCalcModal('sportobj')}
                                />

                                <SportVillageItem
                                    dir='iltr'
                                    images={['/img/sports-camps/pastime_1.png', '/img/sports-camps/pastime_2.png']}
                                    title={'Досуг'}
                                    desc={`В шатрах для спортсменов организуются показы фильмов, спортивные трансляции и вечерние дискотеки. 
                                    Это помогает участникам сборов расслабиться и провести время с удовольствием после насыщенного тренировочного дня. 
                                    К 2025 году планируется открытие отдельного актового зала, который расширит возможности для досуга и проведения культурных мероприятий.`}
                                    id={'pastime'}
                                    openModal={() => openCalcModal('pastime')}
                                />
                            </Stack>
                        </Stack>

                        <Stack py={mobile ? rem(24) : queryMd ? rem(48) : rem(96)} gap={mobile ? 12 : 24} w={'100%'}>
                            <Title order={3}
                                size={mobile ? 'h4' : queryMd ? 'h4' : 'h3'}
                                data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
                            >Дополнительные Варианты Размещения</Title>
                            <Grid gutter={24} grow>
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

                        <Stack py={mobile ? rem(24) : queryMd ? rem(48) : rem(96)} gap={mobile ? 12 : 24} w={'100%'}>
                            <Title order={3}
                                size={mobile ? 'h4' : queryMd ? 'h4' : 'h3'}
                                data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
                            >Наши Спортивные Объекты</Title>
                            <Grid gutter={24}>
                                <SportObjectVariant
                                    title='Универсальный спортивный зал'
                                    desc='Многофункциональное пространство, созданное для проведения тренировок, соревнований и спортивных мероприятий.'
                                    img='/img/sports-camps/sports-hall.png'
                                    content={<SportsHall />}
                                />
                                <SportObjectVariant
                                    title='Пляжный центр'
                                    desc='Первый в Тульской области крытый манеж для тренировок по пляжным видам спорта.'
                                    img='/img/sports-camps/beach-center.png'
                                    content={<BeachCenter />}
                                />
                                {/* <SportObjectVariant
                                    title='Универсальные крытые площадки'
                                    desc='Универсальные крытые площадки позволяют спортсменам тренироваться круглый год, независимо от погодных условий.'
                                    img='/img/sports-camps/corp3.png'
                                /> */}

                                <SportObjectVariant
                                    title='Уличные площадки'
                                    desc='Универсальные уличные площадки обеспечивают комфортные условия для тренировок на свежем воздухе.'
                                    img='/img/sports-camps/sports-grounds.png'
                                    content={<SportsGrounds />}
                                />
                                <SportObjectVariant
                                    title='Уличные тренажеры'
                                    desc='Уличная воркаут-площадка предоставляет отличные условия для силовых тренировок на открытом воздухе.'
                                    img='/img/sports-camps/outdoor-gym.png'
                                    content={<OutdoorGym />}
                                />

                                <SportObjectVariant
                                    title='Универсальные шатры'
                                    desc='Универсальные шатры в спортивной деревне подходят для проведения тренировок и досуговых мероприятий.'
                                    img='/img/sports-camps/universal-tents.png'
                                    content={<UniversalTents />}
                                />

                                <SportObjectVariant
                                    title='Тренажерный зал'
                                    desc='Тренажерный зал оборудован для комплексных силовых и кардиотренировок.'
                                    img='/img/sports-camps/gym.png'
                                    content={<Gym />}
                                />
                            </Grid>
                        </Stack>

                        <Stack w={'100%'} align='center'
                            data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
                        >
                            <Stack maw={1180} py={48} pr={{ base: 0, sm: 64 }} gap={20} align={'center'}>
                                <Title
                                    order={2}
                                    size={mobile ? 'h4' : queryMd ? 'h3' : 'h2'}
                                    ta={'center'}
                                >Спортивные сборы</Title>
                                <Text
                                    size={mobile ? 'xs' : queryMd ? 'sm' : 'md'}
                                    ta={'center'}
                                >
                                    Повысьте свою спортивную производительность с помощью наших передовых спортивных сооружений, включающих
                                    первоклассный спортзал, теннисные корты и освежающий бассейн.
                                </Text>
                            </Stack>

                            <Grid style={{ alignSelf: 'baseline' }} gutter={{ base: 0, md: 24, lg: 96 }} w={'100%'}>
                                {!queryMd ?
                                    <Grid.Col span={{ base: 12, md: 6 }} style={{ overflow: 'hidden' }}>
                                        <FormPhotos />
                                    </Grid.Col>
                                    : <></>}

                                <Grid.Col
                                    span={{ base: 12, md: 6 }}
                                    top={10}
                                    pos={!queryMd ? 'sticky' : 'relative'}
                                    pb={mobile ? 24 : 196}
                                    style={{ height: 'fit-content' }}
                                >
                                    <Stack gap={0} p={0} w={'100%'} align='center'>
                                        <SportForm ymTag='endPage' />
                                    </Stack>
                                </Grid.Col>

                                {queryMd ?
                                    <Grid.Col span={{ base: 12, md: 6 }} style={{ overflow: 'hidden' }}>
                                        <FormPhotos />
                                    </Grid.Col>
                                    : <></>}
                            </Grid>
                        </Stack>
                    </Stack>



                </div >
            </main >

        </>

    )
}
