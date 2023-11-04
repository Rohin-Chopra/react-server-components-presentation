import { WeatherCondition } from "@/types/types";
import { IconType } from "react-icons";
import { FaSun } from "react-icons/fa";
import {
  WiCloudy,
  WiCloudyGusts,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiNightPartlyCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

type Props = {
  className?: string;
  condition: WeatherCondition;
};

const iconAndConditionMap: Record<WeatherCondition, IconType> = {
  Clear: FaSun,
  "Partly Cloudy": WiNightPartlyCloudy,
  Cloudy: WiCloudy,
  Rainy: WiRain,
  Snowy: WiSnow,
  Sunny: WiDaySunny,
  Thunderstorms: WiThunderstorm,
  Windy: WiCloudyGusts,
  "Cloudy and Sunny": WiDaySunnyOvercast,
};

export function WeatherIcon({ condition, className = "" }: Props) {
  const Icon = iconAndConditionMap[condition];

  return <Icon className={className} />;
}
