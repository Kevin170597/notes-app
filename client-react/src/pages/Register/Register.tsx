import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { register } from '../../services';

export const Register = () => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleRegister = async (e:any) => {
        try {
            e.preventDefault();
            await register(name, password);
            return navigate('/login');
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='Register'>
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="name" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" />
                <button type="submit">Send</button>
            </form>
            <p>Do you have an account?</p>
            <NavLink to='/login'>Login</NavLink>
        </div>
    )
};