import { useState } from 'react';
import InputText from './form/InputText';
import InputTextarea from './form/InputTextarea';
import toast from 'react-hot-toast';

export default function SportObjectForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        if (!name || !phone) {
            toast.error('Заполните необходимые поля', {
                duration: 3000,
                style: {
                    fontSize: 15,
                    borderRadius: 0,
                    border: '1px solid #393939',
                    padding: '12px 18px'
                }
            });
            setError(true)
            return
        }
        const data = {
            name,
            phone,
        };


        // fetch('/api/sport-feedback', {
        //     method: 'post',
        //     body: JSON.stringify(data),
        // })
        //     .then(async res => {
        //         if (res.status === 200) {
        //             const data = await res.json()
        //             toast.success(data.status, {
        //                 duration: 3000,
        //                 style: {
        //                     fontSize: 15,
        //                     borderRadius: 0,
        //                     border: '1px solid #393939',
        //                     padding: '12px 18px'
        //                 }
        //             });
        //         } else {
        //             const data = await res.json()
        //             toast.error(data.status, {
        //                 duration: 3000,
        //                 style: {
        //                     fontSize: 15,
        //                     borderRadius: 0,
        //                     border: '1px solid #393939',
        //                     padding: '12px 18px'
        //                 }
        //             });
        //         }
        //     })
        //     .then(res => {
        //     })
    }

    return (
        <div className='sport-object-form container'>
            <span className='sport-object-form__heading'>Остались вопросы?</span>
            <span className='sport-object-form__desc'>
                Мы поможем вам забронировать спортивный объект,
                а также ответим на все сопутствующие вопросы.
            </span>
            
            <div className='sport-object-form__wrapper'>
                <InputText placeholder='Имя Фамилия'
                    onChange={(e) => setName(e.target.value)} isError={error && !name ? true : false} />

                <InputText placeholder='+7 (900) 000-00-00'
                    onChange={(e) => setPhone(e.target.value)} isError={error && !phone ? true : false} />

                <div className='btn btn_black' onClick={handleSubmit}>Позвоните мне</div>
            </div>
        </div>
    )
}