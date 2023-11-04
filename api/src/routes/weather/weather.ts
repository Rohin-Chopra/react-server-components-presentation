import { Request, Response } from "express";

type GetWeatherResponseBody = {
  location: string;
  temperature: string;
  temperatureDescription: string;
  lowestTemperature: string;
  highestTemperature: string;
};

export function weatherHandler(
  req: Request,
  res: Response<GetWeatherResponseBody>
) {
  return res.status(200).json({
    location: "Melbourne",
    temperature: "12°",
    temperatureDescription: "Partly Cloudy",
    lowestTemperature: "12°",
    highestTemperature: "16°",
  });
}
