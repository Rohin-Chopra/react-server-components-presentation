import { Metric } from "@/types/types";

export async function getPrecipitation(): Promise<Metric> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/precipitation?location=${location}`
  );
  return await response.json();
}
