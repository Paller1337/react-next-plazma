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
    date: number,
    from_id: number,
    id: number,
    likes: {
        can_like: number,
        count: number,
        user_likes: number

    },
    owner_id: number,
    post_type: 'post',
    reposts: { count: number },
    text: string,
    views: { count: number }

}