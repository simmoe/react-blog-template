// HEADER

import React, {useState} from 'react'
import './Header.css'
import { Link } from '@reach/router'
import { MdMenu, MdClose } from 'react-icons/md'

const Header = (props) => {
    const [show,setShow] = useState(false)
    
    const isPartiallyActive = ({
        isPartiallyCurrent
      }) => {
        return isPartiallyCurrent
          ? { className: "active" }
          : null
      }
    return (
        <div className='header-container'>
            <div  onClick={() => setShow(!show)} className='burger'>
                {
                show 
                ? <MdClose color='white' size='32'/>
                : <MdMenu color='white' size='32'/>
                }
            </div>
        <header className={show ? 'mobile' : ''} onClick={ () => setShow(false) }>
            <Link to={'/projects'} getProps={isPartiallyActive}>projects</Link>
            <Link to={'/contact'}>contact</Link>
            <Link to={'/login'}>{
                props.signedIn 
                ? 'profile' 
                : 'login'
                }
            </Link> 
        </header>
        </div>
    )
}

export default Header