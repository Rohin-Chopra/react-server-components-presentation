import { FaSun } from "react-icons/fa";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getVisibility } from "./api/getVisibility";

export async function Visibility() {
  const visibilityMetric = await getVisibility();

  return (
    visibilityMetric && (
      <WeatherDetailsBox
        title="VISIBILITY"
        description={visibilityMetric.description}
        metric={visibilityMetric.metric}
        icon={FaSun}
      />
    )
  );
}
