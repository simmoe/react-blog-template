import React, {useState, useEffect} from 'react'
import firebase from './firebase'

const Login = (props) => {

    const [signedIn, setSignedIn] = useState(false)

    const loginWithGoogle = () => {

        //make sure you've added google as sign in method in your firebase console
        let provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')

        firebase.auth().signInWithRedirect(provider)
            .catch(function (error) {
                console.log(error)
            })
        //set a local storage variable to indicate that login is pending
        localStorage.setItem("Logging in", true)
    }

    useEffect( ()=> {
        console.log('fb',firebase)
        firebase.auth().onAuthStateChanged(
            user => {
                if(user){
                    setSignedIn(true)
                    props.setUser(user)
                    //remove local storage variable
                    localStorage.removeItem("Logging in")
                }else{
                    console.log('not signed in')
                }
            }
        )
    })

    return (
      <main className="login">
        {!signedIn && (
            <>
                {!localStorage.getItem("Logging in") && <p onClick={loginWithGoogle}>use google to sign in</p>}
                {localStorage.getItem("Logging in") && <p>Logger på, øjeblik...</p>}
            </>
        )}
        {signedIn && (
            <div>
            <h1>You are logged in to firebase</h1>
            <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            <p onClick={() => {firebase.auth().signOut(); setSignedIn(false); props.setUser()}}>Sign-out</p>        
            {firebase.auth().currentUser.photoURL && <img src={firebase.auth().currentUser.photoURL} alt='profile' />}
            </div>
        )}
    </main>
    )
}

export default Login
