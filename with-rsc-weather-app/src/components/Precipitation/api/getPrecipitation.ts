import { Metric } from "../../../types/types";

export async function getPrecipitation(): Promise<Metric> {
  const response = await fetch("http://localhost:5000/precipitation");
  return await response.json();
}
