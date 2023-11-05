import { BASE_API_URI } from "@/constants";
import { Metric } from "@/types/types";

export async function getPrecipitation(location: string): Promise<Metric> {
  const response = await fetch(
    `${BASE_API_URI}/precipitation?location=${location}`
  );
  return await response.json();
}
