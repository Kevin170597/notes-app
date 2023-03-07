import './Header.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowBackIcon } from '../../../../assets/icons/ArrowBack';
import { LoadingIcon } from '../../../../assets/icons/Loading';
import { DoneIcon } from '../../../../assets/icons/Done';

export const Header = ({ saving, update, color, note, setNote }: any) => {
    const [colorSelector, setColorSelector] = useState<boolean>(false);

    return (
        <header className='header'>
            <button className='backButton'>
                <NavLink to='/'>
                    <ArrowBackIcon />
                </NavLink>
            </button>
            <h2 className='title'>Notas</h2>
            <button className='colorSelector' onClick={() => setColorSelector(!colorSelector)}>
                <div className='color' style={{ backgroundColor: color }}></div>
                <ArrowBackIcon />
            </button>
            {colorSelector &&
                <div className='colorSelectorModal'>
                    {['#ff9e9e', '#7fd57d', '#fff599', '#9effff', '#b69cff'].map((e) =>
                        <button
                            key={e}
                            onClick={() => setNote({ ...note, color: e })}
                            style={{ backgroundColor: e }}
                            className='colorOption'></button>
                    )}
                </div>
            }
            <button className='saveButton' onClick={update}>
                {saving ? <LoadingIcon /> : <DoneIcon />}
            </button>
        </header>
    )
};