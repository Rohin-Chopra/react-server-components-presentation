import { Average } from "@/components/Average";
import { DailyWeather } from "@/components/DailyWeather";
import { FeelsLike } from "@/components/FeelsLike";
import { HourlyWeather } from "@/components/HourlyWeather";
import { Humidity } from "@/components/Humidity";
import { Precipitation } from "@/components/Precipitation";
import { UVIndex } from "@/components/UVIndex";
import { Visibility } from "@/components/Visibility";
import { getCurrentWeather } from "@/pages/WeatherPage/api/getCurrentWeather";
import { FaSpinner } from "react-icons/fa";
import { useQuery } from "react-query";

function getRandomLocation(): string {
  const locations = ["melbourne", "sydney"];

  return locations[Math.floor(Math.random() * locations.length)];
}

export const WeatherPage = () => {
  const location = getRandomLocation();

  const { data: weather, isLoading } = useQuery("weather/current", () =>
    getCurrentWeather(location)
  );

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl" />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('jackson-hendry-eodA_8CTOFo-unsplash.jpg')",
      }}
    >
      <div className="flex w-full h-full justify-center py-8">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-medium">{weather?.location}</h1>
            <h2 className="text-6xl font-extralight">{weather?.temperature}</h2>
            <p className="text-sm font-medium">{weather?.condition}</p>
            <p className="text-sm font-medium">
              L:{weather?.lowestTemperature} H:{weather?.highestTemperature}
            </p>
          </div>
          <HourlyWeather location={location} />
          <div className="flex">
            <DailyWeather />
            <div className="grid grid-cols-2 ml-4">
              <UVIndex location={location} />
              <FeelsLike location={location} />
              <Humidity location={location} />
              <Average location={location} />
              <Precipitation location={location} />
              <Visibility location={location} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
