import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getNotes } from '../services/notes';
import { NoteCard } from '../widgets/NoteCard';
import { FloatingButton } from '../components/FloatingButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from '../features/NotesList/components/Header';
import { useNavigation } from '@react-navigation/native';

export const NotesList = () => {
    const navigation = useNavigation();

    const [notes, setNotes] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useFocusEffect(
        useCallback(() => {
            let isActive = true;
            const handleGetNotes = async () => {
                try {
                    setLoading(true);
                    const res = await getNotes('640823420f79b645e467fd16');
                    if (isActive) setNotes(res);
                } catch (error) {
                    setError(true);
                } finally {
                    setLoading(false);
                }
            };
            handleGetNotes();

            return () => {
                isActive = false;
            }
        }, [])
    );

    return (
        <SafeAreaView style={styles.notesContainer }>
            <Header />
            <View>
                {loading && <Text style={{ color: '#fff' }}>Cargando...</Text>}
                {error && <Text style={{ color: '#fff' }}>Error...</Text>}
                {notes && notes.length === 0 && <Text style={{ color: '#fff' }}>Crea notas</Text>}
                {notes && !loading &&
                    <FlatList
                        data={notes}
                        renderItem={({ item: note}) => <NoteCard note={note} />}
                        keyExtractor={(note) => note._id}
                    />
                }
            </View>
            <FloatingButton onPress={() => navigation.navigate('CreateNote')} icon={<Icon name='add' size={24} color={'#fff'} />} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    notesContainer: {
        height: '100%',
        backgroundColor: '#252525',
        paddingHorizontal: 10,
        paddingTop: 0
    }
});