import { Suspense, useEffect, useRef } from 'react'

interface VideoProps {
    className?: string
    muted?: boolean
    loop?: boolean
    autoPlay?: boolean
    playsInline?: boolean
    src?: {
        mp4?: string
        webm?: string
    }
}





export default function Video(props: VideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const videoAttrs = {
        className: props.className,
        muted: props.muted && true,
        loop: props.loop && true,
        autoPlay: props.autoPlay && true,
        playsInline: props.playsInline && true,
    }


    useEffect(() => {
        if (videoRef.current) {
            const options = {
                threshold: 0.5, // Когда видео показывается наполовину, начать его загрузку
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && videoRef.current) {
                        videoRef.current.src = props.src?.mp4 || props.src?.webm || '';
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            observer.observe(videoRef.current);

            return () => {
                if (videoRef.current) {
                    observer.unobserve(videoRef.current);
                }
            }
        }
    }, [props.src])


    return (<>
        <video ref={videoRef} {...videoAttrs}>
            {props.src && props.src?.mp4 ?
                <source src={props.src.mp4} type="video/mp4" /> : <></>}
            {props.src && props.src?.webm ?
                <source src={props.src.webm} type="video/mp4" /> : <></>}
            Your browser does not support the video tag.
        </video>
    </>)
}