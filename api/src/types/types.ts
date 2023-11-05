export type Metric = {
  metric: string;
  metricText?: string;
  description: string;
};

export type WeatherCondition =
  | "Sunny"
  | "Cloudy"
  | "Cloudy and Sunny"
  | "Rainy"
  | "Snowy"
  | "Windy"
  | "Clear"
  | "Partly Cloudy"
  | "Thunderstorms";

export type Weather = {
  location: string;
  condition: WeatherCondition;
  temperature: string;
  lowestTemperature: string;
  highestTemperature: string;
};

export type DailyWeather = Weather & {
  day: string;
};

export type HourlyWeather = Weather & {
  time: string;
};

export type LocationWeather = {
  average: Metric;
  feelsLike: Metric;
  humidity: Metric;
  precipitation: Metric;
  uVIndex: Metric;
  visibility: Metric;
  currentWeather: Weather;
  hourlyWeather: HourlyWeather[];
  dailyWeather: DailyWeather[];
};

export type ErrorResponse = {
  message: string;
};
