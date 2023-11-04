import { Metric } from "../../../types/types";

export async function getHumidity(): Promise<Metric> {
  const response = await fetch(
    "https://cnwr5x5ob4.execute-api.ap-southeast-2.amazonaws.com/humidity"
  );
  return await response.json();
}
