import { useState, useEffect } from 'react';
import { View, Text, TextInput,  StyleSheet } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Hooks
import { useForm, Controller } from 'react-hook-form';
// Services
import { createNote } from '../services/notes';
// Components
import { Header } from '../features/ReadUpdateNote/components/Header';
// Constants
import colors from '../constants/colors';
// Global stores
import { useLoggedUserStore } from '../store/useLoggedUserStore';

export const CreateNote = () => {
    const { _id } = useLoggedUserStore((state) => state.loggedUser);

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState('#b69cff');

    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            content: '',
        }
    });

    const handleCreateNote = async (data) => {
        data.color = color;
        data.owner = _id;
        setLoading(true);
        await createNote(data);
        setLoading(false);
        navigation.navigate('NotesList');
    };

    useEffect(() => {
        setValue('color', '#b69cff');
    }, []);

    return (
        <View style={styles.createNoteContainer}>
            <Header
                saving={loading}
                save={handleSubmit(handleCreateNote)}
                color={color}
                setColor={setColor}
            />
            <View style={styles.newNote}>
                <Controller
                    control={control}
                    rules={{ required: true }}
                    name='title'
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.input, errors.title ?
                                {
                                    borderWidth: 1,
                                    borderColor: '#e77b32'
                                } :
                                {
                                    borderWidth: 0
                                }]}
                            placeholderTextColor='#6e6e6e'
                            placeholder='Título'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                <Controller
                    control={control}
                    rules={{ required: true }}
                    name='content'
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.textarea, errors.content ?
                                {
                                    borderWidth: 1,
                                    borderColor: '#e77b32'
                                } :
                                {
                                    borderWidth: 0
                                }]}
                            multiline
                            placeholderTextColor='#6e6e6e'
                            placeholder='Escribir...'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    createNoteContainer: {
        height: '100%',
        backgroundColor: colors.background
    },
    newNote: {
        height: '90%',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    input: {
        width: '100%',
        height: '8%',
        fontSize: 24,
        paddingHorizontal: 16,
        borderRadius: 8,
        color: colors.font2
    },
    textarea: {
        width: '100%',
        height: '92%',
        marginTop: 10,
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        textAlignVertical: 'top',
        color: colors.font2
    },
});