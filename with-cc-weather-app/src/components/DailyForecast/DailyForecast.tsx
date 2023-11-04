import { FaCalendar, FaSpinner } from "react-icons/fa";
import { useQuery } from "react-query";

import { getDailyForecast } from "@/components/DailyForecast/api/getDailyForecast";
import { WeatherIcon } from "@/components/WeatherIcon";

export const DailyForecast = () => {
  const { data: dailyForecast, isLoading } = useQuery(
    "forecast/daily",
    getDailyForecast
  );

  if (isLoading) {
    return (
      <div className="px-4 py-3 rounded-lg bg-night w-[10rem] h-[9.5rem] mb-2 mr-2 flex items-center justify-center">
        <FaSpinner className="animate-spin text-2xl" />
      </div>
    );
  }

  return (
    dailyForecast && (
      <div className="px-4 py-3 rounded-lg bg-night w-[18rem]">
        <div className="text-xs flex items-center text-nightText">
          <FaCalendar className="mr-2" /> DAILY FORECAST
        </div>
        <hr className="mt-3 mb-2 border-t-nightText" />
        <div className="space-y-2">
          {dailyForecast.map((forecast, index) => (
            <div key={index}>
              <div className="flex items-center py-1">
                <p className="w-24">{index === 0 ? "Today" : forecast.day}</p>
                <div className="w-10">
                  <WeatherIcon
                    className="text-2xl"
                    condition={forecast.condition}
                  />
                </div>
                <div className="w-28 flex justify-between">
                  <span className="text-nightText">
                    <span className="text-[0.5rem]">MIN:</span>{" "}
                    {forecast.lowestTemperature}
                  </span>
                  <span className="font-medium">
                    <span className="text-[0.5rem]">MAX:</span>{" "}
                    {forecast.highestTemperature}
                  </span>
                </div>
              </div>
              {index !== dailyForecast.length - 1 && (
                <hr className="my-2 border-t-nightText" />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  );
};
