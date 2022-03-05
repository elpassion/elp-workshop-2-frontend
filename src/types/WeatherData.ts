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
  latitude: number | null,
  longitude: number | null
}

export type SynthEvent = React.SyntheticEvent<HTMLParagraphElement, Event>
