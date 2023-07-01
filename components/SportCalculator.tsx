import InputRadio from './form/InputRadio';
import InputRange from './form/InputRange';
import InputSelect from './form/InputSelect';
import InputText from './form/InputText';




interface SportCalculatorProps {
    name?: string
}

export default function SportCalculator(props: SportCalculatorProps) {



    return (<>
        <div className='sport-calculator'>
            <InputRange label='Количество спортсменов' min={0} max={50} type='range' />
            <InputRange label='Количество тренеров и других сотрудников' min={0} max={15} type='range' />
            <InputRange label='Количество дней' min={0} max={25} type='range' />
            <InputSelect label='Проживание для спортсменов' options={['1', '2', '3']} />
            <InputSelect label='Проживание для тренеров и других сотрудников' options={['1', '2', '3']} />


            <InputRange label='Количество номеров для тренеров и других сотрудников' min={0} max={15} type='range' />
            <InputRange label='Сколько дней вы будете тренироваться в манеже?' min={0} max={21} type='range' />

            <InputSelect label='Сколько часов в день вы будете тренироваться в манеже?' options={['1', '2', '3']} />

            <InputRadio label='Питание для спортсменов на сутки' radioKey='key1' options={[
                { value: 1200, name: 'Наше меню — от 1 200 ₽' },
                { value: 100, name: 'Индивидуальное меню' },
            ]} />

            <InputRange label='Сколько дней вы будете тренироваться на волейбольной площадке?' min={0} max={21} type='range' />

            <InputSelect label='Сколько часов вы будете тренироваться на волейбольной площадке?' options={['1', '2', '3']} />

            <InputText label='Имя' placeholder='Имя Фамилия' />
        </div>
    </>)
}