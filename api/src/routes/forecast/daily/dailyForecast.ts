import { Request, Response } from "express";
import { Weather } from "../../../types/types";

export function dailyForecastHandler(req: Request, res: Response<Weather[]>) {
  return res.status(200).json([
    {
      condition: "Sunny",
      location: "Melbourne",
      lowestTemperature: "8°",
      highestTemperature: "20°",
      temperature: "20°",
      temperatureDescription: "partly cloudy",
    },
    {
      condition: "Sunny",
      location: "Melbourne",
      lowestTemperature: "7°",
      highestTemperature: "24°",
      temperature: "20°",
      temperatureDescription: "partly cloudy",
    },
    {
      condition: "Cloudy and Sunny",
      location: "Melbourne",
      lowestTemperature: "11°",
      highestTemperature: "26°",
      temperature: "20°",
      temperatureDescription: "partly cloudy",
    },
    {
      condition: "Sunny",
      location: "Melbourne",
      lowestTemperature: "15°",
      highestTemperature: "28°",
      temperature: "20°",
      temperatureDescription: "partly cloudy",
    },
    {
      condition: "Cloudy",
      location: "Melbourne",
      lowestTemperature: "15°",
      highestTemperature: "27°",
      temperature: "20°",
      temperatureDescription: "partly cloudy",
    },
    {
      condition: "Cloudy and Sunny",
      location: "Melbourne",
      lowestTemperature: "13°",
      highestTemperature: "25°",
      temperature: "20°",
      temperatureDescription: "partly cloudy",
    },
    {
      condition: "Sunny",
      location: "Melbourne",
      lowestTemperature: "12°",
      highestTemperature: "30°",
      temperature: "20°",
      temperatureDescription: "partly cloudy",
    },
    {
      condition: "Cloudy",
      location: "Melbourne",
      lowestTemperature: "12°",
      highestTemperature: "29°",
      temperature: "20°",
      temperatureDescription: "partly cloudy",
    },
    {
      condition: "Sunny",
      location: "Melbourne",
      lowestTemperature: "9°",
      highestTemperature: "17°",
      temperature: "20°",
      temperatureDescription: "partly cloudy",
    },
    {
      condition: "Cloudy and Sunny",
      location: "Melbourne",
      lowestTemperature: "7°",
      highestTemperature: "19°",
      temperature: "20°",
      temperatureDescription: "partly cloudy",
    },
  ]);
}
