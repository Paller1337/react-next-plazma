import { ChangeEvent, useState } from 'react';


interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    isError?: boolean
}

export default function InputText(props: InputTextProps) {

    return (<>
        <div className={`input input-range ${props.isError ? 'b-error' : ''}`}>
            {props.label ?
                <label className='label'>{props.label}</label>
                : <></>
            }

            
            <input className={`strict-input slider-progress ${props.isError ? 'b-error' : ''}`} {...props} type={props.type ?? 'text'} />
        </div>
    </>)
}