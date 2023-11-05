import { FaSpinner, FaSun } from "react-icons/fa";
import { useQuery } from "react-query";

import { getAverage } from "@/components/Average/api/getAverage";
import { WeatherDetailsBox } from "@/components/WeatherDetailsBox";

type Props = {
  location: string;
};

export function Average({ location }: Props) {
  const { data: averageMetric, isLoading } = useQuery("average", () =>
    getAverage(location)
  );

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
