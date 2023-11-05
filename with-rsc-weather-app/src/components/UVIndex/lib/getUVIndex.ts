import { API_URL } from "@/constants/constants";
import { Metric } from "@/types/types";

export async function getUVIndex(location: string): Promise<Metric> {
  const response = await fetch(`${API_URL}/uv-index?location=${location}`);
  return await response.json();
}
