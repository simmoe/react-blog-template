// HOME JS

import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import Project from './Project'
import {IoIosAddCircle} from 'react-icons/io'
import Masonry from 'react-masonry-css' 

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
            title: 'new project',
            year:2020,
            description: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(ref => {
            console.log('Added document with ID: ', ref.id)
        }).catch( error => console.log(error))
    } 

    return (
        <main className='home'>
        {
            props.signedIn &&
            <div className='admin-actions' onClick={addProject}>
                <IoIosAddCircle className='edit-icon' />
            </div>
        }

        {
        projects.length > 0 
        ? 
        <Masonry
            breakpointCols={{
                default: 3,
                1400: 2,
                1000: 1
              }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                {
                    projects.map(
                        doc => 
                        <Project key={doc.id} id={doc.id} project={doc.data()} signedIn={props.signedIn}/>
                    )
                }
        </Masonry>
        :
            <p>Getting projects, hold on...</p>
        }
        </main>
    )
}

export default Projects
