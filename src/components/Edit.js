import React, {useEffect, useState} from 'react'
import firebase from './firebase'


const Edit = (props) => {

    const [project, setProject] = useState() 
    const [status, setStatus] = useState('')

    useEffect( () => {
        window.scrollTo(0, 0)       
        firebase.firestore().collection('projects').doc(props.id)
            .onSnapshot(snapshot => {
            setProject(snapshot.data())
        })
    }, [props.id])

    const updateValue =  
    //e.persist makes the element visible in the callback function
    //the spread object syntax is JSX - makes the given value of post stay, while we update this value
        e => {
        e.persist()
        setProject(prevProject => ({
            ...prevProject,
            [e.target.name]: e.target.value
        }))
    }

    const saveProject = (e) => {
        e.preventDefault() //abort reloading the page
        setStatus('updating, please hold...')
        firebase.firestore().collection('projects').doc(props.id).update(project)
        .then(()=>{setStatus("project updated")})
        .catch(err => {
            setStatus("Error saving project: " + err.message)
        })
    }

    return(
        <main className='edit'>
        <h1>Edit project</h1>
        <p>Project id: {props.id}</p>
        {
            project && 
            <>
            <form onSubmit={saveProject}>
                <input name='title' onChange={updateValue} value={project.title} />
                <input name='year' onChange={updateValue} placeholder='year' value={project.year} />
                <textarea name='description' placeholder='description' onChange={updateValue} value={project.description} />
                <button type='submit'>save</button>
            </form>
            <p>{status}</p>
            </>
        }
        </main>
    )
}


export default Edit

