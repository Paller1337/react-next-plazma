import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"
import { VK } from 'vk-io';
import { DateTime } from 'luxon'


// const VK_TOKEN = process.env.TG_BOT_TOKEN
// const VK_TOKEN = 'vk1.a.KxUCkBwmwvJd0T83DBPZrkD4c5ut2_Bthof8XNt4szDZ4BC4DjRIcbYP2HXbhdbzkUizR2QDMjV8UIbSzh1TvBTo5q0f-6BKHClssmT5yBsl4gT2-Q5Uqkrr2LTWjmZh48FGmnwNNdkzOf3zK9TObHJ4afMO3iSKJp78x767k9RvlN1WWwm1RIS17lki3FMZnKmwfiKkajWzzz3flK9apQ'
const VK_TOKEN = 'a25070f7a25070f7a25070f7b8a145c8f9aa250a25070f7c75d18c198b47cfe6fcf8c7e'
const vk = new VK({
    token: VK_TOKEN,
    // pollingGroupId: -43242132
})

type Data = {
    name: string
}

async function run() {
    const wall = await vk.api.wall.get({
        owner_id: -218633598,
    })
}



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const response = await vk.api.wall.get({
            owner_id: -218633598, // Используй минус перед ID для сообществ
            count: 10
        });

        const posts = response.items;
        const postsRes = []

        for (const post of posts) {
            // console.log(post)
            if (post.attachments && post.text) {
                const attachments = post.attachments[0]
                if (attachments && attachments.type === 'photo') {
                    if (postsRes.length < 3) postsRes.push(post)
                    else break
                }
            }
        }

        // for (const post of postsRes) {
        //     console.log('Post: ', post)
        // }

        return res.status(200).json({ status: 'Записи получены!', posts: postsRes });
    } catch (error) {
        return res.status(500).json({ status: 'Ошибка отправки' });
    }
};