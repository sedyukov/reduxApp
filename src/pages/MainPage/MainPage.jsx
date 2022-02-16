import React, {useState, useEffect} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import "./MainPage.scss"
import {useDispatch, useSelector} from "react-redux";
import {completeTodo, createNewTodo, fetchTodos, removeTodo} from "../../asyncActions/todos";

const Mainpage = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const userId = useSelector(state => state.users.id)
    const todos = useSelector(state => state.todos.todos)

    useEffect(
    () => {dispatch(fetchTodos(userId))
    }, [dispatch, userId])

    return (
        <div className="App">
            <Typography class="mg-heading" component="h1" variant="h2">
                Todos      
            </Typography> 
            <form onSubmit = {e => {
                e.preventDefault()
                setText('')
                dispatch(createNewTodo(text, userId))
                }  
            }>
                <TextField
                    variant="outlined"
                    placeholder="Add todo"
                    margin="normal"
                    onChange={event => {
                        setText(event.target.value);
                    }}
                    value = {text}
                />

            </form>
            <List>
            {
                todos.map((todo, index) => {
                    let cls = ['']
                    if (todo.completed) {
                        cls.push('completed')
                    }
                    return (
                        <ListItem key={index+1} dense button>
                            <Checkbox tabIndex={-1} onClick={() => dispatch(completeTodo(todo._id))} checked={todo.completed} />
                            <ListItemText primary={todo.text}  className={cls.join(' ')}/>
                            <ListItemSecondaryAction>
                            <IconButton
                                aria-label="Delete"
                            >
                                <DeleteIcon onClick={() => dispatch(removeTodo(todo._id))} />
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })
            }
            </List>
        </div>
    )
}

export default Mainpage
