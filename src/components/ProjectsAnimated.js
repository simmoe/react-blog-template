import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import Viewpager from './Viewpager'
import ProjectDetail from './ProjectDetail'
import { navigate } from '@reach/router'
import '@reach/router'
import './ProjectsAnimated.css'

const ProjectsAnimated = (props) => {
    const [projects, setProjects] = useState([])
    const [id, setId] = useState()

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .orderBy('year', 'desc')
            .onSnapshot(snapshot => {
                setId(snapshot.docs[0].id)
                setProjects(snapshot.docs)
            })
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

    const updateId = i => {
        console.log(i)
        if(projects){
            setId(projects[i].id)
        }
    }
 
    return (
        <main className='animated'>
        {
            projects.length > 0 
        ? 
            <>
            <Viewpager updateId={updateId} addProject={addProject} projects={projects} signedIn={props.signedIn}/>
            <ProjectDetail id={id}/>
            </>
        :
            <p>Getting projects, hold on...</p>
        }
        </main>

    )
}

export default ProjectsAnimated
