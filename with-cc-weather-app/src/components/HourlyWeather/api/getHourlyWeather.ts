import { BASE_API_URI } from "@/constants";
import { HourlyWeather } from "@/types/types";

export async function getHourlyWeather(
  location: string
): Promise<HourlyWeather[]> {
  const response = await fetch(
    `${BASE_API_URI}/weather/hourly?location=${location}`
  );
  return await response.json();
}
