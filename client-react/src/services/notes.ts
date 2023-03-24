import { Note } from "../models";
import { useAuthStore } from "../store/useAuthStore";
const API = 'https://notes-app-icv6-kevin170597.vercel.app';

export const getNotes = async (userid: string) => {
    const req = await fetch(`${API}/notes/user/${userid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: useAuthStore.getState().authToken
        }
    });
    const res = await req.json();
    //console.log(res);
    return res;
};

export const getNote = async (id: string) => {
    const req = await fetch(`${API}/notes/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: useAuthStore.getState().authToken
        }
    });
    const res = await req.json();
    //console.log(res);
    return res[0];
};

export const createNote = async (note: Note) => {
    const req = await fetch(`${API}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: useAuthStore.getState().authToken
        },
        body: JSON.stringify(note)
    });
    const res = await req.json();
    //console.log(res);
    return res;
};

export const updateNote = async (id: string, note: Note) => {
    const req = await fetch(`${API}/notes/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: useAuthStore.getState().authToken
        },
        body: JSON.stringify(note)
    });
    const res = await req.json();
    // console.log(res);
    return res;
};

export const deleteNote = async (id: string) => {
    const req = await fetch(`${API}/notes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: useAuthStore.getState().authToken
        }
    });
    const res = await req.json();
    // console.log(res);
    return res;
};