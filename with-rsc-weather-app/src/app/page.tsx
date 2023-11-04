import { Average } from "@/components/Average";
import { DailyForecast } from "@/components/DailyForecast";
import { FeelsLike } from "@/components/FeelsLike";
import { Humidity } from "@/components/Humidity";
import { Precipitation } from "@/components/Precipitation";
import { HourlyForecast } from "@/components/TenDaysForecast";
import { UVIndex } from "@/components/UVIndex";
import { Visibility } from "@/components/Visibility";
import { getWeather } from "./lib/getWeather";

export default async function Home() {
  const weather = await getWeather();

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('jackson-hendry-eodA_8CTOFo-unsplash.jpg')",
      }}
    >
      <div className="flex container justify-center py-8">
        <div>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-medium">{weather?.location}</h1>
            <h2 className="text-6xl font-extralight">{weather?.temperature}</h2>
            <p className="text-sm font-medium">
              {weather?.temperatureDescription}
            </p>
            <p className="text-sm font-medium">
              L:{weather?.lowestTemperature} H:{weather?.highestTemperature}
            </p>
          </div>
          <HourlyForecast />
          <div className="flex">
            <DailyForecast />
            <div className="grid grid-cols-2 ml-4">
              <UVIndex />
              <FeelsLike />
              <Humidity />
              <Average />
              <Precipitation />
              <Visibility />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
