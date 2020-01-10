import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC5ize_t5L01W_Q3TZmmxTfye1Z9rOSp0E",
    authDomain: "web-firestore-authentication.firebaseapp.com",
    databaseURL: "https://web-firestore-authentication.firebaseio.com",
    projectId: "web-firestore-authentication",
    storageBucket: "web-firestore-authentication.appspot.com",
    messagingSenderId: "954309262588",
    appId: "1:954309262588:web:c7d23d1466067040a0ab79",
    measurementId: "G-TY9H31DPG5"
}
// Initialize Firebase, firestore and authentication
firebase.initializeApp(firebaseConfig)

export default firebase