import Head from 'next/head'
import { useMediaQuery } from '@mantine/hooks'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { MdAdd, MdFullscreen, MdFullscreenExit, MdRemove } from 'react-icons/md'

const MAP_WIDTH = 9955
const MAP_HEIGHT = 14065
const MAX_ZOOM = 1
const MIN_ZOOM = 0.01

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
const getTouchDistance = (touches: TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX
    const dy = touches[0].clientY - touches[1].clientY

    return Math.hypot(dx, dy)
}
const getTouchCenter = (touches: TouchList) => ({
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2,
})

export default function TerritoryMapPage() {
    const isMobile = useMediaQuery('(max-width: 620px)')
    const viewerRef = useRef<HTMLDivElement | null>(null)
    const objectUrlRef = useRef<string | null>(null)
    const userChangedZoomRef = useRef(false)
    const zoomRef = useRef(0.05)
    const fitZoomRef = useRef(0.05)
    const pinchStateRef = useRef<{ startDistance: number, startZoom: number } | null>(null)

    const [mapSrc, setMapSrc] = useState<string | null>(null)
    const [progress, setProgress] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [zoom, setZoom] = useState(0.05)
    const [fitZoom, setFitZoom] = useState(0.05)
    const [viewerSize, setViewerSize] = useState({ width: 0, height: 0 })
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    const getFitZoom = useCallback(() => {
        const viewer = viewerRef.current

        if (!viewer) {
            return fitZoomRef.current
        }

        const nextFitZoom = Math.min(viewer.clientWidth / MAP_WIDTH, viewer.clientHeight / MAP_HEIGHT)

        return clamp(nextFitZoom, MIN_ZOOM, MAX_ZOOM)
    }, [])

    const setZoomWithCenter = useCallback((nextZoom: number, markAsUserChange = true) => {
        const viewer = viewerRef.current
        const currentZoom = zoomRef.current
        const minZoom = Math.max(fitZoomRef.current * 0.5, MIN_ZOOM)
        const normalizedZoom = clamp(nextZoom, minZoom, MAX_ZOOM)

        if (!viewer) {
            zoomRef.current = normalizedZoom
            setZoom(normalizedZoom)
            return
        }

        const currentWidth = MAP_WIDTH * currentZoom
        const currentHeight = MAP_HEIGHT * currentZoom
        const currentLeft = Math.max((viewer.clientWidth - currentWidth) / 2, 0)
        const currentTop = Math.max((viewer.clientHeight - currentHeight) / 2, 0)
        const centerX = clamp((viewer.scrollLeft + viewer.clientWidth / 2 - currentLeft) / currentWidth, 0, 1)
        const centerY = clamp((viewer.scrollTop + viewer.clientHeight / 2 - currentTop) / currentHeight, 0, 1)

        userChangedZoomRef.current = markAsUserChange
        zoomRef.current = normalizedZoom
        setZoom(normalizedZoom)

        requestAnimationFrame(() => {
            const nextWidth = MAP_WIDTH * normalizedZoom
            const nextHeight = MAP_HEIGHT * normalizedZoom
            const nextLeft = Math.max((viewer.clientWidth - nextWidth) / 2, 0)
            const nextTop = Math.max((viewer.clientHeight - nextHeight) / 2, 0)

            viewer.scrollLeft = nextLeft + nextWidth * centerX - viewer.clientWidth / 2
            viewer.scrollTop = nextTop + nextHeight * centerY - viewer.clientHeight / 2
        })
    }, [])

    const setZoomAroundPoint = useCallback((nextZoom: number, clientX: number, clientY: number) => {
        const viewer = viewerRef.current
        const currentZoom = zoomRef.current
        const minZoom = Math.max(fitZoomRef.current * 0.5, MIN_ZOOM)
        const normalizedZoom = clamp(nextZoom, minZoom, MAX_ZOOM)

        if (!viewer) {
            zoomRef.current = normalizedZoom
            setZoom(normalizedZoom)
            return
        }

        const rect = viewer.getBoundingClientRect()
        const pointX = clientX - rect.left
        const pointY = clientY - rect.top
        const currentWidth = MAP_WIDTH * currentZoom
        const currentHeight = MAP_HEIGHT * currentZoom
        const currentLeft = Math.max((viewer.clientWidth - currentWidth) / 2, 0)
        const currentTop = Math.max((viewer.clientHeight - currentHeight) / 2, 0)
        const mapX = clamp((viewer.scrollLeft + pointX - currentLeft) / currentWidth, 0, 1)
        const mapY = clamp((viewer.scrollTop + pointY - currentTop) / currentHeight, 0, 1)

        userChangedZoomRef.current = true
        zoomRef.current = normalizedZoom
        setZoom(normalizedZoom)

        requestAnimationFrame(() => {
            const nextWidth = MAP_WIDTH * normalizedZoom
            const nextHeight = MAP_HEIGHT * normalizedZoom
            const nextLeft = Math.max((viewer.clientWidth - nextWidth) / 2, 0)
            const nextTop = Math.max((viewer.clientHeight - nextHeight) / 2, 0)

            viewer.scrollLeft = nextLeft + nextWidth * mapX - pointX
            viewer.scrollTop = nextTop + nextHeight * mapY - pointY
        })
    }, [])

    const fitMapToViewer = useCallback(() => {
        const nextFitZoom = getFitZoom()

        fitZoomRef.current = nextFitZoom
        setFitZoom(nextFitZoom)
        setZoomWithCenter(nextFitZoom, false)
        userChangedZoomRef.current = false
    }, [getFitZoom, setZoomWithCenter])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', '/img/map.png', true)
        xhr.responseType = 'blob'

        xhr.onprogress = (event) => {
            if (event.lengthComputable) {
                setProgress(Math.round((event.loaded / event.total) * 100))
            }
        }

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const objectUrl = URL.createObjectURL(xhr.response)

                objectUrlRef.current = objectUrl
                setMapSrc(objectUrl)
                setProgress(100)
            } else {
                setHasError(true)
            }
        }

        xhr.onerror = () => setHasError(true)
        xhr.send()

        return () => {
            xhr.abort()

            if (objectUrlRef.current) {
                URL.revokeObjectURL(objectUrlRef.current)
            }
        }
    }, [])

    useEffect(() => {
        const viewer = viewerRef.current

        if (!viewer) {
            return
        }

        const resizeObserver = new ResizeObserver(() => {
            setViewerSize({
                width: viewer.clientWidth,
                height: viewer.clientHeight,
            })

            const nextFitZoom = Math.min(viewer.clientWidth / MAP_WIDTH, viewer.clientHeight / MAP_HEIGHT)
            const normalizedFitZoom = clamp(nextFitZoom, MIN_ZOOM, MAX_ZOOM)

            fitZoomRef.current = normalizedFitZoom
            setFitZoom(normalizedFitZoom)

            if (!userChangedZoomRef.current) {
                zoomRef.current = normalizedFitZoom
                setZoom(normalizedFitZoom)
            }
        })

        resizeObserver.observe(viewer)

        return () => resizeObserver.disconnect()
    }, [isLoaded, isFullscreen])

    useEffect(() => {
        if (!isFullscreen) {
            return
        }

        const htmlOverflow = document.documentElement.style.overflow
        const bodyOverflow = document.body.style.overflow

        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'

        return () => {
            document.documentElement.style.overflow = htmlOverflow
            document.body.style.overflow = bodyOverflow
        }
    }, [isFullscreen])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsFullscreen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        if (isLoaded) {
            requestAnimationFrame(() => fitMapToViewer())
        }
    }, [fitMapToViewer, isFullscreen, isLoaded])

    const handleTouchStart = (event) => {
        if (!isMobile || event.touches.length !== 2) {
            pinchStateRef.current = null
            return
        }

        pinchStateRef.current = {
            startDistance: getTouchDistance(event.touches),
            startZoom: zoomRef.current,
        }
    }

    const handleTouchMove = (event) => {
        if (!isMobile || event.touches.length !== 2 || !pinchStateRef.current) {
            return
        }

        event.preventDefault()

        const distance = getTouchDistance(event.touches)

        if (pinchStateRef.current.startDistance <= 0) {
            return
        }

        const center = getTouchCenter(event.touches)
        const nextZoom = pinchStateRef.current.startZoom * (distance / pinchStateRef.current.startDistance)

        setZoomAroundPoint(nextZoom, center.x, center.y)
    }

    const handleTouchEnd = (event) => {
        if (event.touches.length < 2) {
            pinchStateRef.current = null
        }
    }

    const scaledWidth = Math.round(MAP_WIDTH * zoom)
    const scaledHeight = Math.round(MAP_HEIGHT * zoom)
    const mapLeft = Math.max((viewerSize.width - scaledWidth) / 2, 0)
    const mapTop = Math.max((viewerSize.height - scaledHeight) / 2, 0)
    const stageWidth = Math.max(viewerSize.width, scaledWidth + mapLeft * 2)
    const stageHeight = Math.max(viewerSize.height, scaledHeight + mapTop * 2)
    const mapViewer = (
        <div
            style={{
                width: isFullscreen || isMobile ? '100vw' : '100%',
                marginLeft: !isFullscreen && isMobile ? 'calc(50% - 50vw)' : undefined,
                marginRight: !isFullscreen && isMobile ? 'calc(50% - 50vw)' : undefined,
                position: isFullscreen ? 'fixed' : 'relative',
                inset: isFullscreen ? 0 : undefined,
                height: isFullscreen ? '100dvh' : 'auto',
                zIndex: isFullscreen ? 2147483647 : undefined,
                display: 'flex',
                flexDirection: 'column',
                gap: isFullscreen ? 0 : 12,
                padding: 0,
                background: '#fff',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 8,
                    flexWrap: 'nowrap',
                    padding: isFullscreen || isMobile ? 8 : 0,
                    background: '#fff',
                    borderBottom: isFullscreen ? '1px solid rgba(38, 38, 38, 0.16)' : undefined,
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                    }}
                >
                    <button
                        type='button'
                        className='btn btn_black'
                        aria-label='Уменьшить карту'
                        title='Уменьшить карту'
                        onClick={() => setZoomWithCenter(zoom / 1.25)}
                        style={{ width: 44, height: 44, padding: 0, minWidth: 44 }}
                    >
                        <MdRemove size={22} />
                    </button>

                    <button
                        type='button'
                        className='btn btn_black'
                        aria-label='Увеличить карту'
                        title='Увеличить карту'
                        onClick={() => setZoomWithCenter(zoom * 1.25)}
                        style={{ width: 44, height: 44, padding: 0, minWidth: 44 }}
                    >
                        <MdAdd size={22} />
                    </button>

                    <button
                        type='button'
                        className='btn btn_black'
                        onClick={fitMapToViewer}
                        style={{ height: 44, padding: isMobile ? '0 12px' : '0 18px' }}
                    >
                        Вписать
                    </button>
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        flexShrink: 0,
                    }}
                >
                    <span style={{ fontSize: 15, color: '#262626', minWidth: 44, textAlign: 'right' }}>
                        {Math.round((zoom / fitZoom) * 100)}%
                    </span>

                    {isMobile && (
                        <button
                            type='button'
                            className='btn btn_black'
                            aria-label={isFullscreen ? 'Выйти из полноэкранного режима' : 'Открыть полноэкранный режим'}
                            title={isFullscreen ? 'Выйти из полноэкранного режима' : 'Открыть полноэкранный режим'}
                            onClick={() => setIsFullscreen((value) => !value)}
                            style={{ width: 44, height: 44, padding: 0, minWidth: 44 }}
                        >
                            {isFullscreen ? <MdFullscreenExit size={24} /> : <MdFullscreen size={24} />}
                        </button>
                    )}
                </div>
            </div>

            <div
                ref={viewerRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={() => {
                    pinchStateRef.current = null
                }}
                style={{
                    width: '100%',
                    height: isFullscreen ? 'auto' : isMobile ? 'calc(100vh - 300px)' : 'calc(100vh - 320px)',
                    minHeight: isFullscreen ? 0 : isMobile ? 420 : 560,
                    flex: isFullscreen ? 1 : undefined,
                    overflow: 'auto',
                    border: isFullscreen ? 'none' : '1px solid rgba(38, 38, 38, 0.16)',
                    borderLeft: isFullscreen || isMobile ? 'none' : '1px solid rgba(38, 38, 38, 0.16)',
                    borderRight: isFullscreen || isMobile ? 'none' : '1px solid rgba(38, 38, 38, 0.16)',
                    background: '#fff',
                    position: 'relative',
                    touchAction: 'pan-x pan-y',
                }}
            >
                {!isLoaded && !hasError && (
                    <div
                        style={{
                            position: 'sticky',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            minHeight: isFullscreen ? '100%' : isMobile ? 420 : 560,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#f8f4ef',
                            zIndex: 2,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 14,
                                width: 'min(420px, calc(100% - 32px))',
                            }}
                        >
                            <span style={{ fontSize: 18, color: '#262626' }}>
                                Загрузка карты: {progress}%
                            </span>
                            <div
                                style={{
                                    width: '100%',
                                    height: 4,
                                    background: 'rgba(38, 38, 38, 0.16)',
                                    overflow: 'hidden',
                                }}
                            >
                                <div
                                    style={{
                                        width: `${progress}%`,
                                        height: '100%',
                                        background: '#262626',
                                        transition: 'width .2s ease',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {hasError && (
                    <div
                        style={{
                            minHeight: isFullscreen ? '100%' : isMobile ? 420 : 560,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 24,
                            textAlign: 'center',
                        }}
                    >
                        Не удалось загрузить карту.
                    </div>
                )}

                {mapSrc && (
                    <div
                        style={{
                            width: stageWidth,
                            height: stageHeight,
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                left: mapLeft,
                                top: mapTop,
                                width: scaledWidth,
                                height: scaledHeight,
                                overflow: 'hidden',
                            }}
                        >
                            {/* The map is zoomed manually, so this is intentionally not next/image. */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={mapSrc}
                                width={MAP_WIDTH}
                                height={MAP_HEIGHT}
                                alt='Карта территории парк-отеля ПЛАЗМА'
                                onLoad={() => {
                                    const nextFitZoom = getFitZoom()

                                    fitZoomRef.current = nextFitZoom
                                    zoomRef.current = nextFitZoom
                                    setFitZoom(nextFitZoom)
                                    setZoom(nextFitZoom)
                                    setIsLoaded(true)
                                }}
                                style={{
                                    display: 'block',
                                    width: MAP_WIDTH,
                                    height: MAP_HEIGHT,
                                    maxWidth: 'none',
                                    transform: `scale(${zoom})`,
                                    transformOrigin: 'top left',
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <>
            <Head>
                <title>Карта территории | Парк-отель «ПЛАЗМА»</title>
                <meta
                    name='description'
                    content='Карта территории парк-отеля «ПЛАЗМА».'
                />
                <meta
                    property='og:title'
                    content='Карта территории | Парк-отель «ПЛАЗМА»'
                />
                <meta
                    property='og:description'
                    content='Карта территории парк-отеля «ПЛАЗМА».'
                />
                <meta property='og:type' content='website' />
            </Head>

            <main className='page page-map'>
                <div className='relative main-wrap' data-scroll-container>
                    <section
                        className='container'
                        data-scroll-section
                        style={{
                            paddingTop: isMobile ? 115 : 180,
                            paddingBottom: isMobile ? 60 : 100,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: isMobile ? 22 : 34,
                            }}
                        >
                            <h1 className='h1-title' style={{ textAlign: 'center' }}>
                                Карта территории
                            </h1>

                            {!isFullscreen && mapViewer}
                            {isFullscreen && isMounted && createPortal(mapViewer, document.body)}

                            {/* <a
                                className='btn btn_black'
                                href='/img/map.png'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Открыть карту в отдельной вкладке
                            </a> */}
                        </div>
                    </section>

                    <div className='base-bg' data-scroll-section></div>
                </div>
            </main>
        </>
    )
}
