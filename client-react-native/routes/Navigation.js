import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens Components
import { NotesList } from '../screens/NotesList';
import { ReadUpdateNote } from '../screens/ReadUpdateNote';
import { CreateNote } from '../screens/CreateNote';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { SplashScreen } from '../screens/SplashScreen';
// Global stores
import { useAuthStore } from '../store/useAuthStore';
import { useLoggedUserStore } from '../store/useLoggedUserStore';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    const [loadingToken, setLoadingToken] = useState(false);

    const authToken = useAuthStore((state) => state.authToken);
    const getAuth = useAuthStore((state) => state.getAuth);
    const getLoggedUser = useLoggedUserStore((state) => state.getLoggedUser);

    const handleGetToken = async () => {
        setLoadingToken(true);
        await getAuth();
        setLoadingToken(false);
    };

    useEffect(() => {
        getLoggedUser();
        handleGetToken();
    }, []);

    if (loadingToken) return <SplashScreen />;

    return (
        <Stack.Navigator initialRouteName='NotesList'>
            {authToken ? (
                <>
                    <Stack.Screen
                        name='NotesList'
                        component={NotesList}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='ReadUpdateNote'
                        component={ReadUpdateNote}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='CreateNote'
                        component={CreateNote}
                        options={{ headerShown: false }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name='Login'
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Register'
                        component={Register}
                        options={{ headerShown: false }}
                    />
                </>
            )}
        </Stack.Navigator>
    )
};