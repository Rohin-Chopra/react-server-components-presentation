import { WeatherIcon } from "../WeatherIcon";
import { getHourlyForecast } from "./lib/getHourlyForecast";

export const HourlyForecast = async () => {
  const hourlyForecast = await getHourlyForecast();

  return (
    hourlyForecast && (
      <div className="px-4 py-3 rounded-lg bg-night mb-4 max-w-[39.5rem]">
        <div className="text-xs">Cloudy conditions expected around 3AM</div>
        <hr className="my-2" />
        <div className="flex space-x-8 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-[#2e3b4c] scrollbar-track-[#1d2a39] scrollbar-thin">
          {hourlyForecast.map((forecast, index) => (
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
