import { API_URL } from "@/constants/constants";
import { Metric } from "@/types/types";

export async function getAverage(location: string): Promise<Metric> {
  const response = await fetch(`${API_URL}/average?location=${location}`);
  return await response.json();
}
