export type WeatherData = {
  status: boolean,
  lat?: number,
  lon?: number,
  timezone?: string,
  temp?: number,
  pressure?: number,
  humidity?: number,
  weather?: any
}

export type Coords = {
  latitude?: number,
  longitude?: number
} | null
