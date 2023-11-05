import { BASE_API_URI } from "@/constants";
import { HourlyWeather } from "@/types/types";

export async function getHourlyForecast(): Promise<HourlyWeather[]> {
  const location = "melbourne";

  const response = await fetch(
    `${BASE_API_URI}/forecast/hourly?location=${location}`
  );
  return await response.json();
}
