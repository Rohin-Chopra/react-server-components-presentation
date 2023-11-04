import { FaSun } from "react-icons/fa";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getHumidity } from "./lib/getHumidity";

export async function Humidity() {
  const humidityMetric = await getHumidity();

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
