import { LOGIN, REGISTRATION } from "../type/type"

export const LoginRegisterReducer = (state='', action) => {
    switch (action.type) {
        case LOGIN: {
            return action.data
        }
        case REGISTRATION: {
            return action.data
        }
        default: {
            return state
        }
    }
}