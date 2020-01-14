import React from 'react'
import firebase from './firebase'

const Login = (props) => {

    const loginWithGoogle = () => {

        //make sure you've added google as sign in method in your firebase console
        let provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')

        firebase.auth().signInWithPopup(provider)
            .catch(function (error) {
                console.log(error)
            })
        //set a local storage variable to indicate that login is pending
        localStorage.setItem("Logging in", true)
    }

    return (
      <main className="login">
        {!props.signedIn && (
            <>
                {!localStorage.getItem("Logging in") && <button onClick={loginWithGoogle}>use google to sign in</button>}
                {localStorage.getItem("Logging in") && <p>Log in progress, hold on...</p>}
            </>
        )}
        {props.signedIn && (
            <div>
            <h1>You are logged in to firebase</h1>
            <p>Welcome {firebase.auth().currentUser.displayName}. You are now signed-in.</p>
            <button onClick={() => {firebase.auth().signOut(); }}>Sign-out</button>        
            {firebase.auth().currentUser.photoURL && <img src={firebase.auth().currentUser.photoURL} alt='profile' />}
            </div>
        )}
    </main>
    )
}

export default Login
