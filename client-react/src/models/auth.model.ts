
export interface AuthContextInterface {
    login: (name: string, password: string) => void,
    logout: () => void,
    isAuth: boolean
}