import { Metric } from "../../../types/types";

export async function getFeelsLike(): Promise<Metric> {
  const response = await fetch("http://localhost:5000/feels-like");
  return await response.json();
}
