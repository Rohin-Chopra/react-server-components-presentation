import { FaSun } from "react-icons/fa";

import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getAverage } from "./api/getWeather";

export async function Average() {
  const averageMetric = await getAverage();

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
