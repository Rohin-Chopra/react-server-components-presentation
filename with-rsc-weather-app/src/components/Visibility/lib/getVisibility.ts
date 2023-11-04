import { Metric } from "@/types/types";

export async function getVisibility(): Promise<Metric> {
  const response = await fetch(
    "https://cnwr5x5ob4.execute-api.ap-southeast-2.amazonaws.com/visibility"
  );
  return await response.json();
}
