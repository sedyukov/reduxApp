import React from 'react'
import './Navbar.scss'
import {useDispatch, useSelector} from "react-redux";
import {logoutUserAction} from "../../store/usersReducer";

const Navbar = () => {
    const dispatch = useDispatch()
    const isLogined = useSelector(state => state.users.isLogined)
    return (
        <nav>
            <div className="nav-wrapper navbar black">
            <a href="/" className="brand-logo">Todos</a>
            {
                isLogined
                ?   <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/" onClick={() => dispatch(logoutUserAction())}>Выйти</a></li>
                    </ul>
                :   <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Войти</a></li>
                    </ul>
            }
            </div>
        </nav>
    );
}

export default Navbar;
