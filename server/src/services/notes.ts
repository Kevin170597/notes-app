import { NoteModel } from "../models/notes";
import { Note } from "../interfaces/notes.interface";

export const getAllNotesService = async () => {
    const response = await NoteModel.find({});
    return response;
};

export const getNoteByIdService = async (id: string) => {
    const response = await NoteModel.find({ _id: id });
    return response;
};

export const getNotesByUserIdService = async (userid: string) => {
    const response = await NoteModel.find({ owner: userid });
    return response;
};

export const postNoteService = async (note: Note) => {
    const response = await NoteModel.create(note);
    return response;
};

export const updateNoteService = async (id: string, data: any) => {
    const response = await NoteModel.updateOne({ _id: id }, data);
    return response;
};

export const deleteNoteService = async (id: string) => {
    const response = await NoteModel.deleteOne({ _id: id});
    return response;
};