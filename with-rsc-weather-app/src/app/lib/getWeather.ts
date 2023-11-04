import { Weather } from "../../types/types";

export async function getWeather(): Promise<Weather> {
  const response = await fetch(`${process.env.API_URL}/weather`);
  return await response.json();
}
