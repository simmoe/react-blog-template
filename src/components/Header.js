import React from 'react'
import './Header.css'
import {Link} from '@reach/router'

const Header = (props) => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="login">{props.user ? 'profile' : 'login'}</Link> 
        </header>
    )
}

export default Header