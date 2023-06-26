import { ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react'

export type BtnColor = 'Gray' | 'WhiteGray' | 'White' | 'WhiteStroke'

export interface ButtonProps extends React.ComponentProps<'div'> {
    size?: number
    shadow?: boolean
    className?: string
    color?: BtnColor
    text?: string | number | ReactElement | ReactFragment | ReactPortal
    disabled?: boolean
    //style?: string
}

const ButtonColor = {
    Gray: ' btn gray',
    WhiteGray: ' btn white-gray',
    White: ' btn white',
    WhiteStroke: ' btn white-stroke'
}

export default function Button(props: ButtonProps) {

    const colSize = props.size ? ' col-' + props.size : ''
    const shadow = props.shadow ? ' btn-shadow' : ''

    const [disabled, setDisabled] = useState(props.disabled ?? false)
    const [isHovering, setIsHovering] = useState(false)
    const [text, setText] = useState(props.text)
    const [color, setColor] = useState(props.color ?? 'White')


    return (
        <div
            className={(disabled ? 'btn-disabled ' : '') + (props.className ?? '') +
                ButtonColor[color]
            }
            style={{ pointerEvents: disabled ? 'none' : 'initial' }}
            onClick={props.onClick}>

            <span className='btn-text'>{text}</span>
        </div >
    )
}