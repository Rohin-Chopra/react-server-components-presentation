import { FaSun } from "react-icons/fa";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getPrecipitation } from "./lib/getPrecipitation";

export async function Precipitation() {
  const precipitationMetric = await getPrecipitation();

  return (
    precipitationMetric && (
      <WeatherDetailsBox
        title="PRECIPITATION"
        description="Next expected is less than 1mm rain on Thu"
        metric={precipitationMetric.metric}
        metricText={precipitationMetric.metricText}
        icon={FaSun}
      />
    )
  );
}
