import { BASE_API_URI } from "@/constants";
import { HourlyWeather } from "@/types/types";

export async function getHourlyForecast(): Promise<HourlyWeather[]> {
  const response = await fetch(`${BASE_API_URI}/forecast/hourly`);
  return await response.json();
}
