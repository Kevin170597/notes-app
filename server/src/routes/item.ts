import { Router } from 'express';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/item';

const router = Router();

router.get('/', getItems);

router.get('/:id', getItem);

router.put('/:id', updateItem);

router.post('/', postItem);

router.delete('/:id', deleteItem);

export { router };