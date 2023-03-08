import { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

export const Login = () => {
    const setAuth = useAuthStore((state: any) => state.setAuth);

    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = (e: any) => {
        e.preventDefault();
        setAuth('123456');
    };

    return (
        <div className='loginContainer'>
            <form className='loginForm' onSubmit={handleLogin}>
                <h2 className='loginFormTitle'>Iniciar sesión</h2>
                <input
                    className='inputLogin'
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="Email"
                />
                <input
                    className='inputLogin'
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                />
                <button className='loginButton' type="submit">Iniciar sesión</button>
            </form>
            <p className='subtitle'>¿No tienes una cuenta?</p>
            <NavLink to='/register'>Registrate.</NavLink>
        </div>
    )
};