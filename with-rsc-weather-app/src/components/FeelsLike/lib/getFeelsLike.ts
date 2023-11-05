import { API_URL } from "@/constants/constants";
import { Metric } from "@/types/types";

export async function getFeelsLike(location: string): Promise<Metric> {
  const response = await fetch(`${API_URL}/feels-like?location=${location}`);
  return await response.json();
}
