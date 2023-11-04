import { HourlyWeather } from "@/types/types";

export async function getHourlyForecast(): Promise<HourlyWeather[]> {
  const response = await fetch(`${process.env.API_URL}/forecast/hourly`);
  return await response.json();
}
