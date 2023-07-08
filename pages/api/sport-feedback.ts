import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer";

type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);
    // console.log(body);
    // res.status(200).json({ status: 'OK' });

    const transporter = nodemailer.createTransport({
        host: "mail.kplazma.ru",
        port: 465,
        secure: true,
        auth: {
            user: 'noreply@kplazma.ru',
            pass: process.env.SMTP_PASS
        }
    });

    const send = async (toEmail: string) => {
        await transporter.sendMail({
            from: 'noreply@kplazma.ru',
            to: toEmail,
            subject: `${body.name} просит связаться`,
            html: `<p>Спортивные сборы kplazma.ru, нужно позвонить</p><br>
            <p><strong>Телефон: </strong> ${body.phone}</p><br>
            <p><strong>Сообщение: </strong> ${body.message}</p><br>
            <p><strong>Стоимость сборов на калькуляторе: </strong> ${body.result}</p><br>
          `
        });
    }

    try {
        await send('max.paller@yandex.ru')
        await send('max@kplazma.ru')

        return res.status(200).json({ status: 'Сообщение отправлено!' });
    } catch (error) {
        return res.status(500).json({ status: 'Ошибка отправки' });
    }
};