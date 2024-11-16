import { SportRequestFormData } from '@/components/SportRequest';
import { sendMessageWithDocument } from '@/mw/utils/sendSportRequest';
import { DateTime } from 'luxon';
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer";

type Data = {
    name: string
}


const BOT_TOKEN = process.env.TG_BOT_TOKEN
const CHAT_ID = '-1001699514488'
// const BOT_TOKEN = '6855526888:AAEDn9Llk6k8gd_3T9eRHMwGTzIB9225xuY'
// const CHAT_ID = '-1001934278839'

// const BOT_TOKEN = '6855526888:AAEDn9Llk6k8gd_3T9eRHMwGTzIB9225xuY'
// const CHAT_ID = '-1001934278839'

function escapeMarkdown(text) {
    const replacements = {
        '*': '\*',
        '_': '\_',
        '[': '\[',
        ']': '\]',
        '(': '\(',
        ')': '\)',
        '~': '\~',
        '`': '\`',
        '>': '\>',
        '#': '\#',
        '+': '\+',
        '-': '\-',
        '=': '\=',
        '|': '\|',
        '{': '\{',
        '}': '\}',
        '.': '\.',
        '!': '\!'
    };
    return text.replace(/[\*\_\[\]\(\)\~\`\>\#\+\-\=\|\{\}\.\!]/g, match => replacements[match]);
}


async function sendTelegramMessage(message) {
    const chatId = CHAT_ID; // chat_id 

    const data = {
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
    }

    const result = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        // .then((responseData) => {
        //     console.log('Сообщение успешно отправлено:', responseData)
        // })
        .catch((error) => {
            console.error('Ошибка отправки сообщения в Telegram:', error)
        })
    return result
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body)
    const requestData = body.data as SportRequestFormData

    const formatIn = DateTime.fromFormat(requestData.dateIn, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_FULL, { locale: 'ru' })
    const formatOut = DateTime.fromFormat(requestData.dateOut, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_FULL, { locale: 'ru' })

    console.log('feedback body: ', body)
    const transporter = nodemailer.createTransport({
        host: "mail.kplazma.ru",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    const send = async (toEmail: string) => {
        await transporter.sendMail({
            from: 'noreply@kplazma.ru',
            to: toEmail,
            subject: `${requestData.name ? requestData.name : ' "Без имени"'} просит связаться`,
            html: `<p>*Заявка с kplazma.ru*</p>
            <p><strong>Вид спорта:</strong> ${requestData.sport ? requestData.sport : 'отсутствует'}</p>
            <p><strong>Название команды:</strong> ${requestData.team?.name ? requestData.team?.name : 'отсутствует'}</p>
            <p><strong>Количество человек:</strong> ${requestData.team?.size ? requestData.team?.size : 'отсутствует'}</p>
            <p><strong>Заезд:</strong> ${requestData.dateIn ? formatIn : 'отсутствует'}</p>
            <p><strong>Выезд:</strong> ${requestData.dateOut ? formatOut : 'отсутствует'}</p>
            <p><strong>ФИО:</strong> ${requestData.name ? requestData.name : 'отсутствует'}</p>
            <p><strong>Телефон:</strong> ${requestData.phone ? requestData.phone : 'отсутствует'}</p>
            <p><strong>Комментарий:</strong> ${requestData.comment ? requestData.comment : 'отсутствует'}</p>
            ${body?.utm ? `<p><strong>UTM:</strong> ${body.utm}</p>` : ''}
            ${body?.ymTag ? `<p><strong>YaMetrikaTag:</strong> ${body.ymTag}</p>` : ''}
            `
        });
    }

    try {
        // await send('max.paller@yandex.ru')
        await send('max@kplazma.ru')
        // await send('dnd@kplazma.ru')
        // await send('nastya@kplazma.ru')

        // sport?: string,
        // dateIn?: string,
        // dateOut?: string,
        // team?: {
        //     name: string,
        //     size: 0,
        // },
        // sportArea?: string,
        // trainingDuration?: string,
        // name: string,
        // phone: string,
        // comment?: string


        // sendTelegramMessage(`* Заявка с kplazma.ru *\n\n` +
        //     `* Вид спорта:* ${requestData.sport ? requestData.sport : ' отсутствует'}\n` +
        //     `* Заезд:* ${requestData.dateIn ? requestData.dateIn : ' отсутствует'}\n` +
        //     `* Выезд:* ${requestData.dateOut ? requestData.dateOut : ' отсутствует'}\n` +
        //     `* Название команды:* ${requestData.team?.name ? requestData.team?.name : ' отсутствует'}\n` +
        //     `* Количество человек:* ${requestData.team?.size ? requestData.team?.size : ' отсутствует'}\n` +
        //     `* Площадка для тренировок:* ${requestData.sportArea ? requestData.sportArea : ' отсутствует'}\n` +
        //     `* Продолжительность тренировок:* ${requestData.trainingDuration ? requestData.trainingDuration : ' отсутствует'}\n` +
        //     `* ФИО:* ${requestData.name ? requestData.name : ' отсутствует'}\n` +
        //     `* Телефон:* ${requestData.phone ? requestData.phone : ' отсутствует'}\n` +
        //     `* Комментарий:* ${requestData.comment ? requestData.comment : ' отсутствует'}\n` +

        //     `${body.utm ? '* UTM:* ' + body.utm : ''}`);
        // const message = `*Заявка с kplazma.ru *\n` +
        //     `\n*Вид спорта:* ${requestData.sport ? requestData.sport : ' отсутствует'}` +
        //     `\n*Название команды:* ${requestData.team?.name ? requestData.team?.name : ' отсутствует'}` +
        //     `\n*Количество человек:* ${requestData.team?.size ? requestData.team?.size : ' отсутствует'}` +
        //     `\n*Заезд:* ${requestData.dateIn ? formatIn : ' отсутствует'}` +
        //     `\n*Выезд:* ${requestData.dateOut ? formatOut : ' отсутствует'}` +
        //     `\n\n*ФИО:* ${requestData.name ? requestData.name : ' отсутствует'}` +
        //     `\n*Телефон:* ${requestData.phone ? requestData.phone : ' отсутствует'}` +
        //     // `*Площадка для тренировок:* \n${requestData.sportArea ? requestData.sportArea : ' отсутствует'}\n\n` +
        //     // `*Продолжительность тренировок:* \n${requestData.trainingDuration ? requestData.trainingDuration : ' отсутствует'}\n\n` +
        //     `\n*Комментарий:* \n${requestData.comment ? requestData.comment : ' отсутствует'}\n` +
        //     `${body?.utm ? '\n*UTM:* ' + body.utm : ''}` +
        //     `${body?.ymTag ? '\n*YaMetrikaTag:* ' + body.ymTag : ''}`

        const message = `*Заявка с kplazma.ru* \n` +
            `\n*Вид спорта:* ${requestData.sport ? escapeMarkdown(requestData.sport) : ' отсутствует'}` +
            `\n*Название команды:* ${requestData.team?.name ? escapeMarkdown(requestData.team.name) : ' отсутствует'}` +
            `\n*Количество человек:* ${requestData.team?.size ? escapeMarkdown(requestData.team.size.toString()) : ' отсутствует'}` +
            `\n*Заезд:* ${requestData.dateIn ? escapeMarkdown(formatIn) : ' отсутствует'}` +
            `\n*Выезд:* ${requestData.dateOut ? escapeMarkdown(formatOut) : ' отсутствует'}` +
            `\n\n*ФИО:* ${requestData.name ? escapeMarkdown(requestData.name) : ' отсутствует'}` +
            `\n*Телефон:* ${requestData.phone ? escapeMarkdown(requestData.phone) : ' отсутствует'}` +
            `\n*Комментарий:* \n${requestData.comment ? escapeMarkdown(requestData.comment) : ' отсутствует'}` +
            `${body?.utm ? '\n*UTM:* ' + escapeMarkdown(body.utm) : ''}` +
            `${body?.ymTag ? '\n*YaMetrikaTag:* ' + escapeMarkdown(body.ymTag) : ''}`;

        console.log({ message })
        const result = await sendTelegramMessage(message)
        console.log({ result })
        // await sendMessageWithDocument(requestData, body.utm, BOT_TOKEN, CHAT_ID)


        return res.status(200).json({ status: 'Сообщение отправлено!' });
    } catch (error) {
        return res.status(500).json({ status: 'Ошибка отправки' });
    }
};