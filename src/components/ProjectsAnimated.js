// HOME JS

import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import Viewpager from './Viewpager'
import {IoIosAddCircle} from 'react-icons/io'
import { navigate } from '@reach/router'

const ProjectsAnimated = (props) => {
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
        <main className='animated'>
        {
            props.signedIn &&
            <div className='admin-actions' onClick={addProject}>
                <IoIosAddCircle className='edit-icon' />
            </div>
        }

        {
            projects.length > 0 
        ? 
            <Viewpager projects={projects} signedIn={props.signedIn}/>
        :
            <p>Getting projects, hold on...</p>
        }
        </main>

    )
}

export default ProjectsAnimated
