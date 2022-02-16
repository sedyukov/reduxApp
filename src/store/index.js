import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {todosReducer} from "./todoReducer";
import {usersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))