import { Request, Response } from 'express';
import { getImagesService, uploadImagesService } from '../services/images';

export const getImages = async (req: Request, res: Response) => {
    try {
        const response = await getImagesService();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const uploadImages = async (req: Request, res: Response) => {
    try {
        let name = `${req.file?.filename}`;
        const response = await uploadImagesService({
            fileName: name,
            url: `${req.protocol}://${req.get('host')}${req.originalUrl}/${name}`
        })
        //console.log(response);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};