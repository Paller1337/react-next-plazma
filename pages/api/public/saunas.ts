import type { NextApiRequest, NextApiResponse } from 'next'
import {
    createPublicApiResponse,
    getPublicSaunas,
    getRequestOrigin,
    handleOptionsRequest,
    rejectUnsupportedMethod,
    withPublicApiHeaders,
} from '../../../lib/publicObjectsApi'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    withPublicApiHeaders(res)

    if (handleOptionsRequest(req, res)) return
    if (rejectUnsupportedMethod(req, res)) return

    const saunas = getPublicSaunas(getRequestOrigin(req))

    res.status(200).json(createPublicApiResponse('saunas', saunas))
}
