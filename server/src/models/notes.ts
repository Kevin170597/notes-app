import { Schema, model } from 'mongoose';
import { Note } from '../interfaces/notes.interface';

const NoteShema = new Schema<Note>(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        owner: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const NoteModel = model('notes', NoteShema);