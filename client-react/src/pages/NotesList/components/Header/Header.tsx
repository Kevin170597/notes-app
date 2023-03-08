import { useState } from 'react';
import './Header.css';
import { useAuthStore } from '../../../../store/useAuthStore';
import { useLoggedUserStore } from '../../../../store/useLoggedUserStore';

export const Header = () => {
    const logout = useAuthStore((state: any) => state.logout);
    const loggedUser = useLoggedUserStore((state: any) => state.loggedUser);

    const [userModal, setUserModal] = useState<boolean>(false);

    const getLetters = (name: string) => {
        let namesArray = name.split(' ');
        return namesArray[0]?.charAt(0) + (namesArray[1] != undefined ? namesArray[1]?.charAt(0) : '')
    }

    return (
        <header className='header'>
            <h2>Notas</h2>
            <button className='profileButton' onClick={() => setUserModal(!userModal)}>
                {getLetters(loggedUser?.name)}
            </button>
            {userModal &&
                <div className='userModal'>
                    <p>{loggedUser?.name}</p>
                    <button onClick={logout}>Cerrar sesión</button>
                </div>
            }
        </header>
    )
};