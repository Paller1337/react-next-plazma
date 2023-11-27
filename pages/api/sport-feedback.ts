import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer";

type Data = {
    name: string
}


const BOT_TOKEN = process.env.TG_BOT_TOKEN


function sendTelegramMessage(message) {
    const chatId = '-1001699514488'; // chat_id 

    const data = {
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
    };

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        // .then((responseData) => {
        //     console.log('Сообщение успешно отправлено:', responseData);
        // })
        .catch((error) => {
            console.error('Ошибка отправки сообщения в Telegram:', error);
        });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);

    const transporter = nodemailer.createTransport({
        host: "mail.kplazma.ru",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    const send = async (toEmail: string) => {
        await transporter.sendMail({
            from: 'noreply@kplazma.ru',
            to: toEmail,
            subject: `${body.name ? body.name : ' "Без имени"'} просит связаться`,
            html: `<p>Спортивные сборы kplazma.ru </p><br>
            <p><strong>Телефон: </strong> ${body.phone ? body.phone : ' отсутствует'}</p>
            <p><strong>Сообщение: </strong> ${body.message ? body.message : ' отсутствует'}</p>
            <p><strong>Стоимость сборов на калькуляторе: </strong> ${body.result ? body.result : 0}</p>
            ${body.utm ? `<p><strong>UTM: </strong> ${body.utm}</p>` : ''}
            `
        });
    }

    try {
        // await send('max.paller@yandex.ru')
        await send('max@kplazma.ru')
        await send('dnd@kplazma.ru')
        sendTelegramMessage(`* Заявка с kplazma.ru *\n\n` +
            `* Имя:* ${body.name ? body.name : ' отсутствует'}\n` +
            `* Телефон:* ${body.phone ? body.phone : ' отсутствует'}\n` +
            `* Сообщение:* ${body.message ? body.message : ' отсутствует'}\n` +
            `* Стоимость сборов на калькуляторе:* ${body.result ? body.result : 0}`);
        await send('nastya@kplazma.ru')

        return res.status(200).json({ status: 'Сообщение отправлено!' });
    } catch (error) {
        return res.status(500).json({ status: 'Ошибка отправки' });
    }
};