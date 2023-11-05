import { LocationWeather } from "../types/types";
import { melbourne } from "./melboune";
import { sydney } from "./sydney";

export const locationsWeather: Record<string, LocationWeather> = {
  melbourne,
  sydney,
};
