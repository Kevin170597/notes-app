import { View, StyleSheet } from 'react-native';

export const Modal = ({content}) => {

    return (
        <View style={styles.modalContainer}>
            <View style={styles.modal}>
                {content}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#00000033',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: '#353535',
        paddingVertical: 20,
        paddingHorizontal: 24,
        borderRadius: 8
    }
});