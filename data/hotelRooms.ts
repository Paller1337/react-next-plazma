import { RoomObjectProps } from '../components/objects/RoomObject';
const defaultAmenities = [
    'Кондиционер',
    'Холодильник',
    'Чайник',
    'Индивидуальный санузел',
    'Душ',
    'Телевизор',
    'Фен',
    'Полотенце',
    'Мыльные пренадлежности',
]

const checkInHouse = ['Заезд:', ' <b>16:00</b>;', ' Выезд:', ' <b>12:00</b>']
const checkInRoom = ['Заезд:', ' <b>14:00</b>;', ' Выезд:', ' <b>12:00</b>']
// import { images } from 'imageImports'

const saleTitle = '<span style="color: red; white-space: nowrap;">с 3 сентября снижение цены:</span>'
const nextSeason = '<span style="color: green; white-space: nowrap;">Цены с 1 сентября:</span>'
const newYear = '<span style="color: red; white-space: nowrap;">С 31 по 1 возможно бронирование минимум на 2 дня:</span>'

export const hotelRooms: RoomObjectProps[] = [
    {
        tlid: 245515,
        bnid: 367933,
        title: 'Дача',
        description: 'Расположенный в дачном дворике дом с панорамными окнами, в котором есть мини-кухня с посудой, две односпальные кровати, раскладывающийся диван и санузел.',
        pets: true,
        alert: true,
        images: [
            '/img/hotel/room-previews/dacha/1.webp',
            '/img/hotel/room-previews/dacha/2.webp',
            '/img/hotel/room-previews/dacha/3.webp',
            '/img/hotel/room-previews/dacha/4.webp',
            '/img/hotel/room-previews/dacha/5.webp',
            '/img/hotel/room-previews/dacha/6.webp',
            '/img/hotel/room-previews/dacha/7.webp',
        ],
        previews: [
            '/img-previews/hotel/room-previews/dacha/1.webp',
            '/img-previews/hotel/room-previews/dacha/2.webp',
            '/img-previews/hotel/room-previews/dacha/3.webp',
            '/img-previews/hotel/room-previews/dacha/4.webp',
            '/img-previews/hotel/room-previews/dacha/5.webp',
            '/img-previews/hotel/room-previews/dacha/6.webp',
            '/img-previews/hotel/room-previews/dacha/7.webp',
        ],
        size: 'Размер номера 28 м².', // Добавить площадь терассы 9 кв.м.
        count: 8,
        price: [
            // { name: 'Цена вс-чт', value: ['<b>6200 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<span class="op">7880</span><b>6200 руб/сутки</b>',] },
            // { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>8900 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>10600 руб/сутки</b>',] },
            
            { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>7500 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>8900 руб/сутки</b>',] },
        ],

        attributes: [
            { name: 'Вместимость', value: ['2 + 1 человек.'] },
            { name: 'Заселение', value: checkInHouse },
        ],
        amenities: [
            ...defaultAmenities,
            'Мангальная зона',
            'Микроволновая печь',
            'Набор посуды',
            'Халаты и сланцы',
            'Сейф',
        ]
    },

    {
        tlid: 244144,
        bnid: 320518,
        title: 'Домик на набережной',
        description: 'Уютный домик на набережной, включающий в себя мини-кухню, душевую, спальную и зал с панорамными окнами.',
        pets: true,
        alert: true,
        images: [
            '/img/hotel/room-previews/module-house/1.webp',
            '/img/hotel/room-previews/module-house/2.webp',
            '/img/hotel/room-previews/module-house/3.webp',
            '/img/hotel/room-previews/module-house/4.webp',
            '/img/hotel/room-previews/module-house/5.webp',
            '/img/hotel/room-previews/module-house/6.webp',
            '/img/hotel/room-previews/module-house/7.webp',
            '/img/hotel/room-previews/module-house/8.webp',
            '/img/hotel/room-previews/module-house/9.webp',
            '/img/hotel/room-previews/module-house/10.webp',
            '/img/hotel/room-previews/module-house/11.webp',
            '/img/hotel/room-previews/module-house/12.webp',
            '/img/hotel/room-previews/module-house/13.webp',
            '/img/hotel/room-previews/module-house/14.webp',
            '/img/hotel/room-previews/module-house/15.webp',
        ],
        previews: [
            '/img-previews/hotel/room-previews/module-house/1.webp',
            '/img-previews/hotel/room-previews/module-house/2.webp',
            '/img-previews/hotel/room-previews/module-house/3.webp',
            '/img-previews/hotel/room-previews/module-house/4.webp',
            '/img-previews/hotel/room-previews/module-house/5.webp',
            '/img-previews/hotel/room-previews/module-house/6.webp',
            '/img-previews/hotel/room-previews/module-house/7.webp',
            '/img-previews/hotel/room-previews/module-house/8.webp',
            '/img-previews/hotel/room-previews/module-house/9.webp',
            '/img-previews/hotel/room-previews/module-house/10.webp',
            '/img-previews/hotel/room-previews/module-house/11.webp',
            '/img-previews/hotel/room-previews/module-house/12.webp',
            '/img-previews/hotel/room-previews/module-house/13.webp',
            '/img-previews/hotel/room-previews/module-house/14.webp',
            '/img-previews/hotel/room-previews/module-house/15.webp',
        ],
        size: 'Размер номера 48 м².', // Добавить площадь терассы 9 кв.м.
        count: 8,
        price: [
            // { name: 'Цена', value: ['<b>9200 руб/сутки</b>',] },
            // { name: '', value: [saleTitle,] },
            // { name: 'Цена вс-чт', value: ['<span class="op">10200</span><b>9200 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<span class="op">10800</span><b>9800 руб/сутки</b>',] },
            // { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>13600 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>15200 руб/сутки</b>',] },
            
            { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>10400 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>11600 руб/сутки</b>',] },
        ],

        attributes: [
            { name: 'Вместимость', value: ['5 человек. 4 взрослых и 1 ребенок.'] },
            { name: 'Доп. гости', value: ['+2 за дополнительную плату'] },
            { name: 'Заселение', value: checkInHouse },
        ],
        amenities: [
            ...defaultAmenities,
            'Мангальная зона',
            'Микроволновая печь',
            'Набор посуды',
            'Халаты и сланцы',
            'Сейф',
        ]
    },

    {
        tlid: 245208,
        bnid: 90446,
        title: 'Австрийский таунхаус',
        description: 'Двухэтажный таунхаус с тремя спальнями, двумя санузлами, гостиной с мини-кухней, баней и бассейном на улице. Два варианта размещения: с русской парной или финской сауной.',
        pets: true,
        alert: true,
        images: [
            '/img/hotel/room-previews/austr-townhouse/1.webp',
            '/img/hotel/room-previews/austr-townhouse/2.webp',
            '/img/hotel/room-previews/austr-townhouse/3.webp',
            '/img/hotel/room-previews/austr-townhouse/4.webp',
            '/img/hotel/room-previews/austr-townhouse/5.webp',
            '/img/hotel/room-previews/austr-townhouse/6.webp',
            '/img/hotel/room-previews/austr-townhouse/7.webp',
            '/img/hotel/room-previews/austr-townhouse/8.webp',
            '/img/hotel/room-previews/austr-townhouse/9.webp',
            '/img/hotel/room-previews/austr-townhouse/10.webp',
        ],
        previews: [
            '/img-previews/hotel/room-previews/austr-townhouse/1.webp',
            '/img-previews/hotel/room-previews/austr-townhouse/2.webp',
            '/img-previews/hotel/room-previews/austr-townhouse/3.webp',
            '/img-previews/hotel/room-previews/austr-townhouse/4.webp',
            '/img-previews/hotel/room-previews/austr-townhouse/5.webp',
            '/img-previews/hotel/room-previews/austr-townhouse/6.webp',
            '/img-previews/hotel/room-previews/austr-townhouse/7.webp',
            '/img-previews/hotel/room-previews/austr-townhouse/8.webp',
            '/img-previews/hotel/room-previews/austr-townhouse/9.webp',
            '/img-previews/hotel/room-previews/austr-townhouse/10.webp',
        ],
        size: 'Размер номера 145 м².',
        count: 2,
        price: [
            // { name: 'Цена вс-чт', value: ['<b>15950 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<b>18950 руб/сутки</b>',] },
            // { name: '', value: [saleTitle,] },
            // { name: 'Цена вс-чт', value: ['<span class="op">19950</span><b>17450 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<span class="op">22450</span><b>19950 руб/сутки</b>',] },
            // { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>26150 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>28650 руб/сутки</b>',] },
            
            { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>19950 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>22450 руб/сутки</b>',] },
        ],

        attributes: [
            { name: 'Вместимость', value: ['8 человек. 6 взрослых и 2 детей.'] },
            { name: 'Доп. гости', value: ['+1 за дополнительную плату'] },
            { name: 'Заселение', value: checkInHouse },
        ],
        amenities: [
            ...defaultAmenities,
            'Бассейн',
            'Парная (электро или дровяная)',
            'Кухонная зона',
            'Индукционная плита',
            'Мангальная зона',
            'Микроволновая печь',
            'Утюг и гладильная доска',
            'Набор посуды',
            'Халаты, тапочки и сланцы',
            'Дополнительный санузел',
            'Сейф',
        ]
    },
    {
        tlid: 245516,
        bnid: 489229,
        title: 'Делюкс на набережной двухместный',
        description: 'Однокомнатный номер для двоих в корпусе на набережной. Французские балконы и идеальный вид из окна.',
        pets: false,
        alert: false,
        images: [
            '/img/hotel/room-previews/deluxe-5-corps/1.webp',
            '/img/hotel/room-previews/deluxe-5-corps/2.webp',
            '/img/hotel/room-previews/deluxe-5-corps/3.webp',
            '/img/hotel/room-previews/deluxe-5-corps/4.webp',
            '/img/hotel/room-previews/deluxe-5-corps/5.webp',
        ],
        previews: [
            '/img-previews/hotel/room-previews/deluxe-5-corps/1.webp',
            '/img-previews/hotel/room-previews/deluxe-5-corps/2.webp',
            '/img-previews/hotel/room-previews/deluxe-5-corps/3.webp',
            '/img-previews/hotel/room-previews/deluxe-5-corps/4.webp',
            '/img-previews/hotel/room-previews/deluxe-5-corps/5.webp',
        ],
        size: 'Размер номера 26 м².',
        count: 2,
        price: [
            { name: 'Цена', value: ['<b>7750 руб/сутки</b>',] },
            
            { name: '', value: [nextSeason] },
            { name: 'Цена', value: ['<b>6150 руб/сутки</b>',] },
        ],

        attributes: [
            { name: 'Вместимость', value: ['2 человека.'] },
            { name: 'Доп. гости', value: ['+1 за дополнительную плату'] },
            { name: 'Заселение', value: checkInRoom },
        ],
        amenities: [
            ...defaultAmenities,
            'Халаты и тапочки',
            'Сейф',
        ]
    },
    {
        tlid: 245516,
        bnid: 100646,
        title: 'Делюкс на набережной трехместный',
        description: 'Однокомнатный номер на троих в корпусе на набережной. Французские балконы и идеальный вид из окна.',
        pets: false,
        alert: false,
        images: [
            '/img/hotel/room-previews/deluxe-5-corps/1.webp',
            '/img/hotel/room-previews/deluxe-5-corps/4.webp',
            '/img/hotel/room-previews/deluxe-5-corps/5.webp',
            '/img/hotel/room-previews/deluxe-5-corps/6.webp',
            '/img/hotel/room-previews/deluxe-5-corps/7.webp',
            '/img/hotel/room-previews/deluxe-5-corps/8.webp',
        ],
        previews: [
            '/img-previews/hotel/room-previews/deluxe-5-corps/1.webp',
            '/img-previews/hotel/room-previews/deluxe-5-corps/4.webp',
            '/img-previews/hotel/room-previews/deluxe-5-corps/5.webp',
            '/img-previews/hotel/room-previews/deluxe-5-corps/6.webp',
            '/img-previews/hotel/room-previews/deluxe-5-corps/7.webp',
            '/img-previews/hotel/room-previews/deluxe-5-corps/8.webp',
        ],
        size: 'Размер номера 26 м².',

        count: 22,
        price: [
            { name: 'Цена', value: ['<b>7750 руб/сутки</b>',] },
            { name: '', value: [nextSeason] },
            { name: 'Цена', value: ['<b>6150 руб/сутки</b>',] },
        ],

        attributes: [
            { name: 'Вместимость', value: ['3 человека.'] },
            { name: 'Заселение', value: checkInRoom },
        ],
        amenities: [
            ...defaultAmenities,
            'Халаты и тапочки',
            'Сейф',
        ]
    },
    {
        tlid: 245517,
        bnid: 30814,
        title: 'Номер Комфорт с сауной',
        description: 'Однокомнатный номер для двоих с отдельным входом. В номере есть сауна и зона отдыха с диваном, столиком и телевизором.',
        pets: false,
        alert: true,
        images: [
            '/img/hotel/room-previews/comfort-5/1.webp',
            '/img/hotel/room-previews/comfort-5/2.webp',
            '/img/hotel/room-previews/comfort-5/3.webp',
            '/img/hotel/room-previews/comfort-5/4.webp',
            '/img/hotel/room-previews/comfort-5/5.webp',
            '/img/hotel/room-previews/comfort-5/6.webp',
        ],
        previews: [
            '/img-previews/hotel/room-previews/comfort-5/1.webp',
            '/img-previews/hotel/room-previews/comfort-5/2.webp',
            '/img-previews/hotel/room-previews/comfort-5/3.webp',
            '/img-previews/hotel/room-previews/comfort-5/4.webp',
            '/img-previews/hotel/room-previews/comfort-5/5.webp',
            '/img-previews/hotel/room-previews/comfort-5/6.webp',
        ],
        size: 'Размер номера 50 м².',
        count: 1,
        price: [
            // { name: 'Цена вс-чт', value: ['<span class="op">5980</span><b>5200 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<span class="op">6980</span><b>6200 руб/сутки</b>',] },
            // { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>7880 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>8880 руб/сутки</b>',] },
            { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>6150 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>6980 руб/сутки</b>',] },
        ],

        attributes: [
            { name: 'Вместимость', value: ['2 человека'] },
            { name: 'Доп. гости', value: ['+2 за дополнительную плату'] },
            { name: 'Заселение', value: checkInRoom },
        ],
        amenities: [
            ...defaultAmenities,
            'Сауна',
            'Мангальная зона',
            'Веранда',
            'Микроволновая печь',
            'Халаты, тапочки и сланцы',
            'Сейф',
        ]
    },
    // {
    //     tlid: [245527, 246236],
    //     bnid: [16546, 212319],
    //     title: 'Евростандарт спортивный корпус 2 этаж',
    //     description: 'Однокомнатный номер на двоих. Корпус находится в 30 метрах от основной территории парк-отеля через дорогу.',
    //     pets: false,
    //     images: [
    //         '/img/hotel/room-previews/sports-corps-2/1.webp',
    //         '/img/hotel/room-previews/sports-corps-2/2.webp',
    //         '/img/hotel/room-previews/sports-corps-2/3.webp',
    //         '/img/hotel/room-previews/sports-corps-2/4.webp',
    //         '/img/hotel/room-previews/sports-corps-2/5.webp',
    //     ],
    //     previews: [
    //         '/img-previews/hotel/room-previews/sports-corps-2/1.webp',
    //         '/img-previews/hotel/room-previews/sports-corps-2/2.webp',
    //         '/img-previews/hotel/room-previews/sports-corps-2/3.webp',
    //         '/img-previews/hotel/room-previews/sports-corps-2/4.webp',
    //         '/img-previews/hotel/room-previews/sports-corps-2/5.webp',
    //     ],
    //     size: 'Размеры номеров 13 м² и 18 м².',

    //     price: [
    //         { name: 'Цена', value: ['<b>3000 руб/сутки</b>',] },
    //     ],

    //     attributes: [
    //         { name: 'Вместимость', value: ['2 человека.'] },
    //         { name: 'Доп. гости', value: ['нет'] },
    //         { name: 'Заселение', value: checkInRoom },
    //     ],
    //     amenities: [
    //         ...defaultAmenities,
    //         'Две односпальные или одна двуспальная кровать',
    //     ]
    // },
    {
        tlid: 245528,
        bnid: 16535,
        title: 'Номер Комфорт',
        description: 'Однокомнатный номер для двоих с отдельным входом. В номере есть зона отдыха с диваном и столиком.',
        pets: false,
        alert: true,
        images: [
            '/img/hotel/room-previews/comfort/1.webp',
            '/img/hotel/room-previews/comfort/2.webp',
            '/img/hotel/room-previews/comfort/3.webp',
            '/img/hotel/room-previews/comfort/4.webp',
            '/img/hotel/room-previews/comfort/5.webp',
            '/img/hotel/room-previews/comfort/6.webp',
            '/img/hotel/room-previews/comfort/7.webp',
            '/img/hotel/room-previews/comfort/8.webp',
            '/img/hotel/room-previews/comfort/9.webp',
            '/img/hotel/room-previews/comfort/10.webp',
            '/img/hotel/room-previews/comfort/11.webp',
            '/img/hotel/room-previews/comfort/12.webp',
        ],
        previews: [
            '/img-previews/hotel/room-previews/comfort/1.webp',
            '/img-previews/hotel/room-previews/comfort/2.webp',
            '/img-previews/hotel/room-previews/comfort/3.webp',
            '/img-previews/hotel/room-previews/comfort/4.webp',
            '/img-previews/hotel/room-previews/comfort/5.webp',
            '/img-previews/hotel/room-previews/comfort/6.webp',
            '/img-previews/hotel/room-previews/comfort/7.webp',
            '/img-previews/hotel/room-previews/comfort/8.webp',
            '/img-previews/hotel/room-previews/comfort/9.webp',
            '/img-previews/hotel/room-previews/comfort/10.webp',
            '/img-previews/hotel/room-previews/comfort/11.webp',
            '/img-previews/hotel/room-previews/comfort/12.webp',
        ],
        size: 'Размер номера 33 м².',
        count: 2,
        price: [
            // { name: 'Цена вс-чт', value: ['<b>4980 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<b>5980 руб/сутки</b>',] },
            // { name: '', value: [saleTitle,] },
            // { name: 'Цена вс-чт', value: ['<span class="op">4980</span><b>4550 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<span class="op">5980</span><b>5550 руб/сутки</b>',] },
            // { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>6880 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>7880 руб/сутки</b>',] },
            { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>5300 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>6100 руб/сутки</b>',] },
        ],

        attributes: [
            { name: 'Вместимость', value: ['2 человека'] },
            { name: 'Доп. гости', value: ['+2 за дополнительную плату'] },
            { name: 'Заселение', value: checkInRoom },
        ],
        amenities: [
            ...defaultAmenities,
            'Мангальная зона',
            'Веранда',
            'Микроволновая печь',
            'Халаты, тапочки и сланцы',
            'Сейф',
        ]
    },
    {
        tlid: 245529,
        bnid: 16536,
        title: 'Улучшенный номер',
        description: 'Однокомнатный номер для двоих с отдельным входом. В номере есть зона отдыха с диваном.',
        pets: false,
        alert: true,
        images: [
            '/img/hotel/room-previews/comfort-sauna/1.webp',
            '/img/hotel/room-previews/comfort-sauna/2.webp',
            '/img/hotel/room-previews/comfort-sauna/3.webp',
            '/img/hotel/room-previews/comfort-sauna/4.webp',
            '/img/hotel/room-previews/comfort-sauna/5.webp',
        ],
        previews: [
            '/img-previews/hotel/room-previews/comfort-sauna/1.webp',
            '/img-previews/hotel/room-previews/comfort-sauna/2.webp',
            '/img-previews/hotel/room-previews/comfort-sauna/3.webp',
            '/img-previews/hotel/room-previews/comfort-sauna/4.webp',
            '/img-previews/hotel/room-previews/comfort-sauna/5.webp',
        ],
        size: 'Размер номера 33 м².',
        count: 2,

        price: [
            // { name: 'Цена вс-чт', value: ['<b>5480 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<b>6480 руб/сутки</b>',] },
            // { name: '', value: [saleTitle,] },
            // { name: 'Цена вс-чт', value: ['<span class="op">5480</span><b>4750 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<span class="op">6480</span><b>5750 руб/сутки</b>',] },
            // { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>7380 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>8380 руб/сутки</b>',] },
            { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>5650 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>6680 руб/сутки</b>',] },
        ],

        attributes: [
            { name: 'Вместимость', value: ['2 человека'] },
            { name: 'Доп. гости', value: ['+2 за дополнительную плату'] },
            { name: 'Заселение', value: checkInRoom },
        ],
        amenities: [
            ...defaultAmenities,
            'Мангальная зона',
            'Микроволновая печь',
            'Набор посуды',
            'Халаты и сланцы',
            'Сейф',
        ]
    },

    {
        tlid: 245131,
        bnid: [16539, 16540],
        title: 'Коттедж',
        description: `Уютный двухэтажный домик c гостиной, мини-кухней и двумя спальнями (всего 5 односпальных кроватей). Во дворе мангал, стол, лавочки.`,
        pets: true,
        alert: true,
        images: [
            '/img/hotel/room-previews/cottage/1.webp',
            '/img/hotel/room-previews/cottage/2.webp',
            '/img/hotel/room-previews/cottage/3.webp',
            '/img/hotel/room-previews/cottage/4.webp',
            '/img/hotel/room-previews/cottage/5.webp',
            '/img/hotel/room-previews/cottage/6.webp',
            '/img/hotel/room-previews/cottage/7.webp',
            '/img/hotel/room-previews/cottage/8.webp',
            '/img/hotel/room-previews/cottage/9.webp',
        ],
        previews: [
            '/img-previews/hotel/room-previews/cottage/1.webp',
            '/img-previews/hotel/room-previews/cottage/2.webp',
            '/img-previews/hotel/room-previews/cottage/3.webp',
            '/img-previews/hotel/room-previews/cottage/4.webp',
            '/img-previews/hotel/room-previews/cottage/5.webp',
            '/img-previews/hotel/room-previews/cottage/6.webp',
            '/img-previews/hotel/room-previews/cottage/7.webp',
            '/img-previews/hotel/room-previews/cottage/8.webp',
            '/img-previews/hotel/room-previews/cottage/9.webp',
        ],

        size: 'Размер номера 64 м².',
        count: 2,
        price: [
            // { name: 'Цена вс-чт', value: ['<b>6900 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<b>7900 руб/сутки</b>',] },
            // { name: '', value: [saleTitle,] },
            // { name: 'Цена вс-чт', value: ['<span class="op">9200</span><b>8200 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<span class="op">10400</span><b>9300 руб/сутки</b>',] },
            // { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>11300 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>12300 руб/сутки</b>',] },
            { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>10300 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>11800 руб/сутки</b>',] },
        ],

        attributes: [
            { name: 'Вместимость', value: ['5 человек'] },
            { name: 'Доп. гости', value: ['+2 за дополнительную плату'] },
            { name: 'Заселение', value: checkInHouse },
        ],
        amenities: [
            ...defaultAmenities,
            'Мангальная зона',
            'Открытая веранда',
            'Кухонная зона с электроплитой',
            'Две спальни',
            'Пять односпальных кроватей',
            'Набор посуды',
            'Сланцы',
            'Сейф',
        ]
    },

    {
        tlid: 245531,
        bnid: [492549, 16538],
        title: 'Таунхаус. Скидка 10%',
        description: 'Двухэтажные апартаменты с гостиной, двумя спальнями, двумя санузлами, мини-кухней и инфракрасной сауной. Возле каждого таунхауса веранда с местами для отдыха на свежем воздухе и мангалом.',
        pets: true,
        alertText: 'Возле таунхаусов ведутся строительные работы. Действует скидка 10%.',
        alert: true,
        images: [
            '/img/hotel/room-previews/townhouse/1.webp',
            '/img/hotel/room-previews/townhouse/2.webp',
            '/img/hotel/room-previews/townhouse/3.webp',
            '/img/hotel/room-previews/townhouse/4.webp',
            '/img/hotel/room-previews/townhouse/5.webp',
            '/img/hotel/room-previews/townhouse/6.webp',
            '/img/hotel/room-previews/townhouse/7.webp',
        ],
        previews: [
            '/img-previews/hotel/room-previews/townhouse/1.webp',
            '/img-previews/hotel/room-previews/townhouse/2.webp',
            '/img-previews/hotel/room-previews/townhouse/3.webp',
            '/img-previews/hotel/room-previews/townhouse/4.webp',
            '/img-previews/hotel/room-previews/townhouse/5.webp',
            '/img-previews/hotel/room-previews/townhouse/6.webp',
            '/img-previews/hotel/room-previews/townhouse/7.webp',
        ],
        size: 'Размер номера 96 м².',
        count: 3,
        price: [
            // { name: 'Цена вс-чт', value: ['<b>10900 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<b>12900 руб/сутки</b>',] },
            // { name: '', value: [saleTitle,] },
            // { name: 'Цена вс-чт', value: ['<span class="op">13950</span><b>11950 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<span class="op">16550</span><b>14450 руб/сутки</b>',] },
            // { name: '', value: [nextSeason] },

            // { name: 'Цена вс-чт', value: ['<b>17650 руб/сутки</b>',] },
            // { name: 'Цена пт-сб', value: ['<b>20250 руб/сутки</b>',] },
            { name: 'Цена вс-чт', value: ['<span class="op">17650</span><b>15885 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<span class="op">20250</span><b>18225 руб/сутки</b>',] },

            // { name: 'Цена пт-сб', value: ['<span class="op">14450</span><b>13000 руб/сутки</b>',] },
            { name: '', value: [nextSeason] },
            { name: 'Цена вс-чт', value: ['<b>13950 руб/сутки</b>',] },
            { name: 'Цена пт-сб', value: ['<b>16550 руб/сутки</b>',] },
        ],

        attributes: [
            { name: 'Вместимость', value: ['4 человека'] },
            { name: 'Доп. гости', value: ['+2 за дополнительную плату'] },
            { name: 'Заселение', value: checkInHouse },
        ],
        amenities: [
            ...defaultAmenities,
            'Мангальная зона',
            'Микроволновая печь',
            'Мультиварка',
            'Кухонная зона',
            'Набор посуды',
            'Дополнительная душевая',
            'Гардеробная',
            'Утюг и гладильная доска',
            'Инфракрасная кабина (мини-сауна)',
            'Халаты, тапочки и сланцы',
            'Сейф',
        ]
    },

    // {
    //     tlid: 245531,
    //     bnid: 16538,
    //     title: 'Таунхаус (вид на стройку) -15%',
    //     description: 'Двухэтажные апартаменты. Возле каждого таунхауса – веранда с местами для отдыха на свежем воздухе и мангалом.',
    //     pets: true,
    //     images: [
    //         '/img/hotel/room-previews/townhouse/1.webp',
    //         '/img/hotel/room-previews/townhouse/2.webp',
    //         '/img/hotel/room-previews/townhouse/3.webp',
    //         '/img/hotel/room-previews/townhouse/4.webp',
    //         '/img/hotel/room-previews/townhouse/5.webp',
    //         '/img/hotel/room-previews/townhouse/6.webp',
    //         '/img/hotel/room-previews/townhouse/7.webp',
    //     ],
    //     previews: [
    //         '/img-previews/hotel/room-previews/townhouse/1.webp',
    //         '/img-previews/hotel/room-previews/townhouse/2.webp',
    //         '/img-previews/hotel/room-previews/townhouse/3.webp',
    //         '/img-previews/hotel/room-previews/townhouse/4.webp',
    //         '/img-previews/hotel/room-previews/townhouse/5.webp',
    //         '/img-previews/hotel/room-previews/townhouse/6.webp',
    //         '/img-previews/hotel/room-previews/townhouse/7.webp',
    //     ],
    //     size: 'Размер номера 96 м².',

    //     price: [
    //         // { name: 'Цена вс-чт', value: ['<b>10900 руб/сутки</b>',] },
    //         // { name: 'Цена пт-сб', value: ['<b>12900 руб/сутки</b>',] },
    //         // { name: '', value: [saleTitle,] },
    //         // { name: 'Цена вс-чт', value: ['<span class="op">13950</span><b>11950 руб/сутки</b>',] },
    //         { name: 'Цена вс-чт', value: ['<span class="op">11950</span><b>10150 руб/сутки</b>',] },
    //         // { name: 'Цена пт-сб', value: ['<span class="op">16550</span><b>14450 руб/сутки</b>',] },
    //         { name: 'Цена пт-сб', value: ['<span class="op">14450</span><b>12280 руб/сутки</b>',] },
    //         // { name: '', value: [nextSeason] },
    //         // { name: 'Цена вс-чт', value: ['<b>13950 руб/сутки</b>',] },
    //         // { name: 'Цена пт-сб', value: ['<b>16550 руб/сутки</b>',] },
    //     ],

    //     attributes: [
    //         { name: 'Вместимость', value: ['4 человека'] },
    //         { name: 'Доп. гости', value: ['+2 за дополнительную плату'] },
    //         { name: 'Заселение', value: checkInHouse },
    //     ],
    //     amenities: [
    //         ...defaultAmenities,
    //         'Мангальная зона',
    //         'Микроволновая печь',
    //         'Мультиварка',
    //         'Кухонная зона',
    //         'Набор посуды',
    //         'Дополнительная душевая',
    //         'Гардеробная',
    //         'Утюг и гладильная доска',
    //         'Инфракрасная кабина (мини-сауна)',
    //         'Халаты, тапочки и сланцы',
    //         'Сейф',
    //     ]
    // },



    // {
    //     tlid: 100,
    //     bnid: [16543, 16544],
    //     title: 'Делюкс с балконом',
    //     description: 'Однокомнатный номер на двоих с большим балконом.',
    //     pets: false,
    //     images: [
    //         '/img/hotel/room-previews/deluxe-balcony/1.webp',
    //         '/img/hotel/room-previews/deluxe-balcony/2.webp',
    //         '/img/hotel/room-previews/deluxe-balcony/3.webp',
    //         '/img/hotel/room-previews/deluxe-balcony/4.webp',
    //         '/img/hotel/room-previews/deluxe-balcony/5.webp',
    //         '/img/hotel/room-previews/deluxe-balcony/6.webp',
    //     ],
    //     previews: [
    //         '/img-previews/hotel/room-previews/deluxe-balcony/1.webp',
    //         '/img-previews/hotel/room-previews/deluxe-balcony/2.webp',
    //         '/img-previews/hotel/room-previews/deluxe-balcony/3.webp',
    //         '/img-previews/hotel/room-previews/deluxe-balcony/4.webp',
    //         '/img-previews/hotel/room-previews/deluxe-balcony/5.webp',
    //         '/img-previews/hotel/room-previews/deluxe-balcony/6.webp',
    //     ],
    //     size: 'Размер номера 25 м².',

    //     price: [
    //         { name: 'Цена', value: ['<b>3100 руб/сутки</b>',] },
    //     ],

    //     attributes: [
    //         { name: 'Вместимость', value: ['2 человека'] },
    //         { name: 'Доп. гости', value: ['+1 за дополнительную плату'] },
    //         { name: 'Заселение', value: checkInRoom },
    //     ],
    //     amenities: [
    //         ...defaultAmenities,
    //         'Мангальная зона',
    //         'Микроволновая печь',
    //         'Набор посуды',
    //         'Халаты и сланцы',
    //         'Сейф',
    //     ]
    // },
    // {
    //     tlid: 100,
    //     bnid: 16545,
    //     title: 'Евростандарт спортивный корпус',
    //     description: 'Однокомнатный номер на двоих. Корпус находится в 30 метрах от основной территории парк-отеля через дорогу.',
    //     pets: false,
    //     images: [
    //         '/img/hotel/room-previews/eurostandard-sport-corps/1.webp',
    //         '/img/hotel/room-previews/eurostandard-sport-corps/2.webp',
    //         '/img/hotel/room-previews/eurostandard-sport-corps/3.webp',
    //     ],
    //     previews: [
    //         '/img-previews/hotel/room-previews/eurostandard-sport-corps/1.webp',
    //         '/img-previews/hotel/room-previews/eurostandard-sport-corps/2.webp',
    //         '/img-previews/hotel/room-previews/eurostandard-sport-corps/3.webp',
    //     ],
    //     size: 'Размеры номеров от 12,7 м² до 15 м².',

    //     price: [
    //         { name: 'Цена вс-чт', value: ['<b>2490 руб/сутки</b>',] },
    //     ],

    //     attributes: [
    //         { name: 'Вместимость', value: ['2 человека.'] },
    //         { name: 'Доп. гости', value: ['нет'] },
    //         { name: 'Заселение', value: checkInRoom },
    //     ],
    //     amenities: [
    //         ...defaultAmenities,
    //         'Мангальная зона',
    //         'Микроволновая печь',
    //         'Набор посуды',
    //         'Халаты и сланцы',
    //         'Сейф',
    //     ]
    // }
];








// {
//     bnid: 16542,
//     title: 'Евростандарт',
//     description: 'Просторный номер класса "Люкс" с панорамным видом на море.',
//     images: [
//         '/img/hotel/room-previews/eurostandard.jpeg',
//     ],
//     size: 'Размер номера 25 м².',
//     attributes: [
//         { name: 'Цены', value: '<b>2850 руб/сутки</b>' },
//         { name: 'Вместимость', value: '2 человека.' }
//     ],
//     amenities: [
//         'Банные полотенца и полотенца для рук',
//         'Фен',
//         'Чайник',
//         'Кофеварка',
//         'Мини-бар',
//         'Кондиционер',
//         'Столовые приборы и посуда',
//         'Питьевая вода',
//         'Телевизор',
//         'Доступ в интернет'
//     ]
// },
