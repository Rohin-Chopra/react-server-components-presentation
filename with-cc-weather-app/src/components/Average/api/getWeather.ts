import { Metric } from "../../../types/types";

export async function getAverage(): Promise<Metric> {
  const response = await fetch("http://localhost:5000/average");
  return await response.json();
}
