import { Metric } from "@/types/types";

export async function getUVIndex(): Promise<Metric> {
  const response = await fetch(
    "https://cnwr5x5ob4.execute-api.ap-southeast-2.amazonaws.com/uv-index"
  );
  return await response.json();
}
