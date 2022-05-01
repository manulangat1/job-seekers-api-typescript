import express from "express";
import { authMiddelwares } from "../../middlewares/authentication";
import authController from "./authController";

const Router = express.Router();

Router.get("/profile", authMiddelwares.isAuth, authController.getUser);
Router.post("/register", authController.createUser);
Router.post("/login", authController.login);

export default Router;
