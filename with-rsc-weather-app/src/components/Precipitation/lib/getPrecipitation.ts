import { Metric } from "@/types/types";

export async function getPrecipitation(): Promise<Metric> {
  const response = await fetch(
    "https://cnwr5x5ob4.execute-api.ap-southeast-2.amazonaws.com/precipitation"
  );
  return await response.json();
}
