import { Weather } from "../../types/types";

export async function getWeather(): Promise<Weather> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/weather?location=${location}`
  );
  return await response.json();
}
