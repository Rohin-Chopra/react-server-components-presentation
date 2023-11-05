import { DailyWeather } from "@/types/types";

export async function getDailyWeather(): Promise<DailyWeather[]> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/weather/daily?location=${location}`
  );
  return await response.json();
}
