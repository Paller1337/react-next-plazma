export interface IVKGroupWallPost {
    donut: {
        is_donut: boolean
    },
    comments: {
        count: number
    },
    marked_as_ads: number,
    short_text_rate: number,
    hash: string,
    type: string,
    attachments: {
        type: string,
        photo: {
            sizes: {
                height: number
                type: string
                url: string
                width: number
            }[]
        }
    }[],
    date: 1693750617,
    from_id: -218633598,
    id: 121,
    likes: { can_like: 0, count: 12, user_likes: 0 },
    owner_id: -218633598,
    post_type: 'post',
    reposts: { count: 0 },
    text: 'Наши чудесные гимнастки из спортивного клуба «РОКСЭТ» г.Тула. Это ваш не первый раз у нас и, надеемся, далеко не последний❤️',
    views: { count: 242 }

}