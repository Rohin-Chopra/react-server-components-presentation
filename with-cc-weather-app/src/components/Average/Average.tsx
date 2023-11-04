import { FaSpinner, FaSun } from "react-icons/fa";
import { useQuery } from "react-query";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getAverage } from "./api/getWeather";

export function Average() {
  const { data: averageMetric, isLoading } = useQuery("average", getAverage);

  if (isLoading) {
    return (
      <div className="px-4 py-3 rounded-lg bg-night max-w-[10rem] h-[9.5rem] mb-2 mr-2 flex items-center justify-center">
        <FaSpinner className="animate-spin text-2xl" />
      </div>
    );
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
