import { useEffect, useState } from 'react';
import './NotesList.css';
import { useNavigate } from 'react-router-dom';
import { FloatingButton, ImageMessage } from '../../components';
import { AddIcon } from '../../assets/icons';
import { Header, NoteCard } from './components';
import { LoadingIcon } from '../../assets/icons';
import Empty from '../../assets/empty.png';
import Error from '../../assets/error.png';
import { getNotes } from '../../services';
import { useLoggedUserStore } from '../../store/useLoggedUserStore';

export const NotesList = () => {
    const { _id } = useLoggedUserStore((state: any) => state.loggedUser);

    const navigate = useNavigate();
    const [notes, setNotes] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleGetNotes = async () => {
        try {
            setLoading(true);
            const res = await getNotes(_id);
            setNotes(res);
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
                    notes.map((note: any) =>
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