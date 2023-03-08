import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../../services';
import './Register.css';
import { useForm } from 'react-hook-form';
import logo from '../../assets/icon.png';
import { LoadingIcon } from '../../assets/icons';

export const Register = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleRegister = async (data: any) => {
        setLoading(true);
        console.log(data);
        await registerUser(data.email, data.password);
        setLoading(false);
        return navigate('/login');
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    return (
        <div className='registerContainer'>
            <form onSubmit={handleSubmit(handleRegister)} className='registerForm'>
                <img className='logo' src={logo} alt="logo" />
                <h2 className='registerFormTitle'>Registrarte</h2>
                <input
                    {...register('email', { required: true })}
                    className='inputregister'
                    type="text"
                    name="email"
                    placeholder="Email"
                    style={errors.email ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px #353535' }}
                />
                <input
                    {...register('password', { required: true })}
                    className='inputregister'
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    style={errors.password ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px #353535' }}
                />
                <button className='registerButton' type="submit">
                    {loading ? <LoadingIcon /> : 'Registrarte'}
                </button>
            </form>
            <p className='subtitle'>¿Ya tienes una cuenta?</p>
            <NavLink to='/login'>Inicia sesión.</NavLink>
        </div>
    )
};