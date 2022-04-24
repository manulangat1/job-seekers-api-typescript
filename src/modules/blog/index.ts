import  express from 'express';
import { authMiddelwares } from '../../middlewares/authentication';
import { Uploads } from '../../middlewares/aws';
import { blogController } from './blogController';
import multer from 'multer'

const upload = multer({dest:'uploads/'})

const Router = express.Router();


Router.get('/blogs'  , authMiddelwares.isAuth ,blogController.getBlogs);

Router.post('/blog', authMiddelwares.isAuth,  upload.single('images'),blogController.addBlog);

Router.get('/blog/:id',blogController.getBlog)


Router.get('/projects',blogController.getProjects)

Router.post('/project',authMiddelwares.isAuth,  upload.single('images'),blogController.addProject)

export default Router;