import { Request, Response, NextFunction } from 'express';
// @ts-ignore
import jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) res.status(403).send({ message: 'Authorization token needed.' });

    try {
        const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        //console.log(16, decoded);
        next();
    } catch (error: any) {
        res.status(401).send({ message: 'Invalid authorization token.' });
    }
};