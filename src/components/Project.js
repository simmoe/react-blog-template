import React from 'react'
import { Link } from "@reach/router"
import firebase from './firebase'
import {MdModeEdit} from 'react-icons/md'
import './Project.css'

const Project = (props) => {
    console.log(firebase.auth().currentUser)

    return (
        <div className="project">
            <h1>{props.project.title}</h1>
            {firebase.auth().currentUser && 
            <Link to={'edit/' + props.id} className='edit-icons'>
                <MdModeEdit className='edit-icon' />
            </Link>}
        </div>
    )
} 
export default Project
