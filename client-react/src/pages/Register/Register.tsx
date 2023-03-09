import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Register.css';
// Services
import { registerUser } from '../../services';
// Hooks
import { useForm } from 'react-hook-form';
// Assets
import logo from '../../assets/icon.png';
import { LoadingIcon } from '../../assets/icons';

export const Register = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    const handleRegister = async (data: any) => {
        try {
            setLoading(true);
            await registerUser(data.name, data.email, data.password);
            return navigate('/login');
        } catch (error) {
            setError('error');
        } finally {
            setLoading(false);
        }
    };

    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    });

    return (
        <div className='registerContainer'>
            <form onSubmit={handleSubmit(handleRegister)} className='registerForm'>
                <img className='logo' src={logo} alt='logo' />
                <h2 className='registerFormTitle'>Registrarte</h2>
                {error && <p style={{ margin: '-12px 0 12px', color: 'red'}}>{error}</p>}
                <input
                    {...register('name', { required: true })}
                    className='inputregister'
                    type='text'
                    name='name'
                    placeholder='Nombre'
                    style={errors.name ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px var(--background2)' }}
                />
                <input
                    {...register('email', { required: true })}
                    className='inputregister'
                    type='text'
                    name='email'
                    placeholder='Email'
                    style={errors.email ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px var(--background2)' }}
                />
                <input
                    {...register('password', { required: true })}
                    className='inputregister'
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    style={errors.password ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px var(--background2)' }}
                />
                <input
                    {...register('confirm_password',
                        {
                            required: true,
                            validate: (val: string) => {
                                if (watch('password') != val) {
                                    return 'err'
                                }
                            }
                        })}
                    className='inputregister'
                    type='password'
                    name='confirm_password'
                    placeholder='Repetir contraseña'
                    style={errors.confirm_password ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px var(--background2)' }}
                />
                <button className='registerButton' type='submit'>
                    {loading ? <LoadingIcon /> : 'Registrarte'}
                </button>
            </form>
            <p className='subtitle'>¿Ya tienes una cuenta?</p>
            <NavLink to='/login'>Inicia sesión.</NavLink>
        </div>
    )
};