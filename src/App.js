import React, {useState, useEffect} from 'react'
import './App.css'
import firebase from './components/firebase'
import { Router, navigate } from "@reach/router"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Edit from "./components/Edit"
import ProjectDetail from './components/ProjectDetail'
import ProjectsAnimated from './components/ProjectsAnimated'

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
                }
            }
        )
    })

    return (
        <div>
            <Header signedIn={signedIn} />            
            <Router>
                <ProjectsAnimated default path='/projects' signedIn={signedIn} />
                <ProjectDetail  path={process.env.PUBLIC_URL + '/projects/:id'} />
                <Contact path={process.env.PUBLIC_URL + '/contact'} signedIn={signedIn} />
                <Login path={process.env.PUBLIC_URL + '/login'} signedIn={signedIn} />
                <Edit path={process.env.PUBLIC_URL + '/edit/:id'} />
            </Router>
        </div>
    )
} 

export default App
