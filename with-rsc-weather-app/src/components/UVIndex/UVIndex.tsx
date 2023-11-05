import { FaSun } from "react-icons/fa";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getUVIndex } from "./lib/getUVIndex";

type Props = {
  location: string;
};

export const UVIndex = async ({ location }: Props) => {
  const uVIndexMetric = await getUVIndex(location);

  return (
    uVIndexMetric && (
      <WeatherDetailsBox
        title="UV INDEX"
        description={uVIndexMetric.description}
        metric={uVIndexMetric.metric}
        metricText={uVIndexMetric.metricText}
        icon={FaSun}
      >
        <div
          className="w-full h-1 rounded-md mt-2 relative"
          style={{
            background: "linear-gradient(to right, green, yellow, red)",
          }}
        >
          <div
            className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2"
            style={{
              left: +uVIndexMetric.metric * 10 + "%",
            }}
          ></div>
        </div>
      </WeatherDetailsBox>
    )
  );
};
