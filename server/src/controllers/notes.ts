import { Request, Response } from 'express';
import { getAllNotesService, getNoteByIdService, getNotesByUserIdService, postNoteService, updateNoteService, deleteNoteService } from '../services/notes';

export const getAllNotes = async (req: Request, res: Response) => {
    try {
        const response = await getAllNotesService();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const getNoteById = async (req: Request, res: Response) => {
    try {
        const response = await getNoteByIdService(req.params.id);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const getNotesByUserId = async (req: Request, res: Response) => {
    try {
        const response = await getNotesByUserIdService(req.params.userid);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const postNote = async (req: Request, res: Response) => {
    try {
        const response = await postNoteService(req.body);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const updateNote = async (req: Request, res: Response) => {
    try {
        const response = await updateNoteService(req.params.id, req.body);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const deleteNote = async (req: Request, res: Response) => {
    try {
        const response = await deleteNoteService(req.params.id);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};