export type WeatherData = {
  status: boolean,
  lat?: number,
  lon?: number,
  timezone?: string,
  temp?: number,
  pressure?: number,
  humidity?: number
}

export type Coords = {
  lon: number | null,
  lat: number | null
}

export type SynthEvent = React.SyntheticEvent<HTMLParagraphElement, Event>
export type Change = React.ChangeEvent<HTMLInputElement>
