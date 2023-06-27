import { RoomObjectProps } from '../components/objects/RoomObject';

export const hotelRooms: RoomObjectProps[] = [
    {
        id: 320518,
        title: 'Домик на набережной',
        description: 'Уютный домик на набережной, включающий в себя мини-кухню, душевую, спальную и зал в панорамными окнами.',
        images: [
            '/img/hotel/room-previews/module-house/1.jpg',
            '/img/hotel/room-previews/module-house/2.jpg',
            '/img/hotel/room-previews/module-house/3.jpg',
            '/img/hotel/room-previews/module-house/4.jpg',
            '/img/hotel/room-previews/module-house/5.jpg',
            '/img/hotel/room-previews/module-house/6.jpg',
            '/img/hotel/room-previews/module-house/7.jpg',
            '/img/hotel/room-previews/module-house/8.jpg',
        ],
        size: 'Размер номера 48 м².', // Добавить площадь терассы 9 кв.м.
        attributes: [
            { name: 'Цены', value: ['<b>9200 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['5 человек. 4 взрослых и 1 ребенок.'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    },
    {
        id: 90446,
        title: 'Австрийский таунхаус',
        description: 'Двухэтажный таунхаус в современном стиле с мини-кухней, баней. Два варианта размещения: с русской парной или финской сауной.',
        images: [
            '/img/hotel/room-previews/austr-townhouse/1.jpg',
            '/img/hotel/room-previews/austr-townhouse/2.jpg',
            '/img/hotel/room-previews/austr-townhouse/3.jpg',
            '/img/hotel/room-previews/austr-townhouse/4.jpg',
            '/img/hotel/room-previews/austr-townhouse/5.jpg',
            '/img/hotel/room-previews/austr-townhouse/6.jpg',
            '/img/hotel/room-previews/austr-townhouse/7.jpg',
            '/img/hotel/room-previews/austr-townhouse/8.jpg',
            '/img/hotel/room-previews/austr-townhouse/9.jpg',
            '/img/hotel/room-previews/austr-townhouse/10.jpg',
        ],
        size: 'Размер номера 145 м².',
        attributes: [
            { name: 'Цены', value: ['воскресенье - четверг ', ' <b>15950 руб/сутки</b></br>', ' пятница и суббота ', '<b>18950 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['8 человек. 6 взрослых и 2 детей.'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    },
    {
        id: 100646,
        title: 'Делюкс на набережной',
        description: 'Новый корпус на набережной с прекрасным видом на водоём.',
        images: [
            '/img/hotel/room-previews/deluxe-5-corps/1.jpg',
            '/img/hotel/room-previews/deluxe-5-corps/2.jpg',
            '/img/hotel/room-previews/deluxe-5-corps/3.jpg',
            '/img/hotel/room-previews/deluxe-5-corps/4.jpg',
            '/img/hotel/room-previews/deluxe-5-corps/5.jpg',
        ],
        size: 'Размер номера 26 м².',
        attributes: [
            { name: 'Цены', value: ['<b>4150 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['2 человека.'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    },
    {
        id: 30814,
        title: 'Номер Комфорт с сауной',
        description: 'Однокомнатный номер для двоих с сауной.',
        images: [
            '/img/hotel/room-previews/comfort-sauna/1.jpg',
            '/img/hotel/room-previews/comfort-sauna/2.jpg',
            '/img/hotel/room-previews/comfort-sauna/3.jpg',
            '/img/hotel/room-previews/comfort-sauna/4.jpg',
            '/img/hotel/room-previews/comfort-sauna/5.jpg',
            '/img/hotel/room-previews/comfort-sauna/6.jpg',
            '/img/hotel/room-previews/comfort-sauna/7.jpg',
        ],
        size: 'Размер номера 50 м².',
        attributes: [
            { name: 'Цены', value: ['воскресенье - четверг', '<b>5980 руб/сутки</b></br>', ' пятница и суббота ', ' <b>6980 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['2 человека. Опционально +1 детское место за доплату.'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    },
    {
        id: [16546, 212319],
        title: 'Евростандарт спортивный корпус 2 этаж',
        description: 'Однокомнатный номер на двоих. Корпус находится в 30 метрах от основной территории парк-отеля через дорогу.',
        images: [
            '/img/hotel/room-previews/sports-corps-2/1.jpg',
            '/img/hotel/room-previews/sports-corps-2/2.jpg',
            '/img/hotel/room-previews/sports-corps-2/3.jpg',
            '/img/hotel/room-previews/sports-corps-2/4.jpg',
            '/img/hotel/room-previews/sports-corps-2/5.jpg',
            '/img/hotel/room-previews/sports-corps-2/6.jpg',
            '/img/hotel/room-previews/sports-corps-2/7.jpg',
        ],
        size: 'Размеры номеров 13 м² и 18 м².',
        attributes: [
            { name: 'Цены', value: ['<b>3000 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['2 человека.'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    },
    {
        id: 16535,
        title: 'Номер Комфорт',
        description: 'Однокомнатный номер для двоих. Отдельный вход с верандой.',
        images: [
            '/img/hotel/room-previews/comfort/1.jpg',
            '/img/hotel/room-previews/comfort/2.jpg',
            '/img/hotel/room-previews/comfort/3.jpg',
            '/img/hotel/room-previews/comfort/4.jpg',
            '/img/hotel/room-previews/comfort/5.jpg',
            '/img/hotel/room-previews/comfort/6.jpg',
        ],
        size: 'Размер номера 33 м².',
        attributes: [
            { name: 'Цены', value: ['воскресенье - четверг', '<b>4980 руб/сутки</b></br>', 'пятница и суббота', '<b>5980 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['???'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    },
    {
        id: 16536,
        title: 'Номер Комфорт с сауной',
        description: 'Однокомнатный номер для двоих. Отдельный вход с верандой.',
        images: [
            '/img/hotel/room-previews/comfort-sauna/1.jpg',
            '/img/hotel/room-previews/comfort-sauna/2.jpg',
            '/img/hotel/room-previews/comfort-sauna/3.jpg',
            '/img/hotel/room-previews/comfort-sauna/4.jpg',
            '/img/hotel/room-previews/comfort-sauna/5.jpg',
            '/img/hotel/room-previews/comfort-sauna/6.jpg',
            '/img/hotel/room-previews/comfort-sauna/7.jpg',
        ],
        size: 'Размер номера 33 м².',
        attributes: [
            { name: 'Цены', value: ['воскресенье - четверг', '<b>5480 руб/сутки</b></br>', ' пятница и суббота', ' <b>6480 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['???'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    },

    {
        id: [16539, 16540],
        title: 'Коттедж',
        description: 'Просторный номер класса "Люкс" с панорамным видом на море.',
        images: [
            '/img/hotel/room-previews/cottage/1.jpg',
            '/img/hotel/room-previews/cottage/2.jpg',
            '/img/hotel/room-previews/cottage/3.jpg',
            '/img/hotel/room-previews/cottage/4.jpg',
            '/img/hotel/room-previews/cottage/5.jpg',
            '/img/hotel/room-previews/cottage/6.jpg',
        ],
        size: 'Размер номера 64 м².',
        attributes: [
            { name: 'Цены', value: ['воскресенье - четверг', ' <b>6900 руб/сутки</b></br>', ' пятница и суббота', ' <b>7900 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['???'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    },
    {
        id: 16538,
        title: 'Таунхаус',
        description: 'Просторный номер класса "Люкс" с панорамным видом на море.',
        images: [
            '/img/hotel/room-previews/townhouse/1.jpg',
            '/img/hotel/room-previews/townhouse/2.jpg',
            '/img/hotel/room-previews/townhouse/3.jpg',
            '/img/hotel/room-previews/townhouse/4.jpg',
            '/img/hotel/room-previews/townhouse/5.jpg',
            '/img/hotel/room-previews/townhouse/6.jpg',
            '/img/hotel/room-previews/townhouse/7.jpg',
        ],
        size: 'Размер номера 96 м².',
        attributes: [
            { name: 'Цены', value: ['воскресенье - четверг', ' <b>10900 руб/сутки</b></br>', ' пятница и суббота', ' <b>12900 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['???'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    },
    // {
    //     id: 16542,
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
    {
        id: [16543, 16544],
        title: 'Делюкс с балконом',
        description: 'Однокомнатный номер на двоих с большим балконом.',
        images: [
            '/img/hotel/room-previews/deluxe-balcony/1.jpg',
            '/img/hotel/room-previews/deluxe-balcony/2.jpg',
            '/img/hotel/room-previews/deluxe-balcony/3.jpg',
            '/img/hotel/room-previews/deluxe-balcony/4.jpg',
            '/img/hotel/room-previews/deluxe-balcony/5.jpg',
            '/img/hotel/room-previews/deluxe-balcony/6.jpg',
        ],
        size: 'Размер номера 25 м².',
        attributes: [
            { name: 'Цены', value: ['<b>3100 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['2 человека. Опционально +1 место за доплату.'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    },
    {
        id: 16545,
        title: 'Евростандарт спортивный корпус',
        description: 'Однокомнатный номер на двоих. Корпус находится в 30 метрах от основной территории парк-отеля через дорогу.',
        images: [
            '/img/hotel/room-previews/eurostandard-sport-corps/1.jpg',
            '/img/hotel/room-previews/eurostandard-sport-corps/2.jpg',
            '/img/hotel/room-previews/eurostandard-sport-corps/3.jpg',
        ],
        size: 'Размеры номеров от 12,7 м² до 15 м².',
        attributes: [
            { name: 'Цены', value: ['<b>2490 руб/сутки</b>'] },
            { name: 'Вместимость', value: ['2 человека.'] }
        ],
        amenities: [
            'Банные полотенца и полотенца для рук',
            'Фен',
            'Чайник',
            'Кофеварка',
            'Мини-бар',
            'Кондиционер',
            'Столовые приборы и посуда',
            'Питьевая вода',
            'Телевизор',
            'Доступ в интернет'
        ]
    }
];
