import { DailyWeather } from "@/types/types";

export async function getDailyForecast(): Promise<DailyWeather[]> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/forecast/daily?location=${location}`
  );
  return await response.json();
}
