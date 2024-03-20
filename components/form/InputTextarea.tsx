import { ChangeEvent, useState } from 'react';


interface InputTextProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
}

export default function InputTextarea(props: InputTextProps) {

    return (<>
        <div className='input input-range'>
            {props.label ?
                <label className='label'>{props.label}</label>
                : <></>
            }


            <textarea className='strict-input textarea' {...props} />
        </div>
    </>)
}