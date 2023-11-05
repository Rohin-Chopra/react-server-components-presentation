import { BASE_API_URI } from "@/constants";
import { Weather } from "@/types/types";

export async function getCurrentWeather(location: string): Promise<Weather> {
  const response = await fetch(
    `${BASE_API_URI}/weather/current?location=${location}`
  );
  return await response.json();
}
