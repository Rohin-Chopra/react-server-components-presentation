import { BASE_API_URI } from "@/constants";
import { Metric } from "@/types/types";

export async function getAverage(): Promise<Metric> {
  const location = "melbourne";

  const response = await fetch(`${BASE_API_URI}/average?location=${location}`);
  return await response.json();
}
