
import multer from 'multer';
import path from 'path';

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../upload'))
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
});