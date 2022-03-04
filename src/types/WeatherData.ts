export type WeatherData = {
    lat: number,
    lon: number,
    timezone: string,
    temp: number,
    pressure: number,
    humidity: number,
    sunrise: string | number,
    sunset: string | number
}


export type SynthEvent = React.SyntheticEvent<Element, Event>
