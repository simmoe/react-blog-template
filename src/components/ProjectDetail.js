// PROJECTDETAIL JS
import React, {useEffect, useState} from 'react'
import firebase from './firebase'
import { Link } from "@reach/router"
import './ProjectDetail.css'
import parse from 'html-react-parser'

const ProjectDetail = props => {  
    const [project, setProject] = useState()
    const [prev, setPrev] = useState(0)
    const [next, setNext] = useState(0)

    window.scrollTo(0,0)

    useEffect( () => {
        firebase.firestore().collection('projects').doc(props.id)
            .onSnapshot( snapshot => setProject(snapshot.data()) )

    }, [props.id])

    useEffect(()=>{
        firebase.firestore().collection('projects')
            .orderBy('year', 'desc')
            .get()
            .then( projects => {
                const array = projects.docs.map( p => p.id )
                const myPos = array.indexOf(props.id)
                setNext( myPos + 1 === array.length ? array[0] : array[myPos + 1])
                setPrev( myPos === 0 ? array[array.length - 1] : array[myPos - 1])
            } )
    }, [props.id])

    let styles = {}
    if(project){
        styles = {
            parallax:{
                height:'100vh',
                width:'100vw',
                backgroundImage: 'url(' + project.defaultImage + ')',
                backgroundAttachment:'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            },
        }
    } 
    return (
        <main className="project-detail">
            {
            project 
            ?
            <div>
                <div style={styles.parallax}>
                    <div className='parallax-overlay'>
                        <div>
                            <h1>{project.title}</h1>
                            <p>{project.year}</p>
                            <div className='project-features'>
                                {project.javascript && <li>Javascript</li>}
                                {project.reactjs && <li>React JS</li>}
                                {project.userOriented && <li>User oriented</li>}
                                {project.design && <li>Design</li>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-content'>
                    <div className='admin-actions pager'>
                        <Link to={process.env.PUBLIC_URL + '/projects/' + prev}>prev</Link>
                        <Link to={process.env.PUBLIC_URL + '/projects/' + next}>next</Link>
                    </div>

                    <div className='project-images'>                    
                        {project.defaultImage && <img src={project.defaultImage} alt='hei' />}
                        {project.displayImage && <img src={project.displayImage} alt='hei' />}
                        {project.detailImage && <img src={project.detailImage} alt='hei' />}
                    </div>                    

                    <div>{parse(project.description)}</div>
                </div>
            </div>
            :
            <h2 style={{textAlign:'center'}}>Fetching project, hold on...</h2>
            }
        </main>
    )
} 
export default ProjectDetail
