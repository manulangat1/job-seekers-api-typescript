// @ts-ignore
import {Blog,Projects} from './../../database/models'
import responseHandler from '../../helpers/responseHandler';

import { Request,Response} from 'express'
import errorHandler from '../../helpers/errorHandler';
import { Uploads } from '../../middlewares/aws';



export class blogController{

    static async getBlogs(req:Request, res: Response){
        try {
            const blogs = await Blog.findAll({order: [['updatedAt','DESC']]});
            const data = {
                count:blogs.length,
                blogs
            }
            return responseHandler(res,200,data)
        } catch (error) {
            errorHandler(res,500,error)
        }
    }

    static async addBlog(req:Request,res:Response){
        try {
            
            const  { title, description,content } = req.body;
            const image = await Uploads.upload(req.file)
            const Location = image?.Location
            const blog = await Blog.create({ title,description,content,image:Location})
            return responseHandler(res,201,blog );
        } catch (error) {
            errorHandler(res,500,error)
        }
    }

    static async getBlog(req:Request, res: Response): Promise<blog>{
        try {
            const blog = await Blog.findOne({where:{id:req.params.id}});
            
            return responseHandler(res,200,blog)
        } catch (error) {
            errorHandler(res,500,error)
        }
    }

    static async getProjects(req: Request, res: Response){
        try {
            const projects = await Projects.findAll({order: [['updatedAt','DESC']]});
            return responseHandler(res,200,projects);
        } catch (error) {
            errorHandler(res,500,error)
        }
    }
    static async addProject(req:Request, res: Response){
        try {
            const { title, description, liveLink, gitLink} = req.body;
            const image = await Uploads.upload(req.file);
            const Location = image?.Location
            const project = await Projects.create({
                title, description, liveLink, gitLink,
                image:Location
            })
            return responseHandler(res,201,project);
        } catch (error) {
            errorHandler(res,500,error)
        }
    }
}