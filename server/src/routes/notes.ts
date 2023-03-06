import { Router } from 'express';
import { getAllNotes, getNoteById, getNotesByUserId, postNote, updateNote, deleteNote } from '../controllers/notes';

const router = Router();

router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.get('/user/:userid', getNotesByUserId);

router.post('/', postNote);

router.patch('/:id', updateNote);

router.delete('/:id', deleteNote);

export { router };