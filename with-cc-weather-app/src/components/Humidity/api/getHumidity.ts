import { BASE_API_URI } from "@/constants";
import { Metric } from "@/types/types";

export async function getHumidity(location: string): Promise<Metric> {
  const response = await fetch(`${BASE_API_URI}/humidity?location=${location}`);
  return await response.json();
}
