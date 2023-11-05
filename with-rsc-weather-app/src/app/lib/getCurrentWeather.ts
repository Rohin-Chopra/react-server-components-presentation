import { API_URL } from "@/constants/constants";
import { Weather } from "../../types/types";

export async function getCurrentWeather(location: string): Promise<Weather> {
  const response = await fetch(
    `${API_URL}/weather/current?location=${location}`
  );
  return await response.json();
}
