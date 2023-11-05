import { FaSpinner, FaSun } from "react-icons/fa";
import { useQuery } from "react-query";

import { getHumidity } from "@/components/Humidity/api/getHumidity";
import { WeatherDetailsBox } from "@/components/WeatherDetailsBox";

type Props = {
  location: string;
};

export function Humidity({ location }: Props) {
  const { data: humidityMetric, isLoading } = useQuery("humidity", () =>
    getHumidity(location)
  );

  if (isLoading) {
    return (
      <div className="px-4 py-3 rounded-lg bg-night max-w-[10rem] h-[9.5rem] mb-2 mr-2 flex items-center justify-center">
        <FaSpinner className="animate-spin text-2xl" />
      </div>
    );
  }

  return (
    humidityMetric && (
      <WeatherDetailsBox
        title="HUMIDITY"
        description={humidityMetric.description}
        metric={humidityMetric.metric}
        icon={FaSun}
      />
    )
  );
}
