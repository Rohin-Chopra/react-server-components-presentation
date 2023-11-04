import { Request, Response } from "express";
import { Metric } from "../../types/types";

export function visibilityHandler(req: Request, res: Response<Metric>) {
  return res.status(200).json({
    metric: "31 km",
    description: "Perfectly clear view.",
  });
}
