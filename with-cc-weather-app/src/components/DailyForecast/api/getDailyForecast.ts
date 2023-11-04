import { BASE_API_URI } from "../../../constants";
import { Weather } from "../../../types/types";

export async function getDailyForecast(): Promise<Weather[]> {
  const response = await fetch(`${BASE_API_URI}/forecast/daily`);
  return await response.json();
}
