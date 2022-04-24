import "reflect-metadata";
import { DataSource } from "typeorm";
// import { Photo } from "./entity/Photo";
import { User } from "./models/User";
import { Company } from "./models/Company";
import { Subscription } from "./models/Subscription";
import logger from "../utils/logger";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "manulangat",
  password: "3050manu",
  database: "JobSeekers",
  entities: [User, Company, Subscription],
  synchronize: true,
  logging: false,
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
const dbConnection = () => {
  AppDataSource.initialize()
    .then(() => {
      logger.info("Database connection initialized");
      // here you can start to work with your database
      console.log("Database connected");
    })
    .catch((error) => {
      logger.error("Error connecting to database: ", error);
      console.log(error);
    });
};
export default dbConnection;
