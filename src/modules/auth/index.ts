import express from "express";
import authController from "./authController";

const Router = express.Router();

Router.get("/", authController.getUser);
Router.post("/register", authController.createUser);
Router.post("/login", authController.login);

export default Router;
