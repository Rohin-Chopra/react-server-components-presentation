import { Metric } from "@/types/types";

export async function getUVIndex(): Promise<Metric> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/uv-index?location=${location}`
  );
  return await response.json();
}
