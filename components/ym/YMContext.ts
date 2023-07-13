import { createContext, useContext } from 'react'




export interface YMContext {
    hit: (url: string,
        options: {
            callback?: () => void
            ctx?,
            params?: {
                order_price?: number
                currency?: string
            }
            referer?: string
            title?: string
        }
    ) => void,

    reachGoal: (target: string,
        params?: {
            order_price?: number
            currency?: string
        },
        callback?: () => void,
        ctx?) => void
}


const ymContextValue: YMContext = {
    hit(url, options) {
        console.error('Counter ID not specified: ', url, options)
    },

    reachGoal(target, params?, callback?, ctx?) {
        console.error('Counter ID not specified: ', target, params, callback, ctx)
    },
}

export const YMContext = createContext<YMContext>(ymContextValue)
export function useMetrika() {
    return useContext(YMContext)
}