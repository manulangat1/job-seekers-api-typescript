import jwt from "jsonwebtoken";
import { Request, Response } from "express";
// @ts-ignore
import { User } from "./../database/models";
import errorHandler from "../helpers/errorHandler";
import dotenv from "dotenv";
import authDbRepo from "../modules/auth/dbRepository";
import responseHandler from "../helpers/responseHandler";
dotenv.config();
export class authMiddelwares {
  static async isAuth(req: any, res: Response, next: any) {
    try {
      const token = req.header("Authorization").replace("Bearer ", "");
      //@ts-ignore
      if (!token) {
        return responseHandler(res, 401, "Unauthorized");
      }

      const data = await jwt.verify(
        token,
        process.env.JWT_SECRET_KEY || "hello"
      );
      const { email } = data;
      const user = await authDbRepo.findUserByEmail(email);
      //   const user = await User.findOne({ where: { email: email } });

      req.user = user;
      req.token = token;
      next();
    } catch (error) {
      console.log(error);
      return errorHandler(res, 500, error.message);
    }
  }
}
