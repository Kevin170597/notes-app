import { useEffect, useState } from 'react';
import './NotesList.css';
import { useNavigate } from 'react-router-dom';
// Global Components
import { FloatingButton, ImageMessage } from '../../components';
// Page Components
import { Header, NoteCard } from './components';
// Services
import { getNotes } from '../../services';
// Global Stores
import { useLoggedUserStore } from '../../store/useLoggedUserStore';
// Typescript interfaces
import { Note, LoggedUserStore } from '../../models';
// Assets
import { LoadingIcon } from '../../assets/icons';
import { AddIcon } from '../../assets/icons';
import Empty from '../../assets/empty.png';
import Error from '../../assets/error.png';

export const NotesList = () => {
    const { _id } = useLoggedUserStore((state: LoggedUserStore) => state.loggedUser);

    const navigate = useNavigate();
    const [notes, setNotes] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleGetNotes = async () => {
        try {
            setLoading(true);
            const res = await getNotes(_id);
            setNotes(res.reverse());
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetNotes();
    }, []);

    return (
        <div className='notesContainer'>
            <Header />
            <div className='cardList'>
                {notes &&
                    notes.map((note: Note) =>
                        <NoteCard key={note._id} note={note} />
                    )
                }
                {loading && <LoadingIcon />}
                {notes && notes.length === 0 &&
                    <ImageMessage image={Empty} label='Crea tus notas' />
                }
                {error &&
                    <ImageMessage image={Error} label='Algo salió mal' />
                }
            </div>
            <FloatingButton icon={<AddIcon />} onClick={() => navigate('/new')} />
        </div>
    )
};