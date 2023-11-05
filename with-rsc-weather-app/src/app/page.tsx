import { Average } from "@/components/Average";
import { DailyWeather } from "@/components/DailyWeather";
import { FeelsLike } from "@/components/FeelsLike";
import { HourlyWeather } from "@/components/HourlyWeather";
import { Humidity } from "@/components/Humidity";
import { Precipitation } from "@/components/Precipitation";
import { UVIndex } from "@/components/UVIndex";
import { Visibility } from "@/components/Visibility";
import { getCurrentWeather } from "./lib/getCurrentWeather";

function getRandomLocation(): string {
  const locations = ["melbourne", "sydney"];
  return locations[Math.floor(Math.random() * locations.length)];
}

export default async function Home() {
  const location = getRandomLocation();

  const currentWeather = await getCurrentWeather(location);

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
            <h1 className="text-2xl font-medium">{currentWeather?.location}</h1>
            <h2 className="text-6xl font-extralight">
              {currentWeather?.temperature}
            </h2>
            <p className="text-sm font-medium">{currentWeather?.condition}</p>
            <p className="text-sm font-medium">
              L:{currentWeather?.lowestTemperature} H:
              {currentWeather?.highestTemperature}
            </p>
          </div>
          <HourlyWeather location={location} />
          <div className="flex">
            <DailyWeather location={location} />
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
}
