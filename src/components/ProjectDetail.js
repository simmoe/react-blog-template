// PROJECT JS
import React, {useEffect, useState} from 'react'
import firebase from './firebase'
import { Link } from "@reach/router"
import './Project.css'
import parse from 'html-react-parser'

const ProjectDetail = (props) => {  
    window.scrollTo(0, 0)       

    const [project, setProject] = useState()

    useEffect( () => {
        firebase.firestore().collection('projects').doc(props.id)
            .onSnapshot( snapshot => setProject(snapshot.data()) )
    }, [props.id])

    return (
        <main className="project-detail">
            {
            project 
            ?
            <div>
            <p><Link to={process.env.PUBLIC_URL + '/projects/'}>back</Link></p>
            
            {project.defaultImage && <img src={project.thumbnailImage} alt='hei' />}
            <h1>{project.title}</h1>
            <div className='project-year'>{project.year}</div>
            <div className='project-byline'>{project.byline}</div>
            <div>{parse(project.description)}</div>
            </div>
            :
            <h2>Fetching project, hold on...</h2>
            }
        </main>
    )
} 
export default ProjectDetail
