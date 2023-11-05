import { API_URL } from "@/constants/constants";
import { Metric } from "@/types/types";

export async function getVisibility(location: string): Promise<Metric> {
  const response = await fetch(`${API_URL}/visibility?location=${location}`);
  return await response.json();
}
