import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { createNote } from '../services/notes';
import { Header } from '../features/ReadUpdateNote/components/Header';

export const CreateNote = () => {
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
        data.owner = '640823420f79b645e467fd16';
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
        backgroundColor: '#252525'
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
        color: '#b9b9b9'
    },
    textarea: {
        width: '100%',
        height: '92%',
        marginTop: 10,
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        textAlignVertical: 'top',
        color: '#b9b9b9'
    },
});