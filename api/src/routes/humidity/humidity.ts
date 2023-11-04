import { Request, Response } from "express";
import { Metric } from "../../types/types";

export function humidityHandler(req: Request, res: Response<Metric>) {
  return res.status(200).json({
    metric: "77%",
    description: "The dew point is 8° right now.",
  });
}
