import { FaSun } from "react-icons/fa";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getFeelsLike } from "./lib/getFeelsLike";

type Props = {
  location: string;
};

export async function FeelsLike({ location }: Props) {
  const feelsLikeMetric = await getFeelsLike(location);

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
