import { create } from 'zustand';
import { AuthStore } from '../models';

export const useAuthStore = create<AuthStore>((set) => ({
    authToken: '',
    getAuth: () => {
        const token = <string>window.localStorage.getItem('token')
        set(() => ({
            authToken: token,
        }))
    },
    setAuth: (value: string) => {
        window.localStorage.setItem('token', value)
        set(() => ({
            authToken: value,
        }))
    },
    logout: () => {
        window.localStorage.removeItem('token')
        set(() => ({
            authToken: '',
        }))
    }
}));