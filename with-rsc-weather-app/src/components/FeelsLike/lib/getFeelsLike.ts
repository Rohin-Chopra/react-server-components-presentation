import { Metric } from "@/types/types";

export async function getFeelsLike(): Promise<Metric> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/feels-like?location=${location}`
  );
  return await response.json();
}
