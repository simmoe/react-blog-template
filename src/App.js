import React, {useState, useEffect} from 'react'
import './App.css'
import firebase from './components/firebase'
import { Router } from "@reach/router"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login"
import Edit from "./components/Edit"

const App = () => {
    const [signedIn, setSignedIn] = useState(false)
    useEffect( ()=> {
        firebase.auth().onAuthStateChanged(
            user => {
                if(user){
                    setSignedIn(true)
                    //remove local storage variable
                    localStorage.removeItem("Logging in")
                }else{
                    setSignedIn(false)
                    console.log('not signed in')
                }
            }
        )
    })

    return (
        <div>
            <Header signedIn={signedIn} />            
            <Router>
                <Home path="/" signedIn={signedIn} />
                <Login path="login" signedIn={signedIn} />
                <Edit path="edit/:id" />
            </Router>
        </div>
    )
} 

export default App
