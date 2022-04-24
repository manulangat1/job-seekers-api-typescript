
import multer from 'multer';
import multerS3 from 'multer-s3';
import { Request,Response } from 'express';
import S3 from 'aws-sdk/clients/s3'
import errorHandler from '../helpers/errorHandler';
import fs from 'fs';
const bucketName = process.env.bucket
const region = process.env.region!
const secretKeyId = process.env.secretKeyId!
const accessKeyId = process.env.accessKeyId!


const s3 = new S3({
    region,
    secretKeyId,
    accessKeyId,
    acl: 'public-read'
})

export class Uploads{

    static async upload( file:any){
        try {
            const fileStream = fs.createReadStream(file.path);
            const uploadParams = {
                Bucket:bucketName,
                Body: fileStream,
                Key: file.filename,
                acl: 'public-read',
            }
            return s3.upload(uploadParams).promise()
            // const s3 = new aws.S3({
            //     accessKeyId: process.env.accessKeyId,
            //     secretAccessKey: process.env.secretAccessKey,
            //     // Bucket: '',
            //     region:process.env.region,
            // })
        
            // const upload = multer({
            //     storage: multerS3({
            //         s3,
            //         bucket: process.env.bucket!,
            //         metadata: function (req, file, cb) {
            //             cb(null, { fieldName: file.fieldname });
            //         },
            //         key: function (req, file, cb) {
            //             cb(null, Date.now().toString())
            //         }
            //     })
            // })
            // upload.single('images')
            // next()
        } catch (error) {
            errorHandler(res,500,error)
        }
        
    }
}


