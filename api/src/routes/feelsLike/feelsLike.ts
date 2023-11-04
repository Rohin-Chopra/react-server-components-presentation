import { Request, Response } from "express";
import { Metric } from "../../types/types";

export function feelsLikeHandler(req: Request, res: Response<Metric>) {
  return res.status(200).json({
    metric: "10°",
    description: "Similar to the actual temperature",
  });
}
