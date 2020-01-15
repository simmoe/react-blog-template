import React from 'react'
import firebase from './firebase'

const Contact = (props) => {
    return(
        <main>
            <div className='contact-info'>
                <h1>Contact me</h1>
                {
                    props.signedIn &&
                    <>
                    <p>Simon Moe</p>
                    <p>+45 6556 9898</p>
                    <a 
                    href='mailto:simmoe@gmail.com'>
                    simmoe@gmail.com
                    </a>
                    </>
                }
            </div>
        </main>
    )
}

export default Contact