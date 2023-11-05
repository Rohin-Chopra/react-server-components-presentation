import { FaSun } from "react-icons/fa";
import { useQuery } from "react-query";

import { getFeelsLike } from "@/components/FeelsLike/api/getFeelsLike";
import { WeatherDetailsBox } from "@/components/WeatherDetailsBox";
import { LoadingWetherDetailsBox } from "../LoadingWetherDetailsBox";

type Props = {
  location: string;
};

export function FeelsLike({ location }: Props) {
  const { data: feelsLikeMetric, isLoading } = useQuery("feels-like", () =>
    getFeelsLike(location)
  );

  if (isLoading) {
    return <LoadingWetherDetailsBox />;
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
