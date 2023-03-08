import { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { useLoggedUserStore } from '../../store/useLoggedUserStore';
import { useForm } from 'react-hook-form';
import logo from '../../assets/icon.png';
import { login } from '../../services';
import { LoadingIcon } from '../../assets/icons';

export const Login = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const setAuth = useAuthStore((state: any) => state.setAuth);
    const setLoggedUser = useLoggedUserStore((state: any) => state.setLoggedUser);

    const handleLogin = async (data: any) => {
        setLoading(true);
        const response = await login(data.email, data.password);
        setLoggedUser(response.user);
        setAuth(response.token);
        setLoading(false);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    return (
        <div className='loginContainer'>
            <form onSubmit={handleSubmit(handleLogin)} className='loginForm'>
                <img className='logo' src={logo} alt="logo" />
                <h2 className='loginFormTitle'>Iniciar sesión</h2>
                <input
                    {...register('email', { required: true })}
                    className='inputLogin'
                    type="text"
                    name="email"
                    placeholder="Email"
                    style={errors.email ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px #353535'}}
                />
                <input
                    {...register('password', { required: true })}
                    className='inputLogin'
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    style={errors.password ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px #353535'}}
                />
                <button className='loginButton' type="submit">
                    {loading ? <LoadingIcon /> : 'Iniciar sesión'}
                </button>
            </form>
            <p className='subtitle'>¿No tienes una cuenta?</p>
            <NavLink to='/register'>Registrate.</NavLink>
        </div>
    )
};