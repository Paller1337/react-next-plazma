const SNW = ({ children }: { children: string | React.ReactNode }) => {
    return (
        <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
    )
}

export default SNW