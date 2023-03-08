import { useState, useEffect } from "react";
import './ReadUpdateNote.css';
import { useParams } from "react-router-dom";
import { getNote, updateNote, deleteNote } from "../../services/notes";
import { Header } from "./components";
import { Modal } from "../../components";
import { useNavigate } from "react-router-dom";

export const ReadUpdateNote = () => {
    const navigate = useNavigate();
    const { id }: any = useParams();

    const [note, setNote] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    const handlerGetNote = async () => {
        const response = await getNote(id);
        setNote(response);
    };

    const handlerUpdateNote = async () => {
        setLoading(true);
        await updateNote(id, note);
        setLoading(false);
    };

    const handleDelete = async () => {
        await deleteNote(id);
        setModal(false);
        navigate('/');
    };

    useEffect(() => {
        handlerGetNote();
    }, []);

    return (
        <div className="addNoteContainer">
            <Header
                deleteButton
                setModal={setModal}
                saving={loading}
                save={handlerUpdateNote}
                color={note?.color}
                note={note}
                setNote={setNote}
            />
            {note &&
                <div className="note">
                    <input
                        type="text"
                        placeholder="Título"
                        value={note.title}
                        onChange={(e) => setNote({ ...note, title: e.target.value })}
                    />
                    <textarea
                        name=""
                        cols={30}
                        rows={10}
                        value={note.content}
                        onChange={(e) => setNote({ ...note, content: e.target.value })}
                    />
                </div>
            }
            {modal &&
                <Modal content={
                    <div>
                        <p className="title">¿Eliminar?</p>
                        <button
                            className="cancelButton"
                            onClick={() => setModal(false)}>
                            Cancelar
                        </button>
                        <button
                            className="deleteButton"
                            onClick={handleDelete}>
                            Eliminar
                        </button>
                    </div>
                } />
            }
        </div>
    )
};