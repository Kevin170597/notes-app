import { useCallback, useState } from 'react';
import { View, StyleSheet, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// NNavigation
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
// services
import { getNotes } from '../services/notes';
// Components
import { Header } from '../features/NotesList/components/Header';
import { NoteCard } from '../features/NotesList/components/NoteCard';
import { FloatingButton } from '../components/FloatingButton';
// Assets
import Icon from 'react-native-vector-icons/MaterialIcons';
import Empty from '../assets/empty.png';
import Error from '../assets/error.png';
// Constants
import colors from '../constants/colors';
// Global stores
import { useLoggedUserStore } from '../store/useLoggedUserStore';

export const NotesList = () => {
    const { _id } = useLoggedUserStore((state) => state.loggedUser);

    const navigation = useNavigation();

    const [notes, setNotes] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleGetNotes = async () => {
        try {
            setLoading(true);
            const res = await getNotes(_id);
            setNotes(res);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            handleGetNotes();
        }, [])
    );

    return (
        <SafeAreaView style={styles.notesContainer }>
            <Header />
            <View style={{ height: Dimensions.get('window').height - 70 }}>
                {loading && <ActivityIndicator size='large' color='#fff' />}
                {notes && notes.length === 0 && 
                    <Image source={Empty} style={{ width: 180, height: 180, marginTop: 60, marginLeft: 100 }} />
                }
                {error && 
                    <Image source={Error} style={{ width: 180, height: 180, marginTop: 60, marginLeft: 100 }} />
                }
                {notes && !loading &&
                    <FlatList
                        refreshing={loading}
                        onRefresh={handleGetNotes}
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
        backgroundColor: colors.background,
        paddingHorizontal: 10,
        paddingTop: 0
    }
});