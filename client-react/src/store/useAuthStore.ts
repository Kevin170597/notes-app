import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    authToken: '',
    getAuth: () => {
        const token = window.localStorage.getItem('token')
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