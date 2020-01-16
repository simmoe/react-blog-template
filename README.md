<a href='https://simmoe.github.io/react-blog-template'>See project demo on github pages</a>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React blog template
This project is made for react learners, that wants to get a thorough understanding of the React project lifecycle. It demonstrates how to build a basic blog CMS with ReactJS and firebase/firestore. The final website displays a list of projects, with options to create, edit and delete them. Only the authenticated user can modify the database, everyone can see. 

* Template: create-react-app
* Backend: Google Firebase.firestore
* Routing: Reach Router
* Authentication: Google (redirect) - only one specific person can update, delete and create projects

Of course you can't edit, create or update projects in the demo. But if you like the project, go ahead and fork it. Then you  can exchange the firebase keys in the code and create your own blog from there - tutorial below.

## Step-by-step tutorial
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In short that means the first thing you should do, is to open your terminal and change directory to the folder you want the project to reside in. After that, simply type

````javascript
npx create-react-app react-blog-template
````
This command will install a new React project for you, with a set of default pages - open this folder in your favorite code editor. Now open the terminal again and type 

````javascript
npm start 
````
And you will see that your default browser opens with the app frontpage. From here on we will write the app ourselves. Open the file src/App.js and we are ready to setup a connection to firebase.

This project is going to host it's data in Google Firestore. Therefore we will set up a Firestore project right away and put in some test data. 

## Google firestore database
Firestore is a relatively new way to keep and modify data online. In this first basic tutorials we will look at the most simple use case: create a simple data structure and make a webpage that allows users to add new data. Later on we will go on to more advanced features.

Essentially firestore is a database that is hosted in the cloud. As such this doesn't separate it from most other databases - most often you need a database exactly to store data for your webpages, apps or whatever. But when you think about it, there are lots of offline or enclosed local databases. Every desktop app, from text-editors to economy systems - needs databases as well.

### Setup the new database 
Setting up a project in Firestore is pretty straight forward and well documented in <a href='https://firebase.google.com/docs/firestore/quickstart'> this tutorial</a>, but we'll go quickly through it here. Once the project is set up, we will make a small standard webpage (html and css), that establishes a connection so we can read and write data. 

### Simple web client set-up  

-  Setup a new Firestore project (call it web-firestore or similar)
-  Choose Google Analytics and bind it to a new account - its important that you choose Norway or some other location in Europe at this point - accept all terms 
-  Now head into the database tab, and create a new database
-  Choose eur3 as location
-  Since we are just experimenting for now, choose "start in test mode"

We now have a database setup and are ready to start building. Let's start off by creating a test collection - we will call it books - and add a new document, with a title, author and published fields. 

As you can see, in Firebase data are organized in collections, that store documents with fields. We create the document and give it fields right away, notice the field types - a number must be a number, a string a string and so forth. We will get much back to these elements in a short while.

Now head back to the firebase console, and choose *add new web App* to project. An app is the actual code be are about to write - some webpage that carries the relevant javascript that allows us to access and interact with the database. 

-  Set a relevant name like web-firestore-intro-app. 
-  Skip Firebase hosting at this point. 

We are now presented with a Firebase SDK script. This is the necessary variables to get us connected to the actual cloud database. We will copy this script and add it to our React project.

Go ahead and create a new folder in the React project called *components*, create a file called *firebase.js* and paste the scripts. The finsihed page should look like this:

````javascript
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "XX",
    authDomain: "XX",
    databaseURL: "XX",
    projectId: "XX",
}
// Initialize Firebase, firestore and authentication
firebase.initializeApp(firebaseConfig)

export default firebase
````
For this to work, you need to add the firebase NPM library to the project - all the nescessary scripts to make firebase run. Open the terminal again - get out of the running process by typing ctrl-space - and install firebase to the REact app like
````javascript
npm install firebase --save
````
### What does all this mean?
The new file firebase.js first imports the firebase library - which is made possible by the last terminal command, that fetched the library into our project. The firebaseConfig constant is a JSON object that containts the nescessary info, to connect to firebase in the cloud. *firebase.initializeApp(firebaseConfig)* uses this object to make the actual connection. When this is done this little page exports the firebase constant so we can use it in the remaining app - lets go ahead and import it in our App.js file, so we can see that the connection is really made and working. 



  install reach-router
  install firebase
