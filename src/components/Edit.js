import React, {useEffect, useState} from 'react'
import firebase from './firebase'
import { Link } from '@reach/router'
import FileUploader from 'react-firebase-file-uploader'
import './Edit.css'

const Edit = (props) => {

    const [project, setProject] = useState() 
    const [status, setStatus] = useState('')
    const [imageName, setImageName] = useState('defaultImage')

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

        switch(e.target.type){
            case 'checkbox':
            setProject(prevProject => ({
                ...prevProject,
                [e.target.name]: e.target.checked
            }))
            break

            default:
            setProject(prevProject => ({
                ...prevProject,
                [e.target.name]: e.target.value
            }))

        }
    }

    const saveProject = (e) => {
        e.preventDefault() //abort reloading the page
        setStatus('updating, please hold...')
        firebase.firestore().collection('projects').doc(props.id).update(project)
        .then(()=>{setStatus('project updated')})
        .catch(err => {
            setStatus("Error saving project: " + err.message)
        })
    }

    const parseThumbname = (str) => {
        const n = str.lastIndexOf('.')
        const name = str.slice(0, n)
        const ending = str.slice(n, str.length)
        return name + '_400x400' + ending
    }

    const handleUploadStart = () => {setStatus('uploading image, please hold')}
    const handleUploadError = (error) => {setStatus(error.message)}
    const handleUploadSuccess = filename => {
        firebase
          .storage()
          .ref("images")
          .child(filename)
          .getDownloadURL()
          .then(
              url => setProject( prevProject => (
            {
                ...prevProject,
                [imageName]: url,
                [imageName + 'thumbnailImage']:parseThumbname(url)
            }
          ) ) )
          setStatus('image ready')
    }
    return(
        <main className='edit'>
        <h1>Edit project</h1>
        <p>Project id: {props.id}</p>
        {
            project && 
            <>
            <form onSubmit={saveProject}>
                <input name='title' onChange={updateValue} value={project.title} placeholder='project title' />
                <input name='year' onChange={updateValue} placeholder='year' value={project.year} />
                <input name='byline' onChange={updateValue} placeholder='byline' value={project.byline} />

                <textarea name='description' placeholder='description' onChange={updateValue} value={project.description} />

                <div className='checks'>
                    <label htmlFor='condition'>javascript</label>
                    <input type='checkbox' name='javascript' onChange={updateValue} defaultChecked={project.javascript}/>
                    <label htmlFor='reactjs'>react js</label>
                    <input type='checkbox' name='reactjs' onChange={updateValue} defaultChecked={project.reactjs}/>
                    <label htmlFor='userOriented'>user-oriented</label>
                    <input type='checkbox' name='userOriented' onChange={updateValue} defaultChecked={project.userOriented}/>
                    <label htmlFor='design'>design</label>
                    <input type='checkbox' name='design' onChange={updateValue} defaultChecked={project.design}/>
                </div>

                <div className='edit-images'>
                {
                    project.defaultImage && 
                    <div>
                        <h3>default</h3>
                        <img alt='post img' src={project.defaultImage} />
                    </div>
                }
                {
                    project.displayImage && 
                    <div>
                        <h3>display</h3>
                        <img alt='post img' src={project.displayImage} />
                    </div>
                }
                {
                    project.detailImage && 
                    <div>
                        <h3>detail</h3>
                        <img alt='post img' src={project.detailImage} />
                    </div>
                }
                </div>

                <select name='imageName' onChange={ e => {setImageName(e.target.value)} }>
                    <option defaultValue name='defaultImage' value={'defaultImage'}>default image</option>
                    <option name='displayImage' value={'displayImage'}>display image</option>
                    <option name='detailImage' value={'detailImage'}>detail image</option>
                </select>

                <label>
                <div className='add'>{project.defaultImage ? 'new image' : 'add image'}</div>
                <FileUploader
                    hidden
                    accept="image/*"
                    name="picture"
                    randomizeFilename
                    storageRef={firebase.storage().ref("images")}
                    onUploadStart={handleUploadStart}
                    onUploadError={handleUploadError}
                    onUploadSuccess={handleUploadSuccess}
                />
                </label>
                <button type='submit'>save</button>
            </form>
            <p>{status}</p>
            <Link to={'/projects/'+props.id}>view</Link>
            </>
        }
        </main>
    )
}


export default Edit

