import { useDeviceDetect } from './useDeviceDetect'


export const BrowserView = ({ children }: React.PropsWithChildren) => {
    const { isDesktop } = useDeviceDetect()

    return isDesktop && <>{children}</>
}

export const MobileView = ({ children }: React.PropsWithChildren) => {
    const { isMobile } = useDeviceDetect()

    return isMobile && <>{children}</>
}