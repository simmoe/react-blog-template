import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import Project from './Project'


const Home = () => {
    const [projects, setProjects] = useState([])

    useEffect( () => {
        firebase.firestore().collection('projects')
            .onSnapshot(snapshot => {
                setProjects(snapshot.docs)
                console.log(snapshot.docs)
        })
    }, [])

    return (
        <main className="home">
            <div className='projects'>
            {
                projects.map(
                    doc => <Project key={doc.id} id={doc.id} project={doc.data()} />
                )
            }
        </div>
        </main>
    )
} 

export default Home
