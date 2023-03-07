import { useNavigate } from 'react-router-dom';
import './NoteCard.css';

export const NoteCard = ({ note }: any) => {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: note.color }} className='noteCard' onClick={() => navigate(`/note/${note._id}`, { state: { note } })}>
            <b>{note.title}</b>
            <p>{note.content}</p>
        </div>
    )
};