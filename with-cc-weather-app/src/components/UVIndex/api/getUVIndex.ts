import { BASE_API_URI } from "@/constants";
import { Metric } from "@/types/types";

export async function getUVIndex(location: string): Promise<Metric> {
  const response = await fetch(`${BASE_API_URI}/uv-index?location=${location}`);
  return await response.json();
}
