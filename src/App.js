import React, {useState} from 'react'
import './App.css'
import { Router } from "@reach/router"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login"
import Edit from "./components/Edit"

const App = () => {
    const[user,setUser]=useState()
    return (
        <div>
            <Header user={user}/>            
            <Router>
                <Home path="/" />
                <Login path="login" setUser={setUser}/>
                <Edit path="edit/:id" />
            </Router>
        </div>
    )
} 

export default App
