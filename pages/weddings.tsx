import Head from 'next/head'
import Link from 'next/link'
import vkCloudLoader from '@/mw/utils/imageLoader'
import TextBlock from '@/components/TextBlock'
import { Box, Button, Divider, Group, Stack, Text, Title, Image, Grid, Modal, Textarea, InputBase, Input, useMantineTheme, LoadingOverlay, Paper } from '@mantine/core'
import { MdPhone } from "react-icons/md"
import { Carousel } from '@mantine/carousel'
import { useClickOutside, useDisclosure, useInViewport, useLocalStorage, useMediaQuery } from '@mantine/hooks'
import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io"
import { DEFAULTS } from 'defaults'
import { IMaskInput } from 'react-imask'
import { DatePicker } from '@mantine/dates'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { DateTime } from 'luxon'
import ym from 'react-yandex-metrika'
import toast from 'react-hot-toast'
import 'dayjs/locale/ru'
import { clear } from 'console'
import axios from 'axios'


const colors = {
    main: '#2F2525',
    subtitle: '#6E6767',
    dividerSub: '#D5D3D3'
}

interface WeddingFormProps {
    ymTag: string
    close: () => void
}

interface IWeddingFormState {
    // sport: string
    dateIn: string
    // dateOut: string
    // team: {
    //     name: string
    //     size: string
    // },
    name: string
    phone: string
    // comment: string
}
const SportForm = ({ ymTag, close }: WeddingFormProps) => {
    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const queryMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)

    // const ym = useMetrika()
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(['utm']);

    const [error, setError] = useState(false)
    const [utm, setUtm] = useState('')

    const [phone, setPhone] = useState('')
    const [phoneValue, setPhoneValue] = useState('+7')
    const [formState, setFormState] = useState<IWeddingFormState>(null)
    const [formStateValidate, setFormStateValidate] = useState({
        // sport: false,
        dateIn: false,
        // team: false,
        name: false,
        phone: false,
        // comment: false
    })
    const [isLoading, setIsLoading] = useState(false)

    const [isBlur, setIsBlur] = useState(false)

    const [storageValue, setStorageValue, removeStorageValue] = useLocalStorage<IWeddingFormState>({
        key: 'wedding-form',
        defaultValue: null,
    })

    const [datePickerInValue, setDatePickerInValue] = useState<Date>(null)

    const [datePickerInVisible, setDatePickerInVisible] = useState(false)
    const [datePickerOutVisible, setDatePickerOutVisible] = useState(false)

    const dateInRef = useClickOutside(() => setDatePickerInVisible(false))

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
        }
    }, [storageValue, formState, setFormState])


    useEffect(() => {
        if (formState) {
            setStorageValue(formState)
        }
    }, [formState])

    useEffect(() => {
        setFormState(p => ({ ...p, phone: phone }))
    }, [phone])

    const metrikaSubmit = () => {
        ym('reachGoal', `weddingSubmit`)

        console.log({ ymTag })
        ym('reachGoal', `wedding-${ymTag}`)
        // ym.reachGoal(`sportsCamp-${ymTag}`)
        // toast('metrika send')
    }

    const handleSubmit = () => {
        if (!formState?.name) setFormStateValidate(p => ({ ...p, name: true }))
        if (!formState?.phone) setFormStateValidate(p => ({ ...p, phone: true }))
        if (!formState?.dateIn) setFormStateValidate(p => ({ ...p, dateIn: true }))

        if (!formState?.name || !formState?.phone || !formState?.dateIn) {
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
        fetch('/api/wedding-feedback', {
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
                        dateIn: '',
                        name: '',
                        phone: '',
                    }))
                    setPhoneValue(null)
                    setDatePickerInValue(null)

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

                        <Button color='rgba(222, 55, 83)' radius={0} py={mobile ? 12 : 18} w={330} h={'fit-content'} onClick={() => {
                            setIsBlur(false)
                            close()
                        }}>
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
                        Обсудим детали
                    </Title>
                    <Stack gap={0} p={0} pos={'relative'} style={{ zIndex: 1 }}>
                        <Text
                            size={mobile ? 'xs' : queryMd ? 'sm' : 'sm'}
                            ta={'center'}
                        >
                            Заполните форму, отправьте заявку и наш менеджер свяжется с вами,
                            уточнит все детали и ответит на любые вопросы.
                        </Text>
                        <Paper bg={'rgba(222, 55, 83, 0.2)'} style={{ top: 20, right: 0, bottom: -5, left: 75, zIndex: -1 }} pos={'absolute'} />
                    </Stack>
                </Stack>

                <Stack gap={12}>
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

                    <Group align='center'>
                        <Stack pos={'relative'} flex={'1 0 0'}>
                            <Input.Wrapper
                                size='xs'
                                label="Дата свадьбы"
                                description={' '}
                                withAsterisk
                                onFocus={e => e.preventDefault()}
                                onClick={e => e.preventDefault()}
                            >
                                <Input
                                    size='xs'
                                    onClick={e => e.preventDefault()}
                                    radius={0} styles={{ input: inputStyle(formStateValidate?.dateIn) }}
                                    readOnly
                                    onFocus={e => e.preventDefault()}
                                    value={datePickerInValue ? DateTime.fromJSDate(datePickerInValue).toFormat('dd-MM-yyyy') : ''}
                                    placeholder={DateTime.fromJSDate(new Date()).plus({ day: 10 }).toFormat('dd-MM-yyyy')}
                                    onSelect={() => setDatePickerInVisible(true)}
                                    type='text'
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

                        {/* <Input.Wrapper
                            size='xs'
                            label="Количество человек"
                            description={' '}
                            flex={'1 0 0'}
                        >
                            <Input
                                size='xs'
                                type='number'
                                radius={0} styles={{ input: inputStyle() }}
                                placeholder="50"
                                value={formState?.team?.size}
                                onChange={(event) => setFormState(p => ({ ...p, team: { ...p.team, size: event.target.value } }))}
                            />
                        </Input.Wrapper> */}
                    </Group>


                    {/* <Textarea
                    size='xs'
                    label="Площадка для тренировок"
                    description=" "
                    placeholder="Опишите необходимое вам помещение, покрытие, площадь."
                    radius={0} styles={{ input: { padding: 12, height: 'fit-content', borderColor: "#1B2128" } }}
                /> */}

                    {/* <Textarea
                        size='xs'
                        label="Комментарий"
                        description=" "
                        placeholder="Ваш вопрос..."
                        value={formState?.comment}
                        radius={0} styles={{ input: inputStyle() }}
                        onChange={(event) => setFormState(p => ({ ...p, comment: event.target.value }))}
                    /> */}

                    <Stack w={'100%'} pt={24}>
                        <Button color='rgb(222, 55, 83)' radius={0} py={mobile ? 12 : 18} w={mobile ? '100%' : 330} h={'fit-content'} onClick={handleSubmit}>
                            <Group gap={12} align='center'>
                                <Text size='sm' c={'#F1F1F1'}>Позвоните мне</Text>
                            </Group>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

interface WeddingItemProps {
    title?: React.ReactNode
    subtitle?: string
    description: React.ReactNode[]
    images: string[]
    handleImageModal: (img) => void
}
const WeddingItem = ({ title, subtitle, description, images, handleImageModal }: WeddingItemProps) => {
    const isMobile = useMediaQuery('(max-width: 620px)')
    const isLaptop = useMediaQuery('(max-width: 1024px)')
    const isLaptopB = useMediaQuery('(max-width: 1999px)')
    const isNotebook = useMediaQuery('(max-width: 1324px)')

    const gridWidth = images && images?.length > 0 ? 12 / images.length : 6

    return (<>

        <Stack py={isMobile || isLaptop ? 32 : 58} gap={isMobile ? 32 : 64}>
            <Grid gutter={{ base: isMobile ? 32 : 48 }}
                // data-scroll-section data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}
                style={{ overflow: 'hidden' }}
            >
                <Grid.Col span={{ base: 12, md: 12, lg: 8 }}>
                    <Stack gap={isMobile ? 16 : 32} maw={940}>
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

const FeedbackButton = ({ fw, onClick }) => {
    const isMobile = useMediaQuery('(max-width: 620px)')
    const openPhone = () => {
        // window.open('tel:+79202756312')
        onClick()
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
    const [opened, { open, close }] = useDisclosure(false)
    const { ref: refDedails, inViewport: inViewportDetails } = useInViewport()
    const { ref: refWelcome, inViewport: inViewportWelcome } = useInViewport()

    const [scrollButtonVisibleBlocked, setScrollButtonVisibleBlocked] = useState(true)
    const [scrollButtonVisible, setScrollButtonVisible] = useState(false)

    const [currentYmTag, setCurrentYmTag] = useState('')
    const [gallery, setGallery] = useState([] as string[])
    const openCalcModal = (tag) => {
        setCurrentYmTag(tag)
        open()
    }


    const [modalImage, setModalImage] = React.useState<string>('')

    const [openedImage, { open: openImage, close: closeImage }] = useDisclosure(false)

    const handleImageModal = (img) => {
        setModalImage(img)
        openImage()
    }

    useEffect(() => {
        if ((inViewportDetails || inViewportWelcome || opened) && !scrollButtonVisibleBlocked) setScrollButtonVisible(false)
        else if (!scrollButtonVisibleBlocked) setScrollButtonVisible(true)

    }, [inViewportDetails, inViewportWelcome, opened, scrollButtonVisibleBlocked])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setScrollButtonVisibleBlocked(false)
        }, 1500)

        return () => clearTimeout(timeout)
    }, [])

    useEffect(() => {
        const fetchGallery = async () => {
            const data = await axios.get('/data/files-weddings.json')
            setGallery(data.data)
            console.log(data.data)
        }
        fetchGallery()
    }, [])

    return (
        <>
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

                centered opened={openedImage}
                onClose={closeImage}
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
                    bg: 'rgba(63, 16, 24, 0.6)'
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
                <Stack px={isMobile ? 12 : 96} pb={24} gap={0}>
                    <SportForm ymTag={currentYmTag} close={close} />
                </Stack>
            </Modal>



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
                            ref={refWelcome}
                        >
                            <Stack pt={96} gap={8} align={isMobile ? 'center' : 'flex-start'}>
                                <Title ff={'Georgia'} fz={isMobile ? 32 : 40} fw={400} tt={'uppercase'} c={'white'} ta={isMobile ? 'center' : 'left'}>свадьба, <SNW>о которой</SNW> вы мечтаете</Title>
                                <Text ff={'Georgia'} fz={isMobile ? 16 : 18} fw={300} c={'white'} lh={'115%'} ta={isMobile ? 'center' : 'left'}>
                                    Мы знаем, как важно, чтобы день прошёл идеально, <br />
                                    и с радостью поможем в организации.
                                </Text>
                                <Stack pt={24} w={'100%'}>
                                    <FeedbackButton fw={false} onClick={() => openCalcModal('pageWelcome')} />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack key={'content'} gap={isMobile ? 48 : isLaptop ? 64 : 96} px={isMobile ? 12 : 32} pos={'relative'}>
                        <Stack pos={'fixed'} bottom={40} left={0} right={0}
                            style={{
                                zIndex: 1000,
                                opacity: scrollButtonVisible ? 1 : 0,
                                transition: 'opacity .32s ease'
                            }}
                            px={24} align='center'
                        >
                            <Stack maw={400} w='100%'>
                                <FeedbackButton fw={true} onClick={() => openCalcModal('pageScroll')} />
                            </Stack>
                        </Stack>


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
                            handleImageModal={handleImageModal}
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
                            handleImageModal={handleImageModal}
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
                            handleImageModal={handleImageModal}
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
                            handleImageModal={handleImageModal}
                        />

                        <Divider color={colors.main} />

                        <WeddingItem
                            title={<>Техническое оснащение</>}
                            subtitle={'Сделайте праздник ещё ярче'}
                            description={[
                                `Всё необходимое оборудование уже на месте, так что вам не нужно арендовать или привозить технику отдельно. 
                                Мы поможем с настройкой, чтобы ваш праздник прошёл без накладок.`,
                                <><b>Светомузыка:</b> создаёт правильную атмосферу, подчёркивая главный танец и важные моменты.</>,
                                <><b>Проектор:</b> покажите трогательные фотоистории вашей пары или удивите гостей оригинальной презентацией.</>,
                            ]}
                            images={[
                                `${DEFAULTS.URL.CDN}/img/weddings/5-1.webp`,
                                `${DEFAULTS.URL.CDN}/img/weddings/5-2.webp`
                            ]}
                            handleImageModal={handleImageModal}
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
                                                правила <SNW>и условия</SNW> площадки
                                            </Title>
                                        </Stack>
                                        <Stack gap={isMobile ? 16 : 24} pt={10} maw={820}>
                                            <Stack gap={8} >
                                                <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                    <b>Минимальный заказ:</b> 3 500 руб./чел., кухня – от 175 000 руб.
                                                </Text>
                                                <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                    <b>Аренда зала: от 40 000 руб.</b> (в зависимости от дня недели)
                                                </Text>
                                                <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                    <b>Обслуживание:</b> 10% от суммы заказа
                                                </Text>
                                                <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                    <b>Дополнительное оформление зала:</b> 10 000 руб. (стойки и президиум)
                                                </Text>
                                            </Stack>

                                            <Divider color={colors.dividerSub} />

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

                        <Group w={'100%'} py={isMobile || isLaptop ? 0 : 58} mb={120} ref={refDedails}>
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
                                                    <span style={{ fontWeight: 700 }}>Телефон:</span> +7(920)275-63-12
                                                </Text>
                                                <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                    <span style={{ fontWeight: 700 }}>Email:</span> anna@kplazma.ru
                                                </Text>
                                                <Text ff={'Lora'} fz={isMobile ? 16 : 18} c={colors.main} lh={'125%'}>
                                                    <span style={{ fontWeight: 700 }}>Адрес:</span> <SNW>г. Донской,</SNW> <SNW>ул. Герцена,</SNW> <SNW>дом 14,</SNW> <SNW>Парк-отель «Plazma»</SNW>
                                                </Text>
                                            </Stack>
                                            <FeedbackButton fw={isMobile || (isNotebook && !isLaptop) || isDesktop} onClick={() => openCalcModal('pageEnd')} />
                                        </Stack>
                                    </Stack>
                                </Grid.Col>

                                <Grid.Col span={{ base: 12, md: 12, lg: 8 }}>
                                    <Image src={`${DEFAULTS.URL.CDN}/img/weddings/7.webp`} width={'100%'} height={isMobile ? 420 : isNotebook ? 600 : 810} alt={'alt'} pt={isMobile ? 0 : 12} />
                                </Grid.Col>
                            </Grid>
                        </Group>

                        <Stack gap={24}>
                            <Title ff={'Georgia'} fz={isMobile ? 30 : isNotebook ? 50 : 64} fw={600} tt={'uppercase'} c={colors.main} lh={'115%'}>
                                Галерея
                            </Title>
                            <Grid
                                gutter={{ base: isMobile ? 12 : 48 }} w={'100%'}
                                style={{ overflow: 'hidden' }}
                                pb={48}
                            >
                                {gallery.map(img => (
                                    <Grid.Col span={{ base: 6, md: 4, lg: 4 }} key={img} onClick={() => handleImageModal(img)}>
                                        <Image src={`${img}`} width={'100%'} height={isMobile ? 180 : 420} alt={'alt'} pt={isMobile ? 0 : 12} />
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </Stack>
                    </Stack>
                </Stack>
            </main>
        </>

    )
}
