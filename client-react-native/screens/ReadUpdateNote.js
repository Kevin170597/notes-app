import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getNote, updateNote, deleteNote } from '../services/notes';
import { useForm, Controller } from 'react-hook-form';
import { Header } from '../features/ReadUpdateNote/components/Header';
import { Modal } from '../components/Modal';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ReadUpdateNote = ({ route }) => {
    const navigation = useNavigation();

    const [note, setNote] = useState();
    const [color, setColor] = useState();
    const [loading, setLoading] = useState(false);
    const [updateLoading, setUpdateLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [error, setError] = useState(false);
    const [modal, setModal] = useState(false);

    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            content: '',
        }
    });

    const handlerUpdateNote = async (data) => {
        data.color = color;
        data.owner = '640823420f79b645e467fd16';
        setUpdateLoading(true);
        await updateNote(route.params._id, data);
        setUpdateLoading(false);
    };

    const handleDelete = async () => {
        setDeleteLoading(true);
        await deleteNote(route.params._id);
        setModal(false);
        setDeleteLoading(false);
        navigation.navigate('NotesList');
    };

    useFocusEffect(
        useCallback(() => {
            let isActive = true;
            const handlerGetNote = async () => {
                try {
                    setLoading(true);
                    const response = await getNote(route.params._id);
                    setValue('title', response.title);
                    setValue('content', response.content);
                    setColor(response.color);
                    if (isActive) setNote(response);
                } catch (error) {
                    setError(true);
                } finally {
                    setLoading(false);
                }
            };
            handlerGetNote();

            return () => {
                isActive = false;
            }
        }, [route.params._id])
    );

    return (
        <SafeAreaView style={styles.addNoteContainer}>
            <Header
                deleteButton
                setModal={setModal}
                saving={updateLoading}
                save={handleSubmit(handlerUpdateNote)}
                color={color}
                setColor={setColor}
            />
            <View style={styles.note}>
                {note &&
                    <>
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            name='title'
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
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
                                    style={styles.textarea}
                                    multiline
                                    placeholderTextColor='#6e6e6e'
                                    placeholder='Escribir...'
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                        />
                    </>
                }
            </View>
            {modal &&
                <Modal content={
                    <View>
                        <View style={styles.modalHeader}>
                            <Text style={{ color: '#fff' }}>¿Eliminar?</Text>
                            {deleteLoading && <Icon name='hourglass-top' size={24} color='#fff' />}
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setModal(false)}>
                                <Text style={{ color: '#fff' }}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                                <Text style={{ color: '#fff' }}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                } />
            }
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    addNoteContainer: {
        height: '100%',
        backgroundColor: '#252525'
    },
    note: {
        height: '90%',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingTop: 16
    },
    input: {
        width: '100%',
        height: '12%',
        fontSize: 24,
        paddingHorizontal: 16,
        borderRadius: 8,
        color: '#b9b9b9'
    },
    textarea: {
        width: '100%',
        height: '88%',
        padding: 16,
        fontSize: 16,
        textAlignVertical: 'top',
        color: '#b9b9b9'
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    cancelButton: {
        backgroundColor: '#535353',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginRight: 10
    },
    deleteButton: {
        backgroundColor: '#7059ab',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8
    }
});