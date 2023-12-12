import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, SET_CURRENT_USER } from "../Type"

const INITIAL = {
    users: null,
    user: null
}

export default (state = INITIAL, action) => {

    switch(action.type) {
        case GET_USERS: {
            return {
                ...state
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.data
            }
        }
        case GET_USERS_FAIL: {
            return {
                ...state
            }
        }
        case SET_CURRENT_USER: {
            return {
                ...state,
                user: action.data
            }
        }
        default: 
            return state
    }
}