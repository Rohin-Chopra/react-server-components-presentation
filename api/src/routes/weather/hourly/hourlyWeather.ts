import { Request, Response } from "express";
import { locationsWeather } from "../../../data";
import { ErrorResponse, HourlyWeather } from "../../../types/types";

export function hourlyWeatherHandler(
  req: Request<any, any, any, { location?: string }>,
  res: Response<HourlyWeather[] | ErrorResponse>
) {
  if (!req.query.location)
    return res.status(400).json({ message: "Bad request" });

  const location = locationsWeather[req.query.location];

  if (!location) return res.status(404);

  return res.status(200).json(location.hourlyWeather);
}
