import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from 'react-native';
// Navigation
import { Link } from '@react-navigation/native';
// Hooks
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
// Assets
import Logo from '../assets/logo.png';
// Services
import { registerUser } from '../services/user';
// Constants 
import colors from '../constants/colors';

export const Register = () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (data) => {
        try {
            setLoading(true);
            await registerUser(data.name, data.email, data.password);
            navigation.navigate('Login');
        } catch (error) {
            setError('error');
        } finally {
            setLoading(false);
        }
    };

    const { control, watch, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    });

    return (
        <View style={styles.registerContainer}>
            <View style={styles.registerForm}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.registerFormTitle}>Registrarte</Text>
                <Controller
                    control={control}
                    rules={{ required: true }}
                    name='name'
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.inputregister, errors.name ?
                                {
                                    borderWidth: 1,
                                    borderColor: '#e77b32'
                                } :
                                {
                                    borderWidth: 1,
                                    borderColor: '#353535'
                                }]}
                            placeholderTextColor='#6e6e6e'
                            placeholder='Nombre'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                <Controller
                    control={control}
                    rules={{ required: true }}
                    name='email'
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.inputregister, errors.email ?
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
                            style={[styles.inputregister, errors.password ?
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
                <Controller
                    control={control}
                    rules={
                        {
                            required: true,
                            validate: (val) => {
                                if (watch('password') != val) {
                                    return 'err'
                                }
                            }
                        }}
                    name='confirm_password'
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.inputregister, errors.confirm_password ?
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
                <TouchableOpacity style={styles.registerButton} onPress={handleSubmit(handleRegister)}>
                    {loading ?
                        <ActivityIndicator size='large' color='#fff' />
                        :
                        <Text style={{ color: '#fff' }}>
                            Registrarte
                        </Text>
                    }
                </TouchableOpacity>
            </View>
            <Text style={{ color: '#949393', marginTop: 10 }}>¿Ya tienes una cuenta?</Text>
            <Link style={{ color: '#9654bd', marginTop: 10 }} to={{ screen: 'Login' }}>
                Inicia sesión.
            </Link>
        </View>
    )
};

const styles = StyleSheet.create({
    registerContainer: {
        backgroundColor: colors.background,
        height: '100%',
        alignItems: 'center'
    },
    registerForm: {
        borderWidth: 1,
        borderColor: colors.lines,
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
    registerFormTitle: {
        color: colors.font,
        marginTop: 8,
        marginBottom: 24,
        fontSize: 20
    },
    inputregister: {
        width: '90%',
        height: 50,
        marginBottom: 24,
        borderRadius: 8,
        paddingLeft: 16,
        color: colors.font,
        borderWidth: 1,
        borderColor: colors.lines
    },
    registerButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: '90%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});