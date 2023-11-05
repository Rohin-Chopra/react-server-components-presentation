import { FaSun } from "react-icons/fa";
import { useQuery } from "react-query";

import { getHumidity } from "@/components/Humidity/api/getHumidity";
import { WeatherDetailsBox } from "@/components/WeatherDetailsBox";
import { LoadingWetherDetailsBox } from "../LoadingWetherDetailsBox";

type Props = {
  location: string;
};

export function Humidity({ location }: Props) {
  const { data: humidityMetric, isLoading } = useQuery("humidity", () =>
    getHumidity(location)
  );

  if (isLoading) {
    return <LoadingWetherDetailsBox />;
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
