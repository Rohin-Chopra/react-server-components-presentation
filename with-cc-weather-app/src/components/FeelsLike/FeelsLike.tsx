import { FaSpinner, FaSun } from "react-icons/fa";
import { useQuery } from "react-query";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getFeelsLike } from "./api/getFeelsLike";

export function FeelsLike() {
  const { data: feelsLikeMetric, isLoading } = useQuery(
    "feels-like",
    getFeelsLike
  );

  if (isLoading) {
    return (
      <div className="px-4 py-3 rounded-lg bg-night max-w-[10rem] h-[9.5rem] mb-2 mr-2 flex items-center justify-center">
        <FaSpinner className="animate-spin text-2xl" />
      </div>
    );
  }

  return (
    feelsLikeMetric && (
      <WeatherDetailsBox
        title="FEELS LIKE"
        description={feelsLikeMetric?.description}
        metric={feelsLikeMetric?.metric}
        icon={FaSun}
      />
    )
  );
}
