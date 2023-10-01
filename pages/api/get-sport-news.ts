import type { NextApiRequest, NextApiResponse } from 'next'
import { VK } from 'vk-io'

const VK_TOKEN = process.env.VK_APP_TOKEN
const vk = new VK({
    token: VK_TOKEN,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const response = await vk.api.wall.get({
            owner_id: -218633598,
            count: 10
        });

        const posts = response.items
        const postsRes = []

        for (const post of posts) {
            if (post.attachments && post.text) {
                const attachments = post.attachments[0]
                if (attachments && attachments.type === 'photo') {
                    if (postsRes.length < 3) postsRes.push(post)
                    else break
                }
            }
        }

        return res.status(200).json({ status: 'Записи получены!', posts: postsRes });
    } catch (error) {
        return res.status(500).json({ status: 'Ошибка отправки' });
    }
};