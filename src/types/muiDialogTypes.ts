import { Coords } from "./weatherData"

export type DialogComponentPropTypes = {
    tabValue: string,
    setTabValue: React.Dispatch<React.SetStateAction<string>>,
    coordinates: Coords
}

export type DialogModalPropTypes = {
    onClose: (value: string) => void,
    selectedValue: string,
    open: boolean
}