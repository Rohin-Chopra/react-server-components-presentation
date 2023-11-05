import { FaSpinner, FaSun } from "react-icons/fa";
import { useQuery } from "react-query";

import { getFeelsLike } from "@/components/FeelsLike/api/getFeelsLike";
import { WeatherDetailsBox } from "@/components/WeatherDetailsBox";

type Props = {
  location: string;
};

export function FeelsLike({ location }: Props) {
  const { data: feelsLikeMetric, isLoading } = useQuery("feels-like", () =>
    getFeelsLike(location)
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
