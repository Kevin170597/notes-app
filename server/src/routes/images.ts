import { Router } from 'express';
import { getImages, uploadImages } from '../controllers/images';
import { storage } from '../config/multer';
import multer from 'multer';

const fileUpload = multer({storage}).single('image');

const router = Router();

router.get('/upload', getImages);
router.post('/upload', fileUpload, uploadImages);

export { router };