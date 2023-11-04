import { Weather } from "../../../types/types";

export async function getDailyForecast(): Promise<Weather[]> {
  const response = await fetch(`${process.env.API_URL}/forecast/daily`);
  return await response.json();
}
