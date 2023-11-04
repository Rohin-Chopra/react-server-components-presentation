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
  temperatureDescription: string;
  lowestTemperature: string;
  highestTemperature: string;
};
