import { API_URL } from "@/constants/constants";
import { Metric } from "@/types/types";

export async function getHumidity(location: string): Promise<Metric> {
  const response = await fetch(`${API_URL}/humidity?location=${location}`);
  return await response.json();
}
