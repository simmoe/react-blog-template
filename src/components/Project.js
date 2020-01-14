import React from 'react'
import firebase from './firebase'
import { Link } from "@reach/router"
import {FaCode} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import './Project.css'

const Project = (props) => {
    const deleteProject = () => {
        if(window.confirm('sure?')){
            firebase.firestore().collection('projects').doc(props.id).delete()
        }
    }
    return (
        <div className="project">
            <h1>{props.project.title}</h1>
            <p>{props.project.year}</p>
            <p>{props.project.description}</p>
            {props.signedIn && 
            <div className='admin'>
                <Link to={'edit/' + props.id} className='edit-icons'>
                    <FaCode className='edit-icon' />
                </Link>
                <MdDelete onClick={deleteProject} className='edit-icon' />
            </div>
            }
        </div>
    )
} 
export default Project
