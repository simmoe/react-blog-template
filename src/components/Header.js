// HEADER

import React from 'react'
import './Header.css'
import {Link} from '@reach/router'

const Header = (props) => {
    return (
        <header>
            <Link to={process.env.PUBLIC_URL + '/'}>projects</Link>
            <Link to={process.env.PUBLIC_URL + '/contact'}>contact</Link>
            <Link to={process.env.PUBLIC_URL + '/login'}>{
                props.signedIn 
                ? 'profile' 
                : 'login'
                }
            </Link> 
        </header>
    )
}

export default Header