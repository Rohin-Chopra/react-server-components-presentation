import { Metric } from "@/types/types";

export async function getHumidity(): Promise<Metric> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/humidity?location=${location}`
  );
  return await response.json();
}
