import { Weather } from "../../../types/types";

export async function getWeather(): Promise<Weather> {
  const response = await fetch("http://localhost:5000/weather");
  return await response.json();
}
