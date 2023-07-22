import toast from 'react-hot-toast'

type TCopyEvent = 'number' | 'address'

export default function copy(x: string): void;
export default function copy(x: string, success?: string): void;
export default function copy(x: string, success?: string, options?: { metric?: TCopyEvent }): void;
export default function copy(x: string, success?: string, error?: string, options?: { metric?: TCopyEvent }): void;

export default function copy(x: string, success?: string, error?: string | {}, options?: { metric?: TCopyEvent }) {

    navigator.clipboard.writeText(x)
    if (success) {
        toast.success(success, {
            duration: 3000,
            style: {
                fontSize: 15,
                borderRadius: 0,
                border: '1px solid #393939',
                padding: '12px 18px'
            },
            position: 'top-center'
        })
    }

    if (error && typeof error === 'string') {
        toast.error(error, {
            duration: 3000,
            style: {
                fontSize: 15,
                borderRadius: 0,
                border: '1px solid #393939',
                padding: '12px 18px'
            },
            position: 'top-center'
        })
    }
}

