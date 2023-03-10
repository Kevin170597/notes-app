import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
//Components
import { ColorSelector } from './ColorSelector';
// Constatns
import colors from '../../../constants/colors';
// Assets
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Header = ({ saving, save, color, note, setColor, deleteButton, setModal }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('NotesList')}>
                <Icon name='chevron-left' size={24} color='#fff' />
            </TouchableOpacity>
            <Text style={styles.title}>Notas</Text>
            <ColorSelector color={color} setColor={setColor} />
            {deleteButton &&
                <TouchableOpacity style={styles.actionButton} onPress={() => setModal(true)}>
                    <Icon name='delete' size={24} color='#fff' />
                </TouchableOpacity>
            }
            <TouchableOpacity style={styles.actionButton} onPress={save}>
                {saving ?
                    <Icon name='hourglass-top' size={24} color='#fff' />
                    : <Icon name='save' size={24} color='#fff' />}
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 16,
        zIndex: 2,
    },
    backButton: {
        height: 40,
        aspectRatio: 1,
        borderRadius: 8,
        backgroundColor: colors.background2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: colors.font,
        fontSize: 20,
        marginHorizontal: 12
    },
    actionButton: {
        backgroundColor: colors.background2,
        height: 35,
        aspectRatio: 1,
        borderRadius: 8,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});