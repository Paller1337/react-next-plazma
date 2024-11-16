import { useEffect, useRef, useState } from 'react'
import InputRadio from './form/InputRadio';
import InputRange from './form/InputRange';
import InputSelect from './form/InputSelect';
import InputText from './form/InputText';
import InputTextarea from './form/InputTextarea'
import toast, { Toaster } from 'react-hot-toast';
import { createPortal } from 'react-dom';
import { useMetrika } from './ym/YMContext';
import { useRouter } from 'next/router';
import luxon, { DateTime } from 'luxon';
import { useCookies } from 'react-cookie'
import { DatePicker } from '@mantine/dates'
import 'dayjs/locale/ru'
import { useClickOutside } from '@mantine/hooks';


interface SportCalculatorProps {
    name?: string
}

interface humanInfo {
    name?: string
    phone?: string
}


const SportCalculatorResult = (props: { result: number }) => {
    const [browserLoad, setBrowserLoad] = useState(false)
    const [result, setResult] = useState(props.result)
    const [visible, setVisible] = useState(false)
    useEffect(() => setResult(props.result), [props.result])

    useEffect(() => setBrowserLoad(true), [])

    const handleVisible = () => {
        const calc = document.querySelector('.sport-calculator');
        if (calc) {
            const calcPosition = calc.getBoundingClientRect();
            const wh = window.innerHeight

            if (calcPosition.top < wh / 1.3 && calcPosition.bottom > wh / 2) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleVisible)
        return () => window.removeEventListener('scroll', handleVisible)
    }, [])


    if (!browserLoad) return null
    return createPortal(<>
        <div className={`sport-calculator__result mobile ${!visible ? 'hidden' : ''}`}>
            Итого: {result} Рублей
        </div>
    </>, document.body)
}

export interface SportRequestFormData {
    sport?: string,
    dateIn?: string,
    dateOut?: string,
    team?: {
        name: string,
        size: number,
    },
    sportArea?: string,
    trainingDuration?: string,
    name: string,
    phone: string,
    comment?: string
}

export default function SportRequest(props: SportCalculatorProps) {
    const ym = useMetrika()
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(['utm']);

    const [error, setError] = useState(false)
    const [utm, setUtm] = useState('')

    const [formState, setFormState] = useState({
        sport: '',
        dateIn: '',
        dateOut: '',
        team: {
            name: '',
            size: 0,
        },
        sportArea: '',
        trainingDuration: '',
        name: '',
        phone: '',
        comment: ''
    })

    // const [name, setName] = useState('')
    // const [phone, setPhone] = useState('')
    // const [message, setMessage] = useState('')
    const nowDate = DateTime.now().toJSDate()
    const [datePickerInValue, setDatePickerInValue] = useState<Date>(DateTime.now().toJSDate())
    const [datePickerOutValue, setDatePickerOutValue] = useState<Date>(DateTime.now().plus({ day: 1 }).toJSDate())

    const [datePickerInVisible, setDatePickerInVisible] = useState(false)
    const [datePickerOutVisible, setDatePickerOutVisible] = useState(false)

    const dateInRef = useClickOutside(() => setDatePickerInVisible(false))
    const dateOutRef = useClickOutside(() => setDatePickerOutVisible(false))

    const pageQuery = router.query

    useEffect(() => {
        const utmCookie = cookies.utm

        if (pageQuery) {
            if (utmCookie) {
                console.log('utm-cookie: ', utmCookie)
                setUtm(utmCookie)
            }
            if (pageQuery.utm_campaign) {
                setUtm(pageQuery.utm_campaign.toString())
                setCookie('utm', `${pageQuery.utm_campaign.toString()}_${DateTime.now().toLocaleString()}-${DateTime.now().hour}.${DateTime.now().minute}`)
            }
        }
        console.log('utm: ', utm)
    }, [pageQuery]);




    // useEffect(() => {
    //     console.log('Стоимость: ', result)
    // }, [result])

    const metrikaSubmit = () => {
        ym.reachGoal('sportsCampSubmit')
        // toast('metrika send')
    }

    const handleSubmit = () => {
        if (!formState.name || !formState.phone) {
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
            data: formState,
            utm,
        }

        fetch('/api/sport-feedback', {
            method: 'post',
            body: JSON.stringify(data),
        })
            .then(async res => {
                if (res.status === 200) {
                    const data = await res.json()
                    toast.success(data.status, {
                        duration: 3000,
                        style: {
                            fontSize: 15,
                            borderRadius: 0,
                            border: '1px solid #393939',
                            padding: '12px 18px'
                        }
                    });
                    metrikaSubmit()
                } else {
                    const data = await res.json()
                    toast.error(data.status, {
                        duration: 3000,
                        style: {
                            fontSize: 15,
                            borderRadius: 0,
                            border: '1px solid #393939',
                            padding: '12px 18px'
                        }
                    });
                }
            })
            .then(res => {
            })
    }


    useEffect(() => {
        console.log('form: ', formState)
    }, [formState])

    return (<>
        {/* <SportCalculatorResult result={result} /> */}
        <div className='sport-calculator'>
            <span>{utm}</span>
            <div id='calculator' className='anchor' style={{ position: 'absolute', top: -200 }}></div>


            <InputText label='Вид спорта' placeholder='Например: Баскетбол'
                onChange={(e) => setFormState(prev => ({ ...prev, sport: e.target.value }))}
            />

            <div className='sport-calculator__dates'>
                <div className='sport-calculator__date'>
                    <InputText
                        label='Заезд' placeholder=''
                        onClick={e => e.preventDefault()}
                        value={DateTime.fromJSDate(datePickerInValue).toFormat('yyyy-MM-dd')}
                        onSelect={() => setDatePickerInVisible(true)}
                        type='date'
                    />

                    <div ref={dateInRef} className={`sport-calculator__datepicker ${datePickerInVisible ? 'visible' : ''}`}>
                        <DatePicker locale="ru" size='md' numberOfColumns={1}
                            onChange={(e) => {
                                setDatePickerInVisible(false)
                                setDatePickerInValue(e)
                                setFormState(p => ({ ...p, dateIn: DateTime.fromJSDate(e).toFormat('yyyy-MM-dd') }))
                            }}
                            minDate={DateTime.now().toJSDate()}
                            onBlur={() => setDatePickerOutVisible(false)}
                        />
                    </div>
                </div>
                <div className='sport-calculator__date-separator'>-</div>
                <div ref={dateOutRef} className='sport-calculator__date'>
                    <InputText
                        label='Выезд' placeholder=''
                        onClick={e => e.preventDefault()}
                        value={DateTime.fromJSDate(datePickerOutValue).toFormat('yyyy-MM-dd')}
                        onSelect={() => setDatePickerOutVisible(true)}
                        type='date'
                    />

                    <div className={`sport-calculator__datepicker right ${datePickerOutVisible ? 'visible' : ''}`}>
                        <DatePicker locale="ru" size='md' numberOfColumns={1}
                            onChange={(e) => {
                                setDatePickerOutVisible(false)
                                setDatePickerOutValue(e)
                                setFormState(p => ({ ...p, dateOut: DateTime.fromJSDate(e).toFormat('yyyy-MM-dd') }))
                            }}
                            minDate={datePickerInValue}
                            onBlur={() => setDatePickerOutVisible(false)}
                        />
                    </div>
                </div>
            </div>

            <InputText label='Название команды' placeholder='Например: Чемпионы'
                onChange={(e) => setFormState(p => ({ ...p, team: { ...p.team, name: e.target.value } }))} />

            <InputText label='Количество человек' placeholder='15'
                onChange={(e) => setFormState(p => ({ ...p, team: { ...p.team, size: parseInt(e.target.value) } }))} type='number' />

            <InputTextarea
                label='Площадка для тренировок'
                placeholder='Опишите необходимое вам помещение, покрытие, площадь.'
                onChange={(e) => setFormState(p => ({ ...p, sportArea: e.target.value }))}
                rows={2}
            />

            <InputTextarea label='Продолжительность тренировок' placeholder='Например: Ежедневно по 4 часа.'
                onChange={(e) => setFormState(p => ({ ...p, trainingDuration: e.target.value }))} rows={2} />

            <InputText label='ФИО' placeholder='Имя Фамилия'
                onChange={(e) => setFormState(p => ({ ...p, name: e.target.value }))}
                isError={error && !formState.name ? true : false} />

            <InputText label='Телефон' placeholder='+7 (900) 000-00-00'
                onChange={(e) => setFormState(p => ({ ...p, phone: e.target.value }))}
                isError={error && !formState.phone ? true : false} />

            <InputTextarea
                label='Комментарий'
                placeholder='По желанию вы можете сразу описать свой вопрос, чтобы мы позвонили вам с готовым ответом.'
                onChange={(e) => setFormState(p => ({ ...p, comment: e.target.value }))}
                rows={5}
            />

            <div className='btn btn_black' onClick={handleSubmit}>Позвоните мне</div>



            {/* <div className='btn btn_black' onClick={metrikaSubmit}
                style={{ color: '#dcdcdc', marginTop: 300, fontSize: 12, borderColor: '#fff', background: '#fff' }}>Метрика тест</div> */}
        </div>
    </>)
}