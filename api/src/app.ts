import cors from "cors";
import express from "express";
import { averageHandler } from "./routes/average";
import { dailyForecastHandler } from "./routes/dailyForecast";
import { feelsLikeHandler } from "./routes/feelsLike";
import { humidityHandler } from "./routes/humidity";
import { precipitationHandler } from "./routes/precipitation/precipitation";
import { uVIndexHandler } from "./routes/uVIndex";
import { visibilityHandler } from "./routes/visibility";
import { weatherHandler } from "./routes/weather";
import { delay } from "./utils/delay";

const app = express();

app.use(cors());

app.use(async (req, res, next) => {
  await delay(3000);
  next();
});

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello frssom root!",
  });
});

app.get("/weather", weatherHandler);

app.get("/average", averageHandler);

app.get("/daily-forecast", dailyForecastHandler);

app.get("/feels-like", feelsLikeHandler);

app.get("/precipitation", precipitationHandler);

app.get("/uv-index", uVIndexHandler);

app.get("/visibility", visibilityHandler);

app.get("/humidity", humidityHandler);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export { app };
