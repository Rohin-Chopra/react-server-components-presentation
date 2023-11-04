import { FaSun } from "react-icons/fa";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getFeelsLike } from "./lib/getFeelsLike";

export async function FeelsLike() {
  const feelsLikeMetric = await getFeelsLike();

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
