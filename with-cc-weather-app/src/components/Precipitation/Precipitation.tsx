import { FaSpinner, FaSun } from "react-icons/fa";
import { useQuery } from "react-query";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getPrecipitation } from "./api/getPrecipitation";

export function Precipitation() {
  const { data: precipitationMetric, isLoading } = useQuery(
    "average",
    getPrecipitation
  );

  if (isLoading) {
    return (
      <div className="px-4 py-3 rounded-lg bg-night max-w-[10rem] h-[9.5rem] mb-2 mr-2 flex items-center justify-center">
        <FaSpinner className="animate-spin text-2xl" />
      </div>
    );
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
