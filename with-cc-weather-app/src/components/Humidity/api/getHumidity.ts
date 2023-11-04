import { BASE_API_URI } from "@/constants";
import { Metric } from "@/types/types";

export async function getHumidity(): Promise<Metric> {
  const response = await fetch(`${BASE_API_URI}/humidity`);
  return await response.json();
}
