export interface AuthStore {
    authToken: string,
    getAuth: () => void,
    setAuth: (value: string) => void,
    logout: () => void
}