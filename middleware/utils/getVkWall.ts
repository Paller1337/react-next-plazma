import { DEFAULTS } from 'defaults'
import { IVKGroupWallPost } from '../types/VKGroupWallPost'

export const getVkWall = async (): Promise<IVKGroupWallPost[]> => {
    const posts = await fetch(DEFAULTS.URL.BASE_URL + '/api/get-sport-news')
        .then(async res => {
            if (res.status === 200) {
                const posts = await res.json()
                if (Array.isArray(posts.posts)) {
                    return posts.posts
                } else {
                    console.error('API did not return an array')
                    return []
                }
            }
        })
    return posts
}