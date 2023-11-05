import { HourlyWeather } from "@/types/types";

export async function getHourlyForecast(): Promise<HourlyWeather[]> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/forecast/hourly?location=${location}`
  );
  return await response.json();
}
