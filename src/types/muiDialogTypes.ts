export type DialogComponentPropTypes = {
    tabValue: string,
    setTabValue: React.Dispatch<React.SetStateAction<string>>
}

export type DialogModalPropTypes = {
    onClose: (value: string) => void,
    selectedValue: string,
    open: boolean
}