import { Request, Response } from 'express';
import { insertCar, getCars, getCar } from '../services/item';
import { handleHttp } from '../utils/error.handle';

export const getItem = async (req: Request, res: Response) => {
    try {
        const response = await getCar(req.params.id);
        res.send(response);
    } catch (error) {
        handleHttp(res, `ERROR_GET_ITEM ${error}`);
    }
};

export const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send((response))
    } catch (error) {
        handleHttp(res, `ERROR_GET_ITEMS ${error}`);
    }
};

export const updateItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHttp(res, `ERROR_UPDATE_ITEM ${error}`);
    }
};

export const postItem = async (req: Request, res: Response) => {
    try {
        const response = await insertCar(req.body);
        res.send(response);
    } catch (error) {
        handleHttp(res, `ERROR_POST_ITEM ${error}`);
    }
};

export const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHttp(res, `ERROR_DELETE_ITEM ${error}`);
    }
};