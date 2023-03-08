import { User } from "./user.model"

export interface LoggedUserStore {
    loggedUser: User,
    setLoggedUser: (user: User) => void,
    getLoggedUser: () => void
}