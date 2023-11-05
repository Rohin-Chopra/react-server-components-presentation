import { FaSun } from "react-icons/fa";

import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getAverage } from "./lib/getWeather";

type Props = {
  location: string;
};

export async function Average({ location }: Props) {
  const averageMetric = await getAverage(location);

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
