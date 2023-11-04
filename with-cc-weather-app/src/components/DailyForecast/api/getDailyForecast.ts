import { BASE_API_URI } from "../../../constants";
import { DailyWeather } from "../../../types/types";

export async function getDailyForecast(): Promise<DailyWeather[]> {
  const response = await fetch(`${BASE_API_URI}/forecast/daily`);
  return await response.json();
}
