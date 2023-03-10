
import { createStackNavigator } from "@react-navigation/stack";
import { NotesList } from "../screens/NotesList";
import { ReadUpdateNote } from '../screens/ReadUpdateNote';
import { CreateNote } from "../screens/CreateNote";

const Stack = createStackNavigator();

export const Navigation = () => {

    return (
        <Stack.Navigator initialRouteName='NotesList'>
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
        </Stack.Navigator>
    )
};