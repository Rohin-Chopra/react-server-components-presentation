import { Metric } from "../../../types/types";

export async function getVisibility(): Promise<Metric> {
  const response = await fetch("http://localhost:5000/visibility");
  return await response.json();
}
