import { Metric } from "../../../types/types";

export async function getAverage(): Promise<Metric> {
  const response = await fetch(`${process.env.API_URL}/average`);
  return await response.json();
}
