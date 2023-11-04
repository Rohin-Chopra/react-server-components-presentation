import { Metric } from "@/types/types";

export async function getFeelsLike(): Promise<Metric> {
  const response = await fetch(`${process.env.API_URL}/feels-like`);
  return await response.json();
}
