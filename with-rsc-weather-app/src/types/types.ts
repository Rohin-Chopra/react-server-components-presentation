export type Metric = {
  metric: string;
  metricText?: string;
  description: string;
};

export type Weather = {
  location: string;
  temperature: string;
  temperatureDescription: string;
  lowestTemperature: string;
  highestTemperature: string;
};
