import { DailyWeather } from "@/types/types";

export async function getDailyForecast(): Promise<DailyWeather[]> {
  const response = await fetch(`${process.env.API_URL}/forecast/daily`);
  return await response.json();
}
