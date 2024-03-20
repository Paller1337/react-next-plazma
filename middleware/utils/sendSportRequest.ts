import fs from 'fs'
import axios from 'axios'
import FormData from 'form-data'
import ExcelJS from 'exceljs'
import { DateTime } from 'luxon';

export interface SportRequestFormData {
    sport?: string;
    dateIn?: string;
    dateOut?: string;
    team?: {
        name: string;
        size: number;
    };
    sportArea?: string;
    trainingDuration?: string;
    name: string;
    phone: string;
    comment?: string;
}

// Выносим BOT_TOKEN и CHAT_ID в отдельные переменные
// const BOT_TOKEN = 'ВАШ_BOT_TOKEN';
// const CHAT_ID = 'ВАШ_CHAT_ID';
// const BOT_TOKEN = '6855526888:AAEDn9Llk6k8gd_3T9eRHMwGTzIB9225xuY'
// const CHAT_ID = '-1001934278839'


export async function sendMessageWithDocument(data: SportRequestFormData, utm: string, BOT_TOKEN, CHAT_ID) {
    // Создаем Excel файл
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Data');

    sheet.columns = [
        { key: 'A', width: 40 },
        { key: 'B', width: 70 }
    ];

    // Объединение ячеек для заголовка таблицы и его стилизация
    sheet.mergeCells('A1:B1');
    const titleCell = sheet.getCell('A1');
    titleCell.value = 'Заявка на проведение сборов в Парк-Отеле PLAZMA';
    titleCell.font = { name: 'Arial', size: 14, bold: true };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    titleCell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF0070C0' },
    };
    titleCell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
    }

    // Заполнение данных
    const fields = [
        { key: 'Дата проведения сборов', value: data.dateIn + (data.dateOut ? ` - ${data.dateOut}` : '') },
        { key: 'Вид спорта', value: data.sport || 'Не указано' },
        { key: 'Название команды', value: data.team?.name || 'Не указано' },
        { key: 'Кол-во человек в команде', value: data.team?.size || 'Не указано' },

        { key: 'Площадка для тренировок', value: data.sportArea || 'Не указано' },
        { key: 'Продолжительность тренировок', value: data.trainingDuration || 'Не указано' },

        { key: 'ФИО, Контактные данные', value: (data.name ? data.name + '; ' : 'Имя не указано; ') + (data.phone ? data.phone + '; ' : 'Телефон не указан; ') || 'Не указано' },
        { key: 'Комментарий', value: data.comment || 'Не указано' },
        // Продолжайте добавлять другие поля по аналогии...
    ];

    fields.forEach((field, index) => {
        let row = sheet.getRow(index + 2);
        row.height = 30
        row.alignment = {
            vertical: 'middle'
        }
        row.getCell(1).value = field.key;
        row.getCell(1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFFFC000' }, // Цвет заливки - жёлтый
        };
        row.getCell(1).font = {
            bold: true
        }
        row.getCell(1).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
        }
        row.getCell(2).value = field.value
        row.getCell(2).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
        }
        row.getCell(2).alignment = {
            horizontal: 'right',
            wrapText: true
        }
    })



    // Сохраняем Excel файл
    const nowDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED, { locale: 'ru' })
    const filePath = `./${nowDate}.xlsx`
    await workbook.xlsx.writeFile(filePath);

    // Формируем сообщение
    const message = `*Заявка с kplazma.ru *\n\n\n` +
        `*Вид спорта:* \n${data.sport ? data.sport : ' отсутствует'}\n\n` +
        `*Название команды:* \n${data.team?.name ? data.team?.name : ' отсутствует'}\n\n` +
        `*Заезд:* ${data.dateIn ? data.dateIn : ' отсутствует'}\n` +
        `*Выезд:* ${data.dateOut ? data.dateOut : ' отсутствует'}\n\n` +
        `*Количество человек:* \n${data.team?.size ? data.team?.size : ' отсутствует'}\n\n` +
        `*Площадка для тренировок:* \n${data.sportArea ? data.sportArea : ' отсутствует'}\n\n` +
        `*Продолжительность тренировок:* \n${data.trainingDuration ? data.trainingDuration : ' отсутствует'}\n\n` +
        `*ФИО:* \n${data.name ? data.name : ' отсутствует'}\n\n` +
        `*Телефон:* \n${data.phone ? data.phone : ' отсутствует'}\n\n` +
        `*Комментарий:* \n${data.comment ? data.comment : ' отсутствует'}\n` +
        `${utm ? '* UTM:* ' + utm : ''}`;

    // Создаем FormData для отправки файла и сообщения
    const formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('document', fs.createReadStream(filePath));
    formData.append('caption', message);
    formData.append('parse_mode', 'Markdown');

    // Отправляем файл и сообщение в Telegram
    try {
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, formData, {
            headers: formData.getHeaders(),
        });
        console.log('Сообщение и файл успешно отправлены');
    } catch (error) {
        console.error('Ошибка при отправке: ', error);
    } finally {
        // Удаляем файл после отправки
        fs.unlinkSync(filePath);
    }
}
