import { useEffect, useState } from 'react';
import './NotesList.css';
import { FloatingButton } from '../../components';
import { AddIcon } from '../../assets/icons/Add';
import { Header, NoteCard } from './components';

export const NotesList = () => {
    const [notes, setNotes] = useState<any>();

    const getNotes = async () => {
        const req = await fetch('https://notes-app-production-fa30.up.railway.app/notes');
        const res = await req.json();
        console.log(res);
        setNotes(res);
    };

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div className='notesContainer'>
            <Header />
            <div className='cardList'>
                {notes &&
                    notes.map((note: any) =>
                        <NoteCard key={note._id} note={note} />
                    )
                }
                {!notes && <p>cargando...</p> }
                {notes && notes.length === 0 &&
                    <p>no hay notas</p>
                }
            </div>
            <FloatingButton icon={<AddIcon />} />
        </div>
    )
};