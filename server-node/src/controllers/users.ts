import { Request, Response } from 'express';
import { getAll, getOne, logUser, regUser } from '../services/users';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await getAll();
        res.send(response);
    } catch (error) {
        console.log(error)
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const response = await getOne(req.cookies.token);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const response = await logUser(req.body);
        if (!response) throw 'user or password wrong';
        res.cookie('token', response, {
            path: '/',
            secure: true,
            httpOnly: true
        }).status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send({error});
    }
};

export const logout = (req: Request, res: Response) => {
    try {
        res.cookie('token', req.cookies.token, {
            path: '/',
            secure: true,
            httpOnly: true,
            expires: new Date(Date.now())
        }).send({logout: 'success'});
    } catch (error) {
        console.log(error);
        res.status(400).send({error});
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const response = await regUser(req.body);
        res.send(response);
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};