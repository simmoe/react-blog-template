// PROJECT JS
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
            {
            props.project.defaultImage && 
                <img src={
                    props.project.thumbnailImage 
                    ? props.project.thumbnailImage
                    : props.project.defaultImage
                } alt='hei' />
                
            }
            <h1>{props.project.title}</h1>
            <div className='project-year'>{props.project.year}</div>
            <div className='project-byline'>{props.project.byline}</div>
            <Link to={process.env.PUBLIC_URL + '/projects/' + props.id + '?signedIn=' + props.signedIn}>
                Read more
            </Link>
            {props.signedIn && 
            <div className='admin'>
                <Link to={process.env.PUBLIC_URL + '/edit/' + props.id} className='edit-icons'>
                    <FaCode className='edit-icon' />
                </Link>
                <MdDelete onClick={deleteProject} className='edit-icon' />
            </div>
            }
        </div>
    )
} 
export default Project
