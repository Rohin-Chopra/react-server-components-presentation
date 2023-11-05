import { BASE_API_URI } from "@/constants";
import { Metric } from "@/types/types";

export async function getFeelsLike(): Promise<Metric> {
  const location = "melbourne";

  const response = await fetch(
    `${BASE_API_URI}/feels-like?location=${location}`
  );
  return await response.json();
}
