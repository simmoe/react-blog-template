// HEADER

import React from 'react'
import './Header.css'
import {Link} from '@reach/router'

const Header = (props) => {
    return (
        <header>
            <Link to="/">projects</Link>
            <Link to="/contact">contact</Link>
            <Link to="login">{
                props.signedIn 
                ? 'profile' 
                : 'login'
                }
            </Link> 
        </header>
    )
}

export default Header