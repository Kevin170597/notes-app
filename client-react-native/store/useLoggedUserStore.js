import { create } from 'zustand';
import { useAuthStore } from './useAuthStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const useLoggedUserStore = create((set) => ({
    loggedUser: {
        _id: '',
        name: '',
        email: ''
    },
    setLoggedUser: async (user) => {
        await AsyncStorage.setItem('loggedUser', JSON.stringify(user));
        set(() => ({
            loggedUser: user,
        }))
    },
    getLoggedUser: async () => {
        const loggedUser = await AsyncStorage.getItem('loggedUser');
        set(() => ({
            loggedUser: JSON.parse(loggedUser)
        }))
    }
}));