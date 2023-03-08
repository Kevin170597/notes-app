import { NavLink } from 'react-router-dom';
import './Header.css';
import { ColorSelector } from '../ColorSelector/ColorSelector';
import { ArrowBackIcon, LoadingIcon, DeleteIcon, SaveIcon } from '../../../../assets/icons';

export const Header = ({ saving, save, color, note, setNote, deleteButton, setModal }: any) => {

    return (
        <header className='header'>
            <button className='backButton'>
                <NavLink to='/'>
                    <ArrowBackIcon />
                </NavLink>
            </button>
            <h2 className='title'>Notas</h2>
            <ColorSelector color={color} setNote={setNote} note={note} />
            {deleteButton &&
                <button className='actionButton' onClick={() => setModal(true)}>
                    <DeleteIcon />
                </button>
            }
            <button className='actionButton' onClick={save}>
                {saving ? <LoadingIcon /> : <SaveIcon />}
            </button>
        </header>
    )
};