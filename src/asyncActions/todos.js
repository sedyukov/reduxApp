import {addTodoAction, completeTodoAction, getTodosAction, removeTodoAction} from "../store/todoReducer";

export const fetchTodos = (id) => {
    return async function(dispatch) {
        await fetch('/api/todo?' + new URLSearchParams({
            userId: id
        }))
            .then(response => response.json())
            .then(json => dispatch(getTodosAction(json)))
    }
}

export const createNewTodo = (text, userId) => {
    return async function(dispatch) {
        if (!text) return null
        try {
            const response = await fetch('/api/todo/add', {
                method: 'POST',
                body: JSON.stringify({text, userId}), // данные могут быть 'строкой' или {объектом}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(json => dispatch(addTodoAction(json)))
        } catch (error) {
            console.log(error)
        }
    }
}

export const removeTodo = (id) => {
    return async function(dispatch) {
        try {
            await fetch('/api/todo/delete/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(dispatch(removeTodoAction(id)))
        } catch (error) {
            console.log(error)
        }
    }
}

export const completeTodo = (id) => {
    return async function(dispatch) {
        try {
            await fetch('/api/todo/complete/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(dispatch(completeTodoAction(id)))
        } catch (error) {
            console.log(error)
        }
    }
}