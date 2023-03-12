import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const FloatingButton = ({ onPress, loading, icon }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            {loading ? <Text>Loading</Text> : icon}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        backgroundColor: '#8965a7',
        height: 50,
        aspectRatio: 1,
        borderRadius: 50,
        bottom: 30,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});