import { FaSpinner, FaSun } from "react-icons/fa";
import { useQuery } from "react-query";
import { WeatherDetailsBox } from "../WeatherDetailsBox";
import { getUVIndex } from "./api/getUVIndex";

export const UVIndex = () => {
  const { data: uVIndexMetric, isLoading } = useQuery("uv-index", getUVIndex);

  if (isLoading) {
    return (
      <div className="px-4 py-3 rounded-lg bg-night max-w-[10rem] h-[9.5rem] mb-2 mr-2 flex items-center justify-center">
        <FaSpinner className="animate-spin text-2xl" />
      </div>
    );
  }

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
