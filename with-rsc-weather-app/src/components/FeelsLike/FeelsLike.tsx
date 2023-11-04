import { FaSun } from "react-icons/fa";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getFeelsLike } from "./api/getFeelsLike";

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
