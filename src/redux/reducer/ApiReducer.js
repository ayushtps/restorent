import { GET } from "../type/type"

export const ApiReducer = (state=[], action) => {
    switch (action.type) {
        case GET: {
            return action.data
        }
        default: {
            return state
        }
    }
}