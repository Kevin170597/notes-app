import { create } from 'zustand';
import { LoggedUserStore } from '../models';
import { User } from '../models';
import { useAuthStore } from './useAuthStore';

export const useLoggedUserStore = create<LoggedUserStore>((set) => ({
    loggedUser: {
        _id: '',
        name: '',
        email: ''
    },
    setLoggedUser: (user: User) => {
        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        set(() => ({
            loggedUser: user,
        }))
    },
    getLoggedUser: () => {
        const loggedUser = <any>window.localStorage.getItem('loggedUser');
        if (loggedUser) {
            set(() => ({
                loggedUser: JSON.parse(loggedUser || '')
            }))
        } else {
            window.localStorage.removeItem('token');
            useAuthStore.setState({ authToken: '' })
        }
    }
}));