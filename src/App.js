import React, {useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import './App.scss'
import {useDispatch, useSelector} from "react-redux";
import {loginUserAction} from "./store/usersReducer";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data && data.token) {
      dispatch(loginUserAction(data))
    }
  }, [dispatch])
  const isLogined = useSelector(state => state.users.isLogined)
  const routes = useRoutes(isLogined)

  return (
      <div className="app">
        <BrowserRouter>
          <Navbar/>
          { routes }
        </BrowserRouter>
      </div>
  )
}

export default App
