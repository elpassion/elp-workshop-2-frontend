export type WeatherData = {
  status: boolean,
  lat?: number,
  lon?: number,
  timezone?: string,
  temp?: number,
  pressure?: number,
  humidity?: number,
  sunrise?: number | string,
  sunset?: number | string,
  description?: string,
  windSpeed?: number | string
}

export type Coords = {
  latitude?: number,
  longitude?: number
} | null
