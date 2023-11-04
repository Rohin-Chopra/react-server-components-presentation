import { BASE_API_URI } from "../../../constants";
import { Metric } from "../../../types/types";

export async function getAverage(): Promise<Metric> {
  const response = await fetch(`${BASE_API_URI}/average`);
  return await response.json();
}
