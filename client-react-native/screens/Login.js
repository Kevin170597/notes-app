import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Link } from '@react-navigation/native';
import Logo from '../assets/logo.png';
import { login } from '../services/user';
import { useAuthStore } from '../store/useAuthStore';
import { useLoggedUserStore } from '../store/useLoggedUserStore';

export const Login = () => {
    const setAuth = useAuthStore((state) => state.setAuth);
    const setLoggedUser = useLoggedUserStore((state) => state.setLoggedUser);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (data) => {
        try {
            setLoading(true);
            const response = await login(data.email, data.password);
            setLoggedUser(response.user);
            setAuth(response.token);
        } catch (error) {
            setError('error');
        } finally {
            setLoading(false);
        }
    };

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginForm}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.loginFormTitle}>Iniciar sesión</Text>
                <Controller
                    control={control}
                    rules={{ required: true }}
                    name='email'
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.inputLogin, errors.email ?
                                {
                                    borderWidth: 1,
                                    borderColor: '#e77b32'
                                } :
                                {
                                    borderWidth: 1,
                                    borderColor: '#353535'
                                }]}
                            placeholderTextColor='#6e6e6e'
                            placeholder='Email'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                />
                <Controller
                    control={control}
                    rules={{ required: true }}
                    name='password'
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.inputLogin, errors.password ?
                                {
                                    borderWidth: 1,
                                    borderColor: '#e77b32'
                                } :
                                {
                                    borderWidth: 1,
                                    borderColor: '#353535'
                                }]}
                            placeholderTextColor='#6e6e6e'
                            placeholder='Contraseña'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            secureTextEntry={true}
                            autoCapitalize='none'
                        />
                    )}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(handleLogin)}>
                    {loading ?
                        <ActivityIndicator size='large' color='#fff' />
                        :
                        <Text style={{ color: '#fff' }}>
                            Iniciar sesión
                        </Text>
                    }
                </TouchableOpacity>
            </View>
            <Text style={{ color: '#949393', marginTop: 10 }}>¿No tienes una cuenta?</Text>
            <Link style={{ color: '#9654bd', marginTop: 10 }} to={{ screen: 'Register' }}>
                Registrate.
            </Link>
        </View>
    )
};

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: '#252525',
        height: '100%',
        alignItems: 'center'
    },
    loginForm: {
        borderWidth: 1,
        borderColor: '#353535',
        alignItems: 'center',
        width: '90%',
        paddingTop: 24,
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderRadius: 10,
        marginTop: 40
    },
    logo: {
        width: 80,
        height: 80
    },
    loginFormTitle: {
        color: '#fff',
        marginTop: 8,
        marginBottom: 24,
        fontSize: 20
    },
    inputLogin: {
        width: '90%',
        height: 50,
        marginBottom: 24,
        borderRadius: 8,
        paddingLeft: 16,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#353535'
    },
    loginButton: {
        backgroundColor: '#724d94',
        height: 50,
        width: '90%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});