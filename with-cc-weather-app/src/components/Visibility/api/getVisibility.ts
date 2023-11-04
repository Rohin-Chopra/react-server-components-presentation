import { BASE_API_URI } from "../../../constants";
import { Metric } from "../../../types/types";

export async function getVisibility(): Promise<Metric> {
  const response = await fetch(`${BASE_API_URI}/visibility`);
  return await response.json();
}
