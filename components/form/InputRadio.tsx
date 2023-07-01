
import { CSSProperties, ChangeEvent, useEffect, useState } from 'react';


interface InputRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    radioKey: string
    options: {
        name: string
        value: number
    }[]
}

export default function InputRadio(props: InputRadioProps) {
    // const [value, setValue] = useState('')
    // const [isOpen, setIsOpen] = useState(false)
    // const [optHeight, setOptHeight] = useState(0)

    // useEffect(() => {
    //     if (props.options) {
    //         setValue(props.options[0])
    //         setOptHeight(props.options.length * 40)
    //     }
    // }, [props.options])

    // const changeValue = (x: string) => {
    //     setIsOpen(false)
    //     setValue(x)
    // }

    // const optionsStyle = {
    //     height: optHeight
    // } as CSSProperties

    return (<>
        <div className='input input-radio'>
            {props.label ?
                <span className='label'>{props.label}</span>
                : <></>
            }

            <div className='input-radio__btn-wrap'>

                {props.options && props.options.length > 0 ?
                    props.options.map((x, i) =>
                        <div key={i} className='input-radio__btn'>
                            <input id={props.radioKey + '-' + i} type="radio" name={props.radioKey} value={x.value} />
                            <label htmlFor={props.radioKey + '-' + i}>{x.name}</label>
                        </div>
                    )
                    : <></>}
            </div>


            {/* <div className='input-select__select'>
                <div className='input-select__now' onClick={() => setIsOpen(curr => !curr)}>{value}</div>

                <div className={`input-select__options ${isOpen ? 'opened' : ''}`}
                    style={isOpen ? optionsStyle : {}}
                >

                </div>
            </div> */}
        </div>
    </>)
}