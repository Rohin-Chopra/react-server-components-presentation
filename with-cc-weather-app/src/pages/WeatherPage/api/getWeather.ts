import { BASE_API_URI } from "../../../constants";
import { Weather } from "../../../types/types";

export async function getWeather(): Promise<Weather> {
  const response = await fetch(`${BASE_API_URI}/weather`);
  return await response.json();
}
