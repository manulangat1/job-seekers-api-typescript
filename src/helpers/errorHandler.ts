import { Request,Response} from 'express';
export default (res:Response,status:any,data:any) => {
    res.status(status).send(
        data,
    )
}