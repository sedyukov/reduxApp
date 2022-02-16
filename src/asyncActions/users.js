import {loginUserAction} from "../store/usersReducer";

export const loginUser = (email, pass) => {
    return async function(dispatch) {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({email: email, password: pass}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(json => dispatch(loginUserAction(json)))
        } catch (error) {
            console.log(error)
        }
    }
}

export const registerUser = (email, pass) => {
    return async function(dispatch) {
        try {
            const response = await fetch('/api/auth/registration', {
                method: 'POST',
                body: JSON.stringify({email: email, password: pass}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(json => console.log(json))
        } catch (error) {
            console.log(error)
        }
    }
}