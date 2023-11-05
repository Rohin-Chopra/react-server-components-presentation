import { FaSun } from "react-icons/fa";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getPrecipitation } from "./lib/getPrecipitation";

type Props = {
  location: string;
};

export async function Precipitation({ location }: Props) {
  const precipitationMetric = await getPrecipitation(location);

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
