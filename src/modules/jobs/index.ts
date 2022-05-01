import express from "express";
import { authMiddelwares } from "../../middlewares/authentication";
import jobController from "./jobController";

const Router = express.Router();

// Router.get("/", authController.getUser);
Router.get("/companies", jobController.getCompanies);
Router.post("/companies", jobController.createCompany);
Router.post("/jobs", jobController.createJob);
Router.get("/jobs", jobController.getAllJobs);
Router.post("/jobs/apply", authMiddelwares.isAuth, jobController.applyJob);
Router.get(
  "/jobs/applied",
  authMiddelwares.isAuth,
  jobController.getAllAppliedJobs
);

export default Router;
