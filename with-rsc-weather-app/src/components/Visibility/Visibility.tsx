import { FaSun } from "react-icons/fa";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getVisibility } from "./lib/getVisibility";

type Props = {
  location: string;
};

export async function Visibility({ location }: Props) {
  const visibilityMetric = await getVisibility(location);

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
