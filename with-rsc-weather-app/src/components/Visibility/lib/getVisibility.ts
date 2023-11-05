import { Metric } from "@/types/types";

export async function getVisibility(): Promise<Metric> {
  const location = "melbourne";

  const response = await fetch(
    `${process.env.API_URL}/visibility?location=${location}`
  );
  return await response.json();
}
