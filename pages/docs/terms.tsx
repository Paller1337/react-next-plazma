import Head from 'next/head'
import TextBlock from '@/components/TextBlock'
import { List, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { DEFAULTS } from 'defaults'

const documentParagraphs = [
    'Правила проживания и пожарная безопасность',
    'Расчетный час во всем мире считается полдень – 12 часов дня. Это значит, что гостиничные сутки считаются с 14:00 (16:00) до 12:00',
    '*Возможен ранний заезд с 7:00( при наличии свободного и готового номера) оплачивается дополнительно 50% от стоимости номера. ',
    '*Возможен поздний выезд до 17:00 при предварительном согласовании с администратором и оплачивается дополнительно 50% от стоимости номера.',
    '*В некоторых номерах возможно использовать дополнительное спальное место',
    'Стоимость 1500р/сутки с человека ( с 12 лет), 1000р/сутки с человека ( с 5 до 11 лет). Дети от 0 до 5 лет без дополнительного спального места могут размещаться бесплатно. Дети с 5 до 12 лет при размещении без дополнительного спального места – 500р/сутки с человека',
    '(детская кроватка по запросу).',
    '*На время проживания в отеле берется залоговая сумма в размере от 2000 руб. до 10000 руб., на случай порчи имущества.',
    '*Заявки на бронирование от гостей, путешествующих в составе, подлежат приоритетной обработке.',
    'Просим Вас соблюдать правила пожарной безопасности:',
    'В номере СТРОГО ЗАПРЕЩАЕТСЯ пользоваться электронагревательными приборами не предусмотренными комплектацией номера (мультиварки, электроплиты, грили, кофейники, утюги, кипятильники и т.д.)',
    'ШТРАФ 5000 руб. с изъятием прибора до выезда из отеля.',
    'Уходя из номера, не забывайте выключить телевизор, кондиционер, лампы освещения.Напоминаем Вам, что опасно накрывать включенные торшеры и настольные лампы предметами из горючего материала.',
    'Гость в целях личной безопасности и обеспечения сохранности имущества при выходе из номера обязан:',
    'закрыть окна;',
    'выключить электроосветительные приборы;',
    'закрыть водопроводные краны;',
    'выключить электробытовые приборы;',
    'закрыть на ключ входную дверь в номер.',
    'Гостю, проживающему в Гостинице запрещается:',
    'оставлять в номере посторонних лиц в свое отсутствие;',
    'передавать ключи от номера посторонним лицам;',
    'приносить в номер и хранить громоздкие вещи, легковоспламеняющиеся материалы, а также оружие без соответствующего разрешения;',
    'пользоваться в номере нагревательными приборами, не входящими в комплектацию номера; в случае необходимости зарядки аккумуляторов во время отсутствия Гостя в номере, следует обратиться к администратору, который поставит на зарядку аккумулятор (мобильного телефона, видеокамеры и т.п.)',
    ' открывать окна при работающем кондиционере;',
    'употребление алкоголя вне специально отведенных зон. ',
    'Совершать действия, нарушающие тишину и покой других граждан, проживающих в отеле, в ночное время с 23 часов до 8 часов.',
    'При причинении гостинице материального ущерба по вине или халатности Гостя в обязательном порядке должен быть составлен акт установленного образца, и гость возмещает ущерб по прейскуранту. В данном случае кроме, возмещение ущерба Гость должен добровольно или в судебном порядке возместить гостинице потери, связанные с простоем номера во время ремонта, замены мебели и т.п. случаев (например, при заливе водой). Размер возмещаемых убытков за порчу имущества, не вошедшего в прейскурант, устанавливается администратором. ',
    'При выезде из гостиницы Гость обязан: ',
    'сдать номер горничной в целости и сохранности;',
    'сдать в службу приема и размещения ключ-карту.',
    'При утере/порче ключа-карты взимается штраф – 500 руб. за штуку соответственно',
    'Книга отзывов и предложений находится в службе приема и размещения клиентов и выдается по первому требованию Гостя (кроме лиц, находящихся в нетрезвом состоянии).',
    'В номерах, холлах, лестничных пролетах гостиницы, ресторане, на территории запрещается курить, кроме специально отведенных мест, обозначенных соответствующими знаками и оборудованными: урнами с пепельницами, освещением, средствами пожарной безопасности.',
    'За курение в помещениях гостиницы взимается плата в размере 3000 руб. с последующим выселением, без возврата оплаченных средств. ',
    'С уважением, Администрация Парк-отеля «Plazma»',
    ' ',
]

const introParagraphs = documentParagraphs.slice(1, 2)
const starredRules = documentParagraphs.slice(2, 9)
const fireSafetyIntro = documentParagraphs.slice(10, 13)
const guestMustList = documentParagraphs.slice(14, 19)
const forbiddenList = documentParagraphs.slice(20, 27)
const damageParagraphs = documentParagraphs.slice(27, 28)
const checkoutList = documentParagraphs.slice(29, 31)
const finalParagraphs = documentParagraphs.slice(31, 37)

export default function TermsPage() {
    const isMobile = useMediaQuery('(max-width: 620px)')
    const titleSize = isMobile ? 18 : 20
    const textSize = isMobile ? 15 : 16
    const starredTextSize = isMobile ? 15 : 16

    return (
        <>
            <Head>
                <title>Внутренний регламент | Парк-отель «ПЛАЗМА»</title>
                <meta
                    name='description'
                    content='Правила проживания и пожарная безопасность в парк-отеле «ПЛАЗМА».'
                />
                <meta
                    property='og:title'
                    content='Внутренний регламент | Парк-отель «ПЛАЗМА»'
                />
                <meta
                    property='og:description'
                    content='Правила проживания и пожарная безопасность в парк-отеле «ПЛАЗМА».'
                />
                <meta property='og:type' content='website' />
            </Head>

            <main className='page page-booking'>
                <div className='relative main-wrap' data-scroll-container>
                    <div
                        className='page-saunas__attention container'
                        data-scroll-section
                        data-aos={DEFAULTS.AOS.animation}
                        data-aos-duration={DEFAULTS.AOS.duration}
                        data-aos-once={DEFAULTS.AOS.once}
                        style={{ paddingTop: 180, paddingBottom: 100}}
                    >
                        <TextBlock
                            title={{ type: 'h1', text: documentParagraphs[0] }}
                            style={{ paddingTop: 0, paddingBottom: 0 }}
                        />

                        <Stack gap={20} maw={840}>
                            <Stack gap={4}>
                                {introParagraphs.map((paragraph) => (
                                    <Text key={paragraph} fz={textSize} fw={400}>
                                        {paragraph}
                                    </Text>
                                ))}
                            </Stack>

                            <Stack gap={4}>
                                <Stack
                                    gap={10}
                                    px={isMobile ? 14 : 18}
                                    py={isMobile ? 14 : 18}
                                    maw={780}
                                    style={{
                                        borderLeft: '3px solid #b59b7a',
                                        background: '#f8f4ef',
                                    }}
                                >
                                    {starredRules.map((paragraph) => (
                                        <div
                                            key={paragraph}
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: '14px 1fr',
                                                gap: 10,
                                                alignItems: 'start',
                                            }}
                                        >
                                            <Text fz={starredTextSize} fw={700} lh={'150%'}>
                                                *
                                            </Text>
                                            <Text fz={starredTextSize} fw={400} lh={'160%'}>
                                                {paragraph.slice(1)}
                                            </Text>
                                        </div>
                                    ))}
                                </Stack>
                            </Stack>

                            <Stack gap={4}>
                                <Text fz={titleSize} fw={700}>{documentParagraphs[9]}</Text>
                                <Stack gap={4}>
                                    {fireSafetyIntro.map((paragraph) => (
                                        <Text key={paragraph} fz={textSize} fw={400}>
                                            {paragraph}
                                        </Text>
                                    ))}
                                </Stack>
                            </Stack>

                            <Stack gap={4}>
                                <Text fz={titleSize} fw={700}>{documentParagraphs[13]}</Text>
                                <List
                                    spacing={4}
                                    size='sm'
                                    styles={{
                                        item: { paddingBlock: 0 },
                                        itemLabel: { fontSize: textSize, fontWeight: 400 },
                                    }}
                                >
                                    {guestMustList.map((item) => (
                                        <List.Item key={item}>{item}</List.Item>
                                    ))}
                                </List>
                            </Stack>

                            <Stack gap={4}>
                                <Text fz={titleSize} fw={700}>{documentParagraphs[19]}</Text>
                                <List
                                    spacing={4}
                                    size='sm'
                                    styles={{
                                        item: { paddingBlock: 0 },
                                        itemLabel: { fontSize: textSize, fontWeight: 400 },
                                    }}
                                >
                                    {forbiddenList.map((item) => (
                                        <List.Item key={item}>{item}</List.Item>
                                    ))}
                                </List>
                            </Stack>

                            <Stack gap={4}>
                                {damageParagraphs.map((paragraph) => (
                                    <Text key={paragraph} fz={textSize} fw={400}>
                                        {paragraph}
                                    </Text>
                                ))}
                            </Stack>

                            <Stack gap={4}>
                                <Text fz={titleSize} fw={700}>{documentParagraphs[28]}</Text>
                                <List
                                    spacing={4}
                                    size='sm'
                                    styles={{
                                        item: { paddingBlock: 0 },
                                        itemLabel: { fontSize: textSize, fontWeight: 400 },
                                    }}
                                >
                                    {checkoutList.map((item) => (
                                        <List.Item key={item}>{item}</List.Item>
                                    ))}
                                </List>
                            </Stack>

                            <Stack gap={4}>
                                {finalParagraphs.map((paragraph) => (
                                    <Text key={paragraph} fz={textSize} fw={400}>
                                        {paragraph}
                                    </Text>
                                ))}
                            </Stack>
                        </Stack>
                    </div>

                    <div className='base-bg' data-scroll-section></div>
                </div>
            </main>
        </>
    )
}
