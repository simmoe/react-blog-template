// PROJECT JS
import React from 'react'
import firebase from './firebase'
import { Link, navigate } from "@reach/router"
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
            {
            props.project.defaultImage && 
                <img src={props.project.defaultImage} alt='hei' />
            }
            <div className='project-inner' onClick={ () => navigate('./projects/' + props.id)}>
                <div>
                    <h1>{props.project.title}</h1>
                    <div className='project-year'>{props.project.year}</div>
                    <div className='project-byline'>{props.project.byline}</div>
                </div>
            </div>

            {props.signedIn && 
            <div className='admin'>
                <Link to={'/edit/' + props.id}><FaCode /></Link>
                <MdDelete onClick={deleteProject} />
            </div>
            }
        </div>
    )
} 
export default Project
