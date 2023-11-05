import { FaSun } from "react-icons/fa";
import { useQuery } from "react-query";

import { getPrecipitation } from "@/components/Precipitation/api/getPrecipitation";
import { WeatherDetailsBox } from "@/components/WeatherDetailsBox";
import { LoadingWetherDetailsBox } from "../LoadingWetherDetailsBox";

type Props = {
  location: string;
};

export function Precipitation({ location }: Props) {
  const { data: precipitationMetric, isLoading } = useQuery("average", () =>
    getPrecipitation(location)
  );

  if (isLoading) {
    return <LoadingWetherDetailsBox />;
  }

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
