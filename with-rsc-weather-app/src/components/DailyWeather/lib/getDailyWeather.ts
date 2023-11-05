import { API_URL } from "@/constants/constants";
import { DailyWeather } from "@/types/types";

export async function getDailyWeather(
  location: string
): Promise<DailyWeather[]> {
  const response = await fetch(`${API_URL}/weather/daily?location=${location}`);
  return await response.json();
}
