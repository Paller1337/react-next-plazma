import { DEFAULTS } from 'defaults'
import YouTube from 'react-youtube'

interface YoutubeVideoProps {
    title?: string
    desc?: string
    src: string
    reverse?: boolean
}

export default function YoutubeVideo(props: YoutubeVideoProps) {


    return (<>
        <div className='page-index__about-hotel about-hotel container' data-scroll-section>
            <div className={`about-hotel__wrapper ${props.reverse ? 'reverse' : ''}`}
                data-aos={DEFAULTS.AOS.animation} data-aos-duration={DEFAULTS.AOS.duration} data-aos-once={DEFAULTS.AOS.once}>
                <div className='about-hotel__about'
                    style={{ width: '100%' }}>
                    <span className='about-hotel__text'>{props.title}</span>
                    <span className='about-hotel__desc'>
                        {props.desc}
                    </span>
                </div>

                <YouTube
                    className='about-hotel__img youtube-frame'
                    videoId={props.src}
                />
            </div>

        </div>
    </>)
}