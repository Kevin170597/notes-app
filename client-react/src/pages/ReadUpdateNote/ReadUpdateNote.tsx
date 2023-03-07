import { useParams } from "react-router-dom";
import './ReadUpdateNote.css';
import { useState, useEffect } from "react";
import { getNote, updateNote } from "../../services/notes";
import { Header } from "./components";

export const ReadUpdateNote = () => {
    const { id }:any = useParams();

    const [note, setNote] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const handlerGetNote = async () => {
        const response = await getNote(id);
        setNote(response);
    };

    const handlerUpdateNote = async () => {
        setLoading(true);
        await updateNote(id, note);
        setLoading(false);
    };

    useEffect(() => {
        handlerGetNote();
    }, []);

    return (
        <div className="addNoteContainer">
            <Header saving={loading} save={handlerUpdateNote} color={note?.color} note={note} setNote={setNote} />
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
        </div>
    )
};