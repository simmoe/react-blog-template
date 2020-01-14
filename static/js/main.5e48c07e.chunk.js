(this["webpackJsonpreact-blog-template"]=this["webpackJsonpreact-blog-template"]||[]).push([[0],{24:function(e,t,n){e.exports=n(50)},29:function(e,t,n){},30:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),c=n(17),i=n.n(c),r=(n(29),n(7)),l=(n(30),n(13)),s=n.n(l);s.a.initializeApp({apiKey:"AIzaSyC5ize_t5L01W_Q3TZmmxTfye1Z9rOSp0E",authDomain:"web-firestore-authentication.firebaseapp.com",databaseURL:"https://web-firestore-authentication.firebaseio.com",projectId:"web-firestore-authentication",storageBucket:"web-firestore-authentication.appspot.com",messagingSenderId:"954309262588",appId:"1:954309262588:web:c7d23d1466067040a0ab79",measurementId:"G-TY9H31DPG5"});var u=s.a,m=n(6),d=(n(48),function(e){return o.a.createElement("header",null,o.a.createElement(m.a,{to:"home"},"home"),o.a.createElement(m.a,{to:"login"},e.signedIn?"profile":"login"))}),p=n(20),g=n(21),f=(n(49),function(e){return o.a.createElement("div",{className:"project"},o.a.createElement("h1",null,e.project.title),o.a.createElement("p",null,e.project.year),o.a.createElement("p",null,e.project.description),e.signedIn&&o.a.createElement("div",{className:"admin"},o.a.createElement(m.a,{to:"edit/"+e.id,className:"edit-icons"},o.a.createElement(p.a,{className:"edit-icon"})),o.a.createElement(g.a,{onClick:function(){window.confirm("sure?")&&u.firestore().collection("projects").doc(e.id).delete()},className:"edit-icon"})))}),h=n(22),E=function(e){var t=Object(a.useState)([]),n=Object(r.a)(t,2),c=n[0],i=n[1];Object(a.useEffect)((function(){u.firestore().collection("projects").onSnapshot((function(e){return i(e.docs)}))}),[]);return o.a.createElement("main",{className:"home"},o.a.createElement("div",{className:"add",onClick:function(){u.firestore().collection("projects").add({title:"new project",timestamp:u.firestore.FieldValue.serverTimestamp()}).then((function(e){console.log("Added document with ID: ",e.id)}))}},o.a.createElement(h.a,{className:"edit-icon"})),c.length>0?o.a.createElement("div",{className:"projects"},c.map((function(t){return o.a.createElement(f,{key:t.id,id:t.id,project:t.data(),signedIn:e.signedIn})}))):o.a.createElement("p",null,"Getting projects, hold on..."))},b=function(e){return o.a.createElement("main",{className:"login"},!e.signedIn&&o.a.createElement(o.a.Fragment,null,!localStorage.getItem("Logging in")&&o.a.createElement("button",{onClick:function(){var e=new u.auth.GoogleAuthProvider;e.addScope("profile"),e.addScope("email"),u.auth().signInWithPopup(e).catch((function(e){console.log(e)})),localStorage.setItem("Logging in",!0)}},"use google to sign in"),localStorage.getItem("Logging in")&&o.a.createElement("p",null,"Log in progress, hold on...")),e.signedIn&&o.a.createElement("div",null,o.a.createElement("h1",null,"You are logged in to firebase"),o.a.createElement("p",null,"Welcome ",u.auth().currentUser.displayName,". You are now signed-in."),o.a.createElement("button",{onClick:function(){u.auth().signOut()}},"Sign-out"),u.auth().currentUser.photoURL&&o.a.createElement("img",{src:u.auth().currentUser.photoURL,alt:"profile"})))},j=n(12),v=n(23),w=function(e){var t=Object(a.useState)(),n=Object(r.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)(""),s=Object(r.a)(l,2),m=s[0],d=s[1];Object(a.useEffect)((function(){window.scrollTo(0,0),u.firestore().collection("projects").doc(e.id).onSnapshot((function(e){i(e.data())}))}),[e.id]);var p=function(e){e.persist(),i((function(t){return Object(v.a)({},t,Object(j.a)({},e.target.name,e.target.value))}))};return o.a.createElement("main",{className:"edit"},o.a.createElement("h1",null,"Edit project"),o.a.createElement("p",null,"Project id: ",e.id),c&&o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),d("updating, please hold..."),u.firestore().collection("projects").doc(e.id).update(c).then((function(){d("project updated")})).catch((function(e){d("Error saving project: "+e.message)}))}},o.a.createElement("input",{name:"title",onChange:p,value:c.title}),o.a.createElement("input",{name:"year",onChange:p,placeholder:"year",value:c.year}),o.a.createElement("textarea",{name:"description",placeholder:"description",onChange:p,value:c.description}),o.a.createElement("button",{type:"submit"},"save")),o.a.createElement("p",null,m)))},I=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){Object(m.c)("home"),u.auth().onAuthStateChanged((function(e){e?(c(!0),localStorage.removeItem("Logging in")):(c(!1),console.log("not signed in"))}))})),o.a.createElement("div",null,o.a.createElement(d,{signedIn:n}),o.a.createElement(m.b,null,o.a.createElement(E,{path:"home",signedIn:n}),o.a.createElement(b,{path:"login",signedIn:n}),o.a.createElement(w,{path:"edit/:id"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.5e48c07e.chunk.js.map