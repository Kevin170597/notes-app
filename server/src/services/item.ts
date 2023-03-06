import { ItemModel } from "../models/item";
import { Car } from '../interfaces/car.interface';

export const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert
};

export const getCars = async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
};

export const getCar = async (id: string) => {
    const responseItem = await ItemModel.findOne({_id: id});
    return responseItem;
};