import { FaSun } from "react-icons/fa";
import { useQuery } from "react-query";

import { getVisibility } from "@/components/Visibility/api/getVisibility";
import { WeatherDetailsBox } from "@/components/WeatherDetailsBox";

type Props = {
  location: string;
};

export function Visibility({ location }: Props) {
  const { data: visibilityMetric, isLoading } = useQuery("visibility", () =>
    getVisibility(location)
  );

  if (isLoading) {
    return <LoadingWetherDetailsBox />;
  }

  return (
    visibilityMetric && (
      <WeatherDetailsBox
        title="VISIBILITY"
        description={visibilityMetric.description}
        metric={visibilityMetric.metric}
        icon={FaSun}
      />
    )
  );
}
