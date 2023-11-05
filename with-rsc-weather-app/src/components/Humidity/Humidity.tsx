import { FaSun } from "react-icons/fa";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getHumidity } from "./lib/getHumidity";

type Props = {
  location: string;
};

export async function Humidity({ location }: Props) {
  const humidityMetric = await getHumidity(location);

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
