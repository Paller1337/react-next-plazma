import type { NextApiRequest, NextApiResponse } from 'next'
import {
    createPublicApiResponse,
    getPublicRooms,
    getRequestOrigin,
    handleOptionsRequest,
    rejectUnsupportedMethod,
    withPublicApiHeaders,
} from '../../../lib/publicObjectsApi'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    withPublicApiHeaders(res)

    if (handleOptionsRequest(req, res)) return
    if (rejectUnsupportedMethod(req, res)) return

    const rooms = getPublicRooms(getRequestOrigin(req))

    res.status(200).json(createPublicApiResponse('rooms', rooms))
}
