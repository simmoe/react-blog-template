import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './Viewpager.css'
import { Link, navigate } from '@reach/router'
import { MdDelete } from 'react-icons/md'
import { FaCode } from 'react-icons/fa'
import {IoIosAddCircle} from 'react-icons/io'
import firebase from './firebase'

const Viewpager = props => {
    const deleteProject = (id) => {
        if(window.confirm('sure?')){
            firebase.firestore().collection('projects').doc(id).delete()
        }
    }

  const pages = props.projects
  const index = useRef(0)
  const [array, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      props.updateId(index.current)
      return { x, sc, display: 'block' }
    })
  })
  return (
    <div id='pager-main'>
        <div id='pager-container'>
            <div id='pager-root'>
                {
                array.map(({ x, display, sc }, i) => (
                    <animated.div 
                        {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
                        <animated.div 
                            style={
                                { 
                                    transform: sc.interpolate(s => `scale(${s})`), 
                                    backgroundImage: `url(${pages[i].data().defaultImage})`,
                                    backgroundPosition:'center center'
                                }} >
                                <div className='slider-content'>
                                    <div>
                                        <h1>{pages[i].data().title}</h1>
                                        <p onClick={ 
                                            () => navigate('/projects/' + pages[i].id)}>
                                            view project
                                        </p>
                                    </div>
                                    {
                                    props.signedIn &&                                        
                                    <div className='admin'>                                        
                                        <IoIosAddCircle onClick={props.addProject} />
                                        <Link to={'/edit/' + pages[i].id}>
                                            <FaCode/>
                                        </Link>
                                        <MdDelete onClick={()=>deleteProject(pages[i].id)} />
                                    </div>
                                    }
                                </div>
                        </animated.div>
                    </animated.div>                    
                ))
                }
            </div>
        </div>
    </div>
  )
  
}

export default Viewpager

