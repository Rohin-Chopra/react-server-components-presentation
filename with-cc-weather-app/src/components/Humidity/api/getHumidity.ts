import { Metric } from "../../../types/types";

export async function getHumidity(): Promise<Metric> {
  const response = await fetch("http://localhost:5000/humidity");
  return await response.json();
}
