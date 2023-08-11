import { DEFAULTS } from 'defaults'
import { CSSProperties } from 'react'




interface TextBlockProps {
    title?: {
        type: 'h1' | 'h2' | 'h3' | 'h4'
        text: string
    }
    description?: string | string[]
    btn?: {
        text: string
        link?: string
    }
    style?: CSSProperties
    className?: string
}


export default function TextBlock(props: TextBlockProps) {

    return (<>
        <div className={`text-section text-section_big ${props.className}`} style={props.style} data-scroll-section
            data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
            {props.title ? <span className={`${props.title.type}-title`}>{props.title.text}</span>
                : <></>}

            {typeof props.description === 'string' ?
                <span className='text' dangerouslySetInnerHTML={{ __html: props.description }} />
                : typeof props.description === 'object' ?
                    props.description.map((x, i) =>
                        <span key={i} className='text' dangerouslySetInnerHTML={{ __html: x }} />
                    ) : <></>
            }
        </div>
    </>)
}