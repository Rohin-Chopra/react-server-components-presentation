import { Weather } from "../../types/types";

export async function getCurrentWeather(): Promise<Weather> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/weather/current?location=${location}`
  );
  return await response.json();
}
