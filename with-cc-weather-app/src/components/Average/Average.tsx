import { FaSun } from "react-icons/fa";
import { useQuery } from "react-query";

import { getAverage } from "@/components/Average/api/getAverage";
import { WeatherDetailsBox } from "@/components/WeatherDetailsBox";
import { LoadingWetherDetailsBox } from "../LoadingWetherDetailsBox";

type Props = {
  location: string;
};

export function Average({ location }: Props) {
  const { data: averageMetric, isLoading } = useQuery("average", () =>
    getAverage(location)
  );

  if (isLoading) {
    return <LoadingWetherDetailsBox />;
  }

  return (
    averageMetric && (
      <WeatherDetailsBox
        title="AVERAGE"
        description={averageMetric?.description}
        metric={averageMetric.metric}
        metricText={averageMetric.metricText}
        icon={FaSun}
      />
    )
  );
}
