import { Average } from "@/components/Average";
import { DailyWeather } from "@/components/DailyWeather";
import { FeelsLike } from "@/components/FeelsLike";
import { HourlyWeather } from "@/components/HourlyWeather";
import { Humidity } from "@/components/Humidity";
import { LoadingWetherDetailsBox } from "@/components/LoadingWetherDetailsBox";
import { Precipitation } from "@/components/Precipitation";
import { UVIndex } from "@/components/UVIndex";
import { Visibility } from "@/components/Visibility";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";
import { getCurrentWeather } from "./lib/getCurrentWeather";

function getRandomLocation(): string {
  const locations = ["melbourne", "sydney"];
  return locations[Math.floor(Math.random() * locations.length)];
}

async function Home() {
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
          <Suspense fallback={<LoadingWetherDetailsBox />}>
            <HourlyWeather location={location} />
          </Suspense>
          <div className="flex">
            <Suspense fallback={<LoadingWetherDetailsBox />}>
              <DailyWeather location={location} />
            </Suspense>
            <div className="grid grid-cols-2 ml-4">
              <Suspense fallback={<LoadingWetherDetailsBox />}>
                <UVIndex location={location} />
              </Suspense>
              <Suspense fallback={<LoadingWetherDetailsBox />}>
                <FeelsLike location={location} />
              </Suspense>
              <Suspense fallback={<LoadingWetherDetailsBox />}>
                <Humidity location={location} />
              </Suspense>
              <Suspense fallback={<LoadingWetherDetailsBox />}>
                <Average location={location} />
              </Suspense>
              <Suspense fallback={<LoadingWetherDetailsBox />}>
                <Precipitation location={location} />
              </Suspense>
              <Suspense fallback={<LoadingWetherDetailsBox />}>
                <Visibility location={location} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeWithSuspense() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center">
          <FaSpinner className="animate-spin text-4xl" />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
