import { Image } from '../interfaces/image.interface';
import { ImageModel } from '../models/image';

export const getImagesService = async () => {
    const response = await ImageModel.find({});
    return response;
};

export const uploadImagesService = async (image:Image) => {
    const response = await ImageModel.create(image);
    console.log('creating image');
    return response;
};