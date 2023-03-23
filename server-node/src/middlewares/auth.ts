import { Request, Response, NextFunction } from 'express';
// @ts-ignore
import jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.cookies.token && !req.headers.authorization) res.status(403).send({ message: 'access denied' });

    try {
        if (req.cookies.token) {
            const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
            //console.log(11, decoded);
            next();
        }
        if (req.headers.authorization) {
            const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
            //console.log(16, decoded);
            next();
        }
    } catch (error: any) {
        res.status(401).send({ message: 'access denied' });
    }
};