import React, {useState} from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './AuthPage.scss'
import {loginUser, registerUser} from "../../asyncActions/users";

const Authpage = () => {
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <BrowserRouter>
            <Switch>
                <React.Fragment> 
                    <div className="container">
                        <div className="auth-page">
                            <Route path="/login">
                                <h3 className="auth-title">Авторизация</h3>
                                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input className="input-auth" type="email" name="email"  placeholder="Email" onChange={changeHandler} />
                                        </div>
                                        <div className="input-field col s12">
                                            <input type="password" className="input-auth" name="password"  placeholder="Пароль" onChange={changeHandler} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="wawes-effect wawes-light btn black" onClick={() => dispatch(loginUser(form.email, form.password))}>Войти</button>
                                        <Link to="/registration" className="btn-outline btn-reg">Нет аккаунта?</Link>
                                    </div>
                                </form>
                            </Route>
                            
                            <Route path="/registration">
                                <h3 className="auth-title">Регистрация</h3>
                                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="email" name="email" className="input-auth" placeholder="Email" onChange={changeHandler} />
                                        </div>
                                        <div className="input-field col s12">
                                            <input type="password" name="password" className="input-auth" placeholder="Пароль" onChange={changeHandler} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="wawes-effect wawes-light btn black" onClick={() => dispatch(registerUser(form.email, form.password))} >Регистрация</button>
                                        <Link to="/login" className="btn-outline btn-reg">Уже есть аккаунт?</Link>
                                    </div>
                                </form>
                            </Route>
                            
                        </div>
                    </div>
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    )
}

export default Authpage
