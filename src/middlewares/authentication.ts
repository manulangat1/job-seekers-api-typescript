import jwt from 'jsonwebtoken';
import { Request,Response} from 'express';
// @ts-ignore
import {User } from './../database/models'
import errorHandler from '../helpers/errorHandler';
import dotenv from 'dotenv';
dotenv.config();
export class authMiddelwares {
    static async isAuth(req:any,res:Response,next:any){
        try {

            const token = req.header('Authorization').replace('Bearer ','');

            //@ts-ignore
            const data = await jwt.verify(token,process.env.JWT_SECRET_KEY);
            const { email } = data
            const user = await User.findOne({where:{email:email}})

            
            req.user = user.dataValues;
            req.token = token;
            next();

        } catch (error) {
            return errorHandler(res,500,error);
        }
    }
}