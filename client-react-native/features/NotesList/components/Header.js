import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuthStore } from '../../../store/useAuthStore';

export const Header = () => {
    const logout = useAuthStore((state) => state.logout);

    const [userModal, setUserModal] = useState(false);

    const getLetters = (name) => {
        let namesArray = name.split(' ');
        return namesArray[0]?.charAt(0) + (namesArray[1] != undefined ? namesArray[1]?.charAt(0) : '')
    }

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Notas</Text>
            <TouchableOpacity style={styles.profileButton} onPress={() => setUserModal(!userModal)}>
                <Text style={{ color: '#fff' }}>{getLetters('Kevin Mendoza')}</Text>
            </TouchableOpacity>
            {userModal &&
                <View style={styles.userModal}>
                    <Text style={styles.name}>Kevin</Text>
                    <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                        <Text style={{ color: '#fff' }}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        zIndex: 1
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
    },
    userModal: {
        backgroundColor: '#353535',
        position: 'absolute',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        right: 16,
        top: 66,
    },
    name: {
        color: '#fff',
        marginTop: 8,
        marginBottom: 16
    },
    logoutButton: {
        marginBottom: 8,
        width: '100%',
        borderWidth: 1,
        borderColor: '#252525',
        padding: 10,
        borderRadius: 8
    }
});