// Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Screens Components
import { NotesList } from '../screens/NotesList';
import { ReadUpdateNote } from '../screens/ReadUpdateNote';
import { CreateNote } from '../screens/CreateNote';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
// Global stores
import { useAuthStore } from '../store/useAuthStore';

const Stack = createStackNavigator();

export const Navigation = () => {

    const authToken = useAuthStore((state) => state.authToken);

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