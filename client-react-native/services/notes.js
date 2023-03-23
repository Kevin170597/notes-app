import { useAuthStore } from '../store/useAuthStore';
const API = 'https://notes-app-production-fa30.up.railway.app';

export const getNotes = async (userid) => {
    const req = await fetch(`${API}/notes/user/${userid}`, {
        method: 'GET',
        headers: { Authorization: useAuthStore.getState().authToken }
    });
    const res = await req.json();
    //console.log(6, res);
    return res.reverse();
};

export const getNote = async (id) => {
    const req = await fetch(`${API}/notes/${id}`, {
        method: 'GET',
        headers: { Authorization: useAuthStore.getState().authToken }
    });
    const res = await req.json();
    //console.log(13, res);
    return res[0];
};

export const createNote = async (note) => {
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

export const updateNote = async (id, note) => {
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

export const deleteNote = async (id) => {
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