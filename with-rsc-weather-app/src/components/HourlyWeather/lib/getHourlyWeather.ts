import { HourlyWeather } from "@/types/types";

export async function getHourlyWeather(): Promise<HourlyWeather[]> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/weather/hourly?location=${location}`
  );
  return await response.json();
}
