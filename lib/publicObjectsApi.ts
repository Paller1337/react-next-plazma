import type { NextApiRequest, NextApiResponse } from 'next'
import { hotelRooms } from '../data/hotelRooms'
import { saunaObjData } from '../data/saunaObj'
import { slidersData } from '../data/bigSliders'

const API_VERSION = '1.0'

const toArray = <T>(value: T | T[]) => Array.isArray(value) ? value : [value]

const stripHtml = (value: string) =>
    value
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+\n/g, '\n')
        .replace(/\n\s+/g, '\n')
        .replace(/[ \t]{2,}/g, ' ')
        .trim()

const getHeaderValue = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] : value

export const getRequestOrigin = (req: NextApiRequest) => {
    const host = getHeaderValue(req.headers['x-forwarded-host']) || getHeaderValue(req.headers.host)
    const forwardedProto = getHeaderValue(req.headers['x-forwarded-proto'])
    const proto = forwardedProto || (host?.startsWith('localhost') ? 'http' : 'https')

    return host ? `${proto}://${host}` : ''
}

export const withPublicApiHeaders = (res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600')
}

export const handleOptionsRequest = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'OPTIONS') return false

    res.status(204).end()
    return true
}

export const rejectUnsupportedMethod = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') return false

    res.setHeader('Allow', 'GET, OPTIONS')
    res.status(405).json({
        status: 'error',
        message: 'Method not allowed',
    })
    return true
}

const absoluteUrl = (path: string, origin: string) => {
    if (!path) return path
    if (/^https?:\/\//i.test(path)) return path

    return origin ? `${origin}${path}` : path
}

const mapStringList = (values: string[]) =>
    values.map((html) => ({
        html,
        text: stripHtml(html),
    }))

const mapAttributes = (attributes: { name: string, value: string[] }[]) =>
    attributes.map((attribute) => ({
        name: attribute.name,
        values: mapStringList(attribute.value),
    }))

const getObjectId = (value: number | number[] | string) =>
    toArray(value).join('-')

export const getPublicRooms = (origin: string) =>
    hotelRooms.map((room) => {
        const id = getObjectId(room.bnid)

        return {
            id,
            type: 'room',
            title: room.title,
            description: {
                html: room.description,
                text: stripHtml(room.description),
            },
            identifiers: {
                travelline: toArray(room.tlid),
                bnovo: toArray(room.bnid),
            },
            pageUrl: absoluteUrl(`/hotel#room-${id}`, origin),
            size: {
                html: room.size,
                text: stripHtml(room.size),
            },
            count: room.count || null,
            petsAllowed: room.pets,
            alert: room.alert,
            alertText: room.alertText || null,
            prices: room.price.map((price) => ({
                name: price.name,
                values: mapStringList(price.value),
            })),
            attributes: mapAttributes(room.attributes),
            amenities: room.amenities,
            photos: room.images.map((image, index) => ({
                url: absoluteUrl(image, origin),
                previewUrl: absoluteUrl(room.previews[index] || image, origin),
            })),
        }
    })

export const getPublicSaunas = (origin: string) =>
    saunaObjData.map((sauna) => {
        const slider = slidersData.find((item) => item.name === sauna.sliderData)

        return {
            id: sauna.id,
            type: 'sauna',
            title: sauna.name,
            description: {
                html: sauna.description,
                text: stripHtml(sauna.description),
            },
            pageUrl: absoluteUrl(`/sauna#${sauna.id}`, origin),
            capacity: {
                html: sauna.aboutSize,
                text: stripHtml(sauna.aboutSize),
            },
            prices: sauna.price.map((priceRow) => ({
                values: mapStringList(priceRow),
            })),
            photos: (slider?.images || []).map((image) => ({
                url: absoluteUrl(image, origin),
            })),
        }
    })

export const createPublicApiResponse = <T>(type: string, items: T[]) => ({
    apiVersion: API_VERSION,
    type,
    count: items.length,
    items,
})
