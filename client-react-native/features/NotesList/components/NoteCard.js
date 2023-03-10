
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const NoteCard = ({ note }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('ReadUpdateNote', { _id: note._id })}
            style={[{ backgroundColor: note.color }, styles.noteCard]}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.content}>{note.content}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    noteCard: {
        width: '100%',
        padding: 20,
        marginBottom: 12,
        borderRadius: 8,
        maxHeight: 130
    },
    title: {
        color: '#414141',
        fontWeight: 'bold'
    },
    content: {
        color: '#414141',
        marginHorizontal: 0,
        marginVertical: 5
    }
});

