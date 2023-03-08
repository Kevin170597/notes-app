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
    const user = await jwt.verify(token, process.env.JWT_SECRET);
    const response = await UserModel.findOne({_id: user._id});
    return response;
};

export const logUser = async (user: User) => {
    const response = await UserModel.findOne({email: user.email});
    const compare = await bcrypt.compare(user.password, response?.password);
    const userdata = {
        _id: response?._id,
        email: response?.email,
        name: response?.name
    }
    if (compare) {
        return {
            user: userdata,
            token: jwt.sign(response?.toJSON(), process.env.JWT_SECRET)
        }
    } else return null;
};

interface RegUser {
    email: string,
    password: string
}

export const regUser = async (user:RegUser) => {
    user.password = await bcrypt.hash(user.password, 8);
    const response = await UserModel.create(user);
    return response;
};