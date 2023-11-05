import { BASE_API_URI } from "@/constants";
import { Weather } from "@/types/types";

export async function getWeather(): Promise<Weather> {
  const location = "melbourne";

  const response = await fetch(`${BASE_API_URI}/weather?location=${location}`);
  return await response.json();
}
