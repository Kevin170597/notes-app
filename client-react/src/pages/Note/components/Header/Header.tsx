import './Header.css';
import { NavLink } from 'react-router-dom';
import { ArrowBackIcon } from '../../../../assets/icons/ArrowBack';
import { LoadingIcon } from '../../../../assets/icons/Loading';
import { DoneIcon } from '../../../../assets/icons/Done';
import { ColorSelector } from '../ColorSelector/ColorSelector';

export const Header = ({ saving, update, color, note, setNote }: any) => {

    return (
        <header className='header'>
            <button className='backButton'>
                <NavLink to='/'>
                    <ArrowBackIcon />
                </NavLink>
            </button>
            <h2 className='title'>Notas</h2>
            <ColorSelector color={color} setNote={setNote} note={note} />
            <button className='saveButton' onClick={update}>
                {saving ? <LoadingIcon /> : <DoneIcon />}
            </button>
        </header>
    )
};