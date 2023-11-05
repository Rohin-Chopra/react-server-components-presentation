import { API_URL } from "@/constants/constants";
import { HourlyWeather } from "@/types/types";

export async function getHourlyWeather(
  location: string
): Promise<HourlyWeather[]> {
  const response = await fetch(
    `${API_URL}/weather/hourly?location=${location}`
  );
  return await response.json();
}
