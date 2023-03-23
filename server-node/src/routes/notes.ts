import { Router } from 'express';
import { getAllNotes, getNoteById, getNotesByUserId, postNote, updateNote, deleteNote } from '../controllers/notes';
import { auth } from '../middlewares/auth';

const router = Router();

router.get('/', getAllNotes);
router.get('/:id', auth, getNoteById);
router.get('/user/:userid', auth, getNotesByUserId);

router.post('/', auth, postNote);

router.patch('/:id', auth, updateNote);

router.delete('/:id', auth, deleteNote);

export { router };