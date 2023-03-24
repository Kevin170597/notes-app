import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './routes';
import { dbConnect } from './config/mongo';
import path from 'path';

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({ credentials: true, origin: '*'}));
app.use(express.json());
app.use(cookieParser());
app.use(router);

//app.use(express.static(path.join(__dirname, 'upload')));
app.use('/images/upload', express.static(path.join(__dirname, 'upload')));

dbConnect().then(() => console.log('mongodb connected'))

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));