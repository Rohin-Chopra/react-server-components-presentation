import { Request, Response } from "express";
import { Metric } from "../../types/types";

export function uVIndexHandler(req: Request, res: Response<Metric>) {
  return res.status(200).json({
    metric: "3",
    metricText: "Moderate",
    description: "Use sun protection until 5PM",
  });
}
