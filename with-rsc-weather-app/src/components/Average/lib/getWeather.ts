import { Metric } from "@/types/types";

export async function getAverage(): Promise<Metric> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/average?location=${location}`
  );
  return await response.json();
}
