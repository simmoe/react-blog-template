// HOME JS

import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import Project from './Project'
import {IoIosAddCircle} from 'react-icons/io'
import './Projects.css' 
import { navigate } from '@reach/router'

const Projects = (props) => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .orderBy('year', 'desc')
            .onSnapshot(snapshot => 
                setProjects(snapshot.docs)
            )
    }, [])

    const addProject = () => {
        firebase.firestore().collection('projects').add({
            title: '',
            year:2020,
            description: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(ref => {
            navigate('/edit/' + ref.id)
        }).catch( error => console.log(error))
    } 

    return (
        <main className='projects'>
        {
            props.signedIn &&
            <div className='admin-actions' onClick={addProject}>
                <IoIosAddCircle className='edit-icon' />
            </div>
        }

        {
            projects.length > 0 
        ? 
        <div className='projects-container'>
            {
                projects.map(
                    (doc, index) => 
                    <Project 
                        next={projects[index < (projects.length -1) ? index + 1 : 0].id} 
                        prev={projects[index !==0 ? index -1 : projects.length -1].id} 
                        key={doc.id} id={doc.id} project={doc.data()} signedIn={props.signedIn}/>
                )
            }
        </div>
        :
            <p>Getting projects, hold on...</p>
        }
        </main>

    )
}

export default Projects
