import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

export const useAuthStore = create((set) => ({
    authToken: '',
    getAuth: async () => {
        let value = await SecureStore.getItemAsync('token');
        set(() => ({
            authToken: value
        }))
    },
    setAuth: async (token) => {
        await SecureStore.setItemAsync('token', token);
        set(() => ({
            authToken: token
        }))
    },
    logout: async () => {
        await SecureStore.deleteItemAsync('token');
        set(() => ({
            authToken: ''
        }))
    }
}));