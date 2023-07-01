import { ChangeEvent, useState } from 'react';


interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export default function InputRange(props: InputTextProps) {

    return (<>
        <div className='input input-range'>
            {props.label ?
                <label className='label'>{props.label}</label>
                : <></>
            }


            <input className='strict-input slider-progress' {...props} type='text' />
        </div>
    </>)
}