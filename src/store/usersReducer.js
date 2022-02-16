const defaultState = {
    id: "",
    token: "",
    isLogined: false,
}

const USER_LOGIN = "USER_LOGIN"
const USER_LOGOUT = "USER_LOGOUT"

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            let flag = false
            if (state.isLogined) flag = true
            else {
                if (action.payload.token) {
                    localStorage.setItem('userData', JSON.stringify({
                        userId: action.payload.userId,
                        token: action.payload.token
                    }))
                    flag = true
                }
            }
            return {...state, token: action.payload.token, id: action.payload.userId,  isLogined: flag}
        case USER_LOGOUT:
            localStorage.removeItem('userData')
            return {...state, token: null, id: null,  isLogined: false}
        default:
            return state
    }
}

export const loginUserAction = (payload) => ({type: USER_LOGIN, payload})
export const logoutUserAction = (payload) => ({type: USER_LOGOUT, payload})
