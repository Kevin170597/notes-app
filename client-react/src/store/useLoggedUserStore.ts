import { create } from 'zustand';

export const useLoggedUserStore = create((set) => ({
    loggedUser: '',
    setLoggedUser: (user: any) => {
        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        set(() => ({
            loggedUser: user,
        }))
    },
    getLoggedUser: () => {
        const loggedUser = window.localStorage.getItem('loggedUser')
        set(() => ({
            loggedUser: JSON.parse(loggedUser || '')
        }))
    }
}));