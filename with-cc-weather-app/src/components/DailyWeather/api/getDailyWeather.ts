import { BASE_API_URI } from "@/constants";
import { DailyWeather } from "@/types/types";

export async function getDailyWeather(): Promise<DailyWeather[]> {
  const location = "melbourne";

  const response = await fetch(
    `${BASE_API_URI}/weather/daily?location=${location}`
  );

  return await response.json();
}
