import { API_URL } from "@/constants/constants";
import { Metric } from "@/types/types";

export async function getPrecipitation(location: string): Promise<Metric> {
  const response = await fetch(`${API_URL}/precipitation?location=${location}`);
  return await response.json();
}
