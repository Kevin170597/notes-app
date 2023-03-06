import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/users";
// @ts-ignore
import jwt from 'jsonwebtoken';
// @ts-ignore
import bcrypt from 'bcrypt';

export const getAll = async () => {
    const response = await UserModel.find({});
    return response;
};

export const getOne = async (token: string) => {
    const user = await jwt.verify(token, 'mysecret');
    const response = await UserModel.findOne({_id: user._id});
    return response;
};

export const logUser = async (user: User) => {
    const response = await UserModel.findOne({name: user.name});
    const compare = await bcrypt.compare(user.password, response?.password);
    if (compare) {
        return jwt.sign(response?.toJSON(), 'mysecret');
    } else return null;
};

interface RegUser {
    name: string,
    password: string
}

export const regUser = async (user:RegUser) => {
    user.password = await bcrypt.hash(user.password, 8);
    const response = await UserModel.create(user);
    return response;
};