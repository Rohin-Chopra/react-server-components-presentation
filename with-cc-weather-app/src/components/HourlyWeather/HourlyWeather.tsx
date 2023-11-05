import { FaSpinner } from "react-icons/fa";
import { useQuery } from "react-query";

import { getHourlyWeather } from "@/components/HourlyWeather/api/getHourlyWeather";
import { WeatherIcon } from "@/components/WeatherIcon";

type Props = {
  location: string;
};

export const HourlyWeather = ({ location }: Props) => {
  const { data: hourlyWeather, isLoading } = useQuery("weather/hourly", () =>
    getHourlyWeather(location)
  );

  if (isLoading) {
    return (
      <div className="px-4 py-3 rounded-lg bg-night w-[10rem] h-[9.5rem] mb-2 mr-2 flex items-center justify-center">
        <FaSpinner className="animate-spin text-2xl" />
      </div>
    );
  }

  return (
    hourlyWeather && (
      <div className="px-4 py-3 rounded-lg bg-night mb-4 max-w-[39.5rem]">
        <div className="text-xs">Cloudy conditions expected around 3AM</div>
        <hr className="my-2" />
        <div className="flex space-x-8 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-[#2e3b4c] scrollbar-track-[#1d2a39] scrollbar-thin">
          {hourlyWeather.map((forecast, index) => (
            <div className="space-y-4 mb-3" key={index}>
              <div className="text-xs">
                {index === 0 ? "Now" : forecast.time}
              </div>
              <div className="flex justify-center">
                <WeatherIcon condition={forecast.condition} />
              </div>
              <div className="text-sm">{forecast.temperature}</div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};
