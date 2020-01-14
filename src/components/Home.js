import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import Project from './Project'
import {IoIosAddCircle} from 'react-icons/io'

const Home = (props) => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .onSnapshot(snapshot => 
                setProjects(snapshot.docs)
            )
    }, [])

    const addProject = () => {
        firebase.firestore().collection('projects').add({
            title: 'new project',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(ref => {
            console.log('Added document with ID: ', ref.id)
        })
    } 

    return (
        <main className='home'>
        <div className='add' onClick={addProject}>
            <IoIosAddCircle className='edit-icon' />
        </div>

        {
        projects.length > 0 
        ? 
            <div className='projects'>
                {
                    projects.map(
                        doc => 
                        <Project key={doc.id} id={doc.id} project={doc.data()} signedIn={props.signedIn}/>
                    )
                }
            </div>
        :
            <p>Getting projects, hold on...</p>
        }
        </main>
    )
}

export default Home
