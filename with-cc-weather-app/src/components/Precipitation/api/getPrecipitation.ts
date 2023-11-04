import { BASE_API_URI } from "../../../constants";
import { Metric } from "../../../types/types";

export async function getPrecipitation(): Promise<Metric> {
  const response = await fetch(`${BASE_API_URI}/precipitation`);
  return await response.json();
}
