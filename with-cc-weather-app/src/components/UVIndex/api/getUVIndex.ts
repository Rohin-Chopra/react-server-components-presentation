import { BASE_API_URI } from "@/constants";
import { Metric } from "@/types/types";

export async function getUVIndex(): Promise<Metric> {
  const response = await fetch(`${BASE_API_URI}/uv-index`);
  return await response.json();
}
