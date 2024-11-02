import { IVKGroupWallPost } from '@/mw/types/VKGroupWallPost'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { FreeMode, Pagination } from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import TextBlock from './TextBlock'
import { getVkWall } from '@/mw/utils/getVkWall'

interface NewsItemProps {
    general?: boolean
    index: number
    post: IVKGroupWallPost[]
}

const NewsItem = (props: NewsItemProps) => {
    const post = props.post[props.index]
    const img = post?.attachments[0]?.photo.sizes.find(x => x.height > 510 && x.width > 710)
    const date = DateTime.fromSeconds(post?.date ?? 0).toLocaleString(DateTime.DATETIME_MED)
    return (
        <>
            <div className={`sports-news__item ${props.general ? 'general' : 'min'}`}>
                {img ? <img src={img.url} alt='' className='sports-news__item-img' /> : <></>}

                {post ? <Link href={`https://vk.com/plazma.sport?w=wall-218633598_${post.id}`}
                    className='sports-news__item-footer' target='_blank' >
                    <>
                        <div className='sports-news__item-meta'>
                            <span className='news-meta-content'>
                                {post.views.count}
                                <ReactSVG src='/svg/eye.svg' className='svg-meta' />
                            </span>
                            <span className='news-meta-content'>
                                {date}
                                <ReactSVG src='/svg/calendar.svg' className='svg-meta' />
                            </span>
                        </div>
                        <span>{post.text}</span>
                        <ReactSVG src='/svg/link.svg' className='svg-link' />
                    </>
                </Link> : <></>}
            </div>
        </>
    )
}
export default function SportNews(props) {
    const [vkGroudPosts, setVkGroudPosts] = useState<IVKGroupWallPost[]>([])
    const [loading, setLoading] = useState(true)

    const containerRef = useRef(null)
    const [swiperWidth, setSwiperWidth] = useState(0)


    // const getNews = async () => {
    //     const news = await getVkWall()
    //     setVkGroudPosts(news)
    // }
    // useEffect(() => {
    //     getNews()
    // }, [])

    useEffect(() => {
        console.log('vk: ', vkGroudPosts)
    }, [vkGroudPosts])

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current as HTMLElement
            setSwiperWidth(container.clientWidth)
        }
    }, [containerRef.current])

    return (<>
        {vkGroudPosts ? <>
            <TextBlock title={{ type: 'h2', text: 'Последние события' }}
                style={{ paddingBottom: 0, }}
            />

            <div className='sports-news container'>
                <NewsItem post={vkGroudPosts} index={0} general />
                <div className='sports-news__wrapper-min'>
                    <NewsItem post={vkGroudPosts} index={1} />
                    <NewsItem post={vkGroudPosts} index={2} />
                </div>
            </div>

            <div className='sports-news news-slider container'>
                <NewsItem post={vkGroudPosts} index={0} general />
                <NewsItem post={vkGroudPosts} index={1} general />
                <NewsItem post={vkGroudPosts} index={2} general />
            </div>
        </> : <></>}
    </>)
}