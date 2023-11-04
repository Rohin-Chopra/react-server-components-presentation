import { BASE_API_URI } from "../../../constants";
import { Metric } from "../../../types/types";

export async function getFeelsLike(): Promise<Metric> {
  const response = await fetch(`${BASE_API_URI}/feels-like`);
  return await response.json();
}
