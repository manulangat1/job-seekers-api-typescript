import "reflect-metadata";
import express, { Application } from "express";
import modules from "./modules";
import * as dotenv from "dotenv";
import logger from "./utils/logger";
// import conn

import dbConnection from "./database";

dotenv.config();

const app: Application = express();

// connectDB();
dbConnection();

const PORT = process.env.PORT;

app.use(express.json());

modules(app);

app.get("/", (req, res) => {
  return res.send("Welcome to the JobSeekers API");
});
app.get("*", (req, res) => {
  return res.status(404).send(`Ooops! Invalid url`);
});
app.listen(8000, () => {
  logger.info(`Server started on port ${PORT || 8000}`);
  console.log(`Application running on port ${PORT || 8000}`);
});
