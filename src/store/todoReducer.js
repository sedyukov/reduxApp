const defaultState = {
    todos: [],
}

const GET_TODOS = "GET_TODOS"
const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"
const COMPLETE_TODO = "COMPLETE_TODO"

export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {...state, todos: action.payload}
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo._id !== action.payload)}
        case COMPLETE_TODO:
            const temp = []
            state.todos.forEach(function(todo, i, arr) {
                if (todo._id === action.payload) todo.completed = !todo.completed;
                temp.push(todo)
            });
            return {...state, todos: temp}
        default:
            return state
    }
}

export const addTodoAction = (payload) => ({type: ADD_TODO, payload})
export const removeTodoAction = (payload) => ({type: REMOVE_TODO, payload})
export const getTodosAction = (payload) => ({type: GET_TODOS, payload})
export const completeTodoAction = (payload) => ({type: COMPLETE_TODO, payload})