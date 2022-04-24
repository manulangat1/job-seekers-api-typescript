import { Request, Response } from "express";
import responseHandler from "../../helpers/responseHandler";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
// @ts-ignore
import { User } from "./../../database/models";
import bcrypt from "bcryptjs";
import authService from "./authService";
import logger from "../../utils/logger";
import errorHandler from "../../helpers/errorHandler";
class authController {
  static async getUser(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      console.error("Hey,an error here");
    }
  }
  static async createUser(req: Request, res: Response) {
    logger.info(`Creating user with email ${req.body.email}`);
    try {
      const { username, password, email } = req.body;
      // const findUser = await User.findOne({where:{email}});
      const findUser = await authService.getUser(email);
      if (findUser) {
        logger.warn(`User with email  ${req.body.email} found`);
        return responseHandler(
          res,
          400,
          "A user Already exists with that email"
        );
      }

      const hash = await bcrypt.hashSync(password, 10);
      const userData = {
        username,
        password: hash,
        email,
        phone: "11",
        address: "11",
      };
      const user = await authService.createUser(userData);
      const data = {
        message: "User created successfully",
        data: user,
      };
      logger.info(`User created with email ${req.body.email}`);
      return responseHandler(res, 201, data);
    } catch (error) {
      logger.error(
        `Error creating user with email ${req.body.email} and error ${error.message}`
      );
      return errorHandler(res, 500, error.message);
    }
  }
  static async login(req: Request, res: Response) {
    try {
      const { password, email } = req.body;
      const findUser = await authService.getUser(email);
      if (findUser) {
        const isPassword = await bcrypt.compareSync(
          password,
          findUser.password
        );
        if (isPassword) {
          const token = jwt.sign(
            { email },
            process.env.JWT_SECRET_KEY || "hello",
            {
              expiresIn: "24h",
            }
          );
          const data = {
            message: "User logged in successfully",
            data: {
              token,
              user: findUser,
            },
          };
          return responseHandler(res, 200, data);
        }
        return responseHandler(res, 200, "login fail");
      }
      logger.warn(`User with email ${req.body.email} not found`);
      return responseHandler(res, 200, "User with email not found");
    } catch (error) {
      logger.error(
        `Errorlogging in user with email ${req.body.email} and error ${error.message}`
      );
      return errorHandler(res, 500, error.message);
    }
  }
}

export default authController;
