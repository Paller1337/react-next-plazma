import { useEffect, useState } from 'react';
import InputRadio from './form/InputRadio';
import InputRange from './form/InputRange';
import InputSelect from './form/InputSelect';
import InputText from './form/InputText';
import InputTextarea from './form/InputTextarea'
import toast, { Toaster } from 'react-hot-toast';
import { createPortal } from 'react-dom';
import { useMetrika } from './ym/YMContext';
import { useRouter } from 'next/router';



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

export default function SportCalculator(props: SportCalculatorProps) {
    const ym = useMetrika()
    const router = useRouter()

    const [error, setError] = useState(false)
    const [utm, setUtm] = useState('')

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const [result, setResult] = useState(0)
    const [p, setP] = useState(0)
    const [k, setK] = useState(0)
    const [c, setC] = useState(0)
    const [n, setN] = useState(0)
    const [nt, setNt] = useState(0)
    const [t, setT] = useState(0)
    const [md, setMd] = useState(0)
    const [m, setM] = useState(0)
    const [e, setE] = useState(0)
    const [vd, setVd] = useState(0)
    const [v, setV] = useState(0)

    useEffect(() => {
        const hashIndex = router.asPath.indexOf('#');
        if (hashIndex !== -1) {
            const afterHash = router.asPath.slice(hashIndex + 1);
            const questionMarkIndex = afterHash.indexOf('?');
            if (questionMarkIndex !== -1) {
                const queryParams = new URLSearchParams(afterHash.slice(questionMarkIndex + 1));
                const utm = queryParams.get('utm_campaign')
                if (utm) {
                    console.log('UTM:', utm);
                    setUtm(utm);
                }
            }
        }
    }, []);

    const calcResult = () => {
        const res = (p * n + nt * t + p * e + k * e) * c + m * md + v * vd
        setResult(res)
    }
    useEffect(() => calcResult(),
        [p, k, c, n, nt, t, md, m, e, vd, v]
    )

    // useEffect(() => {
    //     console.log('Стоимость: ', result)
    // }, [result])

    const metrikaSubmit = () => {
        ym.reachGoal('sportsCampSubmit')
        // toast('metrika send')
    }

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
            message,
            result,
            utm,
        };
        // console.log(data);



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



    return (<>
        {/* <SportCalculatorResult result={result} /> */}
        <div className='sport-calculator'>
            <div id='calculator' className='anchor' style={{ position: 'absolute', top: -200 }}></div>
            <InputRange name='p' label='Количество спортсменов' min={0} max={50} type='range'
                onChange={(e) => setP(parseInt(e.target.value))}
            />

            <InputRange name='k' label='Количество тренеров и других сотрудников' min={0} max={15} type='range'
                onChange={(e) => setK(parseInt(e.target.value))}
            />

            <InputRange name='c' label='Количество дней' min={0} max={25} type='range'
                onChange={(e) => setC(parseInt(e.target.value))} />

            <InputSelect name='n' label='Проживание для спортсменов' options={[
                {
                    label: 'Спортивный корпус по 4 человека = 850',
                    value: 850,
                },
                {
                    label: 'Спортивный корпус по 3 человека = 1050',
                    value: 1050,
                },
                {
                    label: 'Спортивный корпус по 2 человека = 1295',
                    value: 1295,
                },
                {
                    label: 'Номера делюкс по 3 человека = 1720',
                    value: 1720,
                },
                {
                    label: 'Номера делюкс по 2 человека = 2075',
                    value: 2075,
                },
            ]}
                changeValue={setN}
            />

            <InputSelect name='nt' label=' Проживание для тренеров и других сотрудников' options={[
                {
                    label: 'Спортивный корпус',
                    value: 2590,
                },
                {
                    label: 'Номер делюкс',
                    value: 5160,
                },
            ]}
                changeValue={setNt}
            />

            <InputRange name='t' label='Количество номеров для тренеров и других сотрудников' min={0} max={15} type='range'
                onChange={(e) => setT(parseInt(e.target.value))} />

            <InputRange name='md' label='Сколько дней вы будете тренироваться в манеже?' min={0} max={21} type='range'
                onChange={(e) => setMd(parseInt(e.target.value))} />

            <InputSelect name='m' label='Сколько часов в день вы будете тренироваться в манеже?' options={[
                {
                    label: '0',
                    value: 0,
                },
                {
                    label: '1',
                    value: 2700,
                },
                {
                    label: '2',
                    value: 5400,
                },
                {
                    label: '3',
                    value: 8100,
                },
                {
                    label: '4',
                    value: 8000,
                },
                {
                    label: '5',
                    value: 10000,
                },
                {
                    label: '6',
                    value: 12000,
                },
                {
                    label: '7',
                    value: 14000,
                },
            ]}
                changeValue={setM}
            />

            <InputRadio name='e' label='Питание для спортсменов на сутки' radioKey='key1' options={[
                { value: 1200, name: 'Наше меню — от 1 200 ₽' },
                { value: 100, name: 'Индивидуальное меню' },
            ]}
                changeValue={setE}
            />

            <InputRange name='vd' label='Сколько дней вы будете тренироваться на волейбольной площадке?' min={0} max={21} type='range'
                onChange={(e) => setVd(parseInt(e.target.value))} />

            <InputSelect name='v' label='Сколько часов вы будете тренироваться на волейбольной площадке?' options={[
                {
                    label: '0',
                    value: 0,
                },
                {
                    label: '1',
                    value: 700,
                },
                {
                    label: '2',
                    value: 1400,
                },
                {
                    label: '3',
                    value: 2100,
                },
                {
                    label: '4',
                    value: 2800,
                },
                {
                    label: '5',
                    value: 3500,
                },
                {
                    label: '6',
                    value: 4200,
                },
                {
                    label: '7',
                    value: 4900,
                },
                {
                    label: 'Весь день',
                    value: 7000,
                },
            ]}
                changeValue={setV}
            />

            <InputText label='Имя' placeholder='Имя Фамилия'
                onChange={(e) => setName(e.target.value)} isError={error && !name ? true : false} />

            <InputText label='Телефон' placeholder='+7 (900) 000-00-00'
                onChange={(e) => setPhone(e.target.value)} isError={error && !phone ? true : false} />

            <InputTextarea label='Сообщение' placeholder='По желанию вы можете сразу описать свой вопрос, чтобы мы позвонили вам с готовым ответом.'
                onChange={(e) => setMessage(e.target.value)} />
            <div className='btn btn_black' onClick={handleSubmit}>Позвоните мне</div>



            {/* <div className='btn btn_black' onClick={metrikaSubmit}
                style={{ color: '#dcdcdc', marginTop: 300, fontSize: 12, borderColor: '#fff', background: '#fff' }}>Метрика тест</div> */}
        </div>
    </>)
}