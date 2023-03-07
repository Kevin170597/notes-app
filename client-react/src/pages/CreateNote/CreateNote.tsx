
import { useState } from 'react';
import './CreateNote.css';
import { Header } from '../ReadUpdateNote/components';

export const CreateNote = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [newNote, setNewNote] = useState<any>({
        title: '',
        content: '',
        color: '#b69cff',
        owner: '2'
    });

    const createNote = async () => {
        setLoading(true);
        const req = await fetch('https://notes-app-production-fa30.up.railway.app/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newNote)
        });
        const res = await req.json();
        //console.log(res);
        setLoading(false);
    };

    return (
        <div className='createNoteContainer'>
            <Header loading={loading} save={createNote} color={newNote.color} note={newNote} setNote={setNewNote} />
            <div className='newNote'>
                <input
                    type="text"
                    placeholder="Título"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                />
                <textarea
                    name=""
                    cols={30}
                    rows={10}
                    value={newNote.content}
                    onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                    placeholder='Escribir...'
                />
            </div>
        </div>
    )
};