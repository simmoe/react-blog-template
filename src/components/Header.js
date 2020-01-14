import React from 'react'
import './Header.css'
import {Link} from '@reach/router'

const Header = (props) => {
    return (
        <header>
            <Link to="/">home</Link>
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