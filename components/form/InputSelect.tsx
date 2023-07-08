import { CSSProperties, ChangeEvent, useEffect, useRef, useState } from 'react';


interface InputSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    options?: optionType[]
    changeValue: (value: number) => void
    // triggerCalc: () => void
}

interface optionType {
    label: string,
    value: number
}

export default function InputRange(props: InputSelectProps) {
    const [value, setValue] = useState<optionType>(props.options ? props.options[0] : {
        label: '',
        value: 0
    })
    const [isOpen, setIsOpen] = useState(false)
    const [optHeight, setOptHeight] = useState(0)
    const selectRef = useRef(null)

    const changeValue = (x: optionType) => {
        setIsOpen(false)
        setValue(x)
    }

    useEffect(() => {
        if (selectRef.current) {
            const select = selectRef.current as HTMLElement

            const handleClickOutside = (event: MouseEvent) => {
                if (select && !select.contains(event.target as Node)) {
                    setIsOpen(false)
                }
            }

            if (document) {
                document.addEventListener('click', handleClickOutside)

                return () => {
                    document.removeEventListener('click', handleClickOutside)
                }
            }
        }
    }, [selectRef.current])

    useEffect(() => {
        if (props.options) {
            setOptHeight(props.options.length * 40)
        }
    }, [props.options])

    useEffect(() => {
        if (props.changeValue) {
            props.changeValue(value.value)
            // if (props.triggerCalc) {
            //     props.triggerCalc()
            // }
        }
    }, [value])

    const optionsStyle = {
        height: optHeight
    } as CSSProperties

    return (<>
        <div ref={selectRef} className='input input-select'>
            {props.label ?
                <label className='label'>{props.label}</label>
                : <></>
            }

            {/* <input className='strict-input slider-progress' {...props} type='select' /> */}
            <div className='input-select__select'>
                <div className={`input-select__now ${isOpen ? 'opened' : ''}`} onClick={() => setIsOpen(curr => !curr)}
                >{value?.label}</div>

                <div className={`input-select__options ${isOpen ? 'opened' : ''}`}
                    style={isOpen ? optionsStyle : {}}
                >
                    {props.options && props.options.length > 0 ?
                        props.options.map((x, i) =>
                            <div key={i} className='input-select__option' onClick={() => changeValue(x)}>{x.label}</div>
                        )
                        : <></>}
                </div>
            </div>
        </div >
    </>)
}