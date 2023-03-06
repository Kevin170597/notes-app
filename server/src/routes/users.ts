import { Router } from 'express';
import { getUsers, getUser, login, logout, register } from '../controllers/users';

const router = Router();

router.get('/', getUsers);
router.post('/user', getUser);

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);

export { router };