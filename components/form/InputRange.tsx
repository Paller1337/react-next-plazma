import { ChangeEvent, useState } from 'react';

interface InputRangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export default function InputRange(props: InputRangeProps) {
    const [value, setValue] = useState<number>(0);
    const min = props.min !== undefined ? props.min : 0;
    const max = props.max !== undefined ? props.max : 50;

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value))
    }

    const inputStyle = {
        '--value': value,
        '--min': min,
        '--max': max,
    } as React.CSSProperties;

    const maxToNum = typeof (max) === 'string' ? parseInt(max) : max
    const tableStyle = {
        left: `${100 / maxToNum * value}%`
    }



    return (<>
        <div className='input input-range'>
            {props.label ?
                <label className='label'>{props.label}</label>
                : <></>}


            <div className='input-range__table--wrapper'>
                <div className='input-range__table' style={tableStyle}>
                    <span className='input-range__table-text'>
                        {value}
                    </span>
                </div>
            </div>

            <input min={min} max={max} className='strict-input slider-progress' {...props} style={inputStyle}
                onChange={(e) => inputOnChange(e)} defaultValue={0} />

            <div className='input-range__labels'>
                <span className='strict-input__label label_min'>{min}</span>
                <span className='strict-input__label label_max'>{max}</span>
            </div>
        </div>
    </>)
}