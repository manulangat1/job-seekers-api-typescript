import express from "express";
import { authMiddelwares } from "../../middlewares/authentication";
import authDbRepo from "../auth/dbRepository";
import subcriptionController from "./subscriptionController";

const Router = express.Router();

// Router.get("/", authController.getUser);
Router.get("/subscriptions", subcriptionController.getSubscriptionTypes);
Router.post(
  "/subscriptions",
  authMiddelwares.isAuth,
  subcriptionController.createSubType
);

Router.post(
  "/create-user-subscription",
  authMiddelwares.isAuth,
  subcriptionController.createUserSubscription
);
// Router.post("/login", authController.login);

export default Router;
