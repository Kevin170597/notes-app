import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Header = () => {

    const getLetters = (name) => {
        let namesArray = name.split(' ');
        return namesArray[0]?.charAt(0) + (namesArray[1] != undefined ? namesArray[1]?.charAt(0) : '')
    }

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Notas</Text>
            <TouchableOpacity style={styles.profileButton}>
                <Text style={{ color: '#fff' }}>{getLetters('Kevin Mendoza')}</Text>
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
        justifyContent: 'space-between'
    },
    title: {
        color: '#fff',
        fontSize: 20
    },
    profileButton: {
        backgroundColor: '#353535',
        height: 40,
        aspectRatio: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});