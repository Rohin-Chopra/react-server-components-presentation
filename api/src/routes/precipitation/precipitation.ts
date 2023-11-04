import { Request, Response } from "express";
import { Metric } from "../../types/types";

export function precipitationHandler(req: Request, res: Response<Metric>) {
  return res.status(200).json({
    metric: "0mm",
    metricText: "in last 24h",
    description: "Next expected is less than 1mm rain on Thu",
  });
}
