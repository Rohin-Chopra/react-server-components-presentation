import { Request, Response } from "express";
import { Metric } from "../../types/types";

export function averageHandler(req: Request, res: Response<Metric>) {
  return res.status(200).json({
    metric: "10°",
    metricText: "from average daily high",
    description: "Similar to the actual temperature",
  });
}
