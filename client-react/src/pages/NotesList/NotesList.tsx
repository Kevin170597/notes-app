import { useEffect, useState } from 'react';
import './NotesList.css';
import { useNavigate } from 'react-router-dom';
import { FloatingButton } from '../../components';
import { AddIcon } from '../../assets/icons';
import { Header, NoteCard } from './components';
import { LoadingIcon } from '../../assets/icons';
import Empty from '../../assets/empty.png';
import { getNotes } from '../../services';
import { useLoggedUserStore } from '../../store/useLoggedUserStore';

export const NotesList = () => {
    const { _id } = useLoggedUserStore((state: any) => state.loggedUser);

    const navigate = useNavigate();
    const [notes, setNotes] = useState<any>();

    const handleGetNotes = async () => {
        const res = await getNotes(_id);
        setNotes(res);
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
                {!notes && <LoadingIcon /> }
                {notes && notes.length === 0 &&
                    <div className='empty'>
                        <img src={Empty} alt="empty list" />
                        <p>Crea tus notas</p>
                    </div>
                }
            </div>
            <FloatingButton icon={<AddIcon />} onClick={() => navigate('/new')} />
        </div>
    )
};