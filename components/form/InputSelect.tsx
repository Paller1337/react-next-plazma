import { CSSProperties, ChangeEvent, useEffect, useState } from 'react';


interface InputSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    options?: string[]
}

export default function InputRange(props: InputSelectProps) {
    const [value, setValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [optHeight, setOptHeight] = useState(0)

    useEffect(() => {
        if (props.options) {
            setValue(props.options[0])
            setOptHeight(props.options.length * 40)
        }
    }, [props.options])

    const changeValue = (x: string) => {
        setIsOpen(false)
        setValue(x)
    }

    const optionsStyle = {
        height: optHeight
    } as CSSProperties

    return (<>
        <div className='input input-select'>
            {props.label ?
                <label className='label'>{props.label}</label>
                : <></>
            }

            {/* <input className='strict-input slider-progress' {...props} type='select' /> */}
            <div className='input-select__select'>
                <div className={`input-select__now ${isOpen ? 'opened' : ''}`} onClick={() => setIsOpen(curr => !curr)}>{value}</div>

                <div className={`input-select__options ${isOpen ? 'opened' : ''}`}
                    style={isOpen ? optionsStyle : {}}
                >
                    {props.options && props.options.length > 0 ?
                        props.options.map((x, i) =>
                            <div key={i} className='input-select__option' onClick={() => changeValue(x)}>{x}</div>
                        )
                        : <></>}
                </div>
            </div>
        </div>
    </>)
}