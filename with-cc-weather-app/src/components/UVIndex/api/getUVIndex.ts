import { Metric } from "../../../types/types";

export async function getUVIndex(): Promise<Metric> {
  const response = await fetch("http://localhost:5000/uv-index");
  return await response.json();
}
