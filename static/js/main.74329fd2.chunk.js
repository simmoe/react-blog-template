(this["webpackJsonpreact-blog-template"]=this["webpackJsonpreact-blog-template"]||[]).push([[0],{24:function(e,t,a){e.exports=a(50)},29:function(e,t,a){},30:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),c=a(17),r=a.n(c),l=(a(29),a(7)),i=(a(30),a(13)),m=a.n(i);m.a.initializeApp({apiKey:"AIzaSyC5ize_t5L01W_Q3TZmmxTfye1Z9rOSp0E",authDomain:"web-firestore-authentication.firebaseapp.com",databaseURL:"https://web-firestore-authentication.firebaseio.com",projectId:"web-firestore-authentication",storageBucket:"web-firestore-authentication.appspot.com",messagingSenderId:"954309262588",appId:"1:954309262588:web:c7d23d1466067040a0ab79",measurementId:"G-TY9H31DPG5"});var s=m.a,u=a(6),d=(a(48),function(e){return o.a.createElement("header",null,o.a.createElement(u.a,{to:"/react-blog-template/"},"projects"),o.a.createElement(u.a,{to:"/react-blog-template/contact"},"contact"),o.a.createElement(u.a,{to:"/react-blog-template/login"},e.signedIn?"profile":"login"))}),p=a(20),g=a(21),f=(a(49),function(e){return o.a.createElement("div",{className:"project"},o.a.createElement("h1",null,e.project.title),o.a.createElement("p",null,e.project.year),o.a.createElement("p",null,e.project.description),e.signedIn&&o.a.createElement("div",{className:"admin"},o.a.createElement(u.a,{to:"/react-blog-template/edit/"+e.id,className:"edit-icons"},o.a.createElement(p.a,{className:"edit-icon"})),o.a.createElement(g.a,{onClick:function(){window.confirm("sure?")&&s.firestore().collection("projects").doc(e.id).delete()},className:"edit-icon"})))}),E=a(22),h=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){s.firestore().collection("projects").onSnapshot((function(e){return r(e.docs)}))}),[]);return o.a.createElement("main",{className:"home"},e.signedIn&&o.a.createElement("div",{className:"admin-actions",onClick:function(){s.firestore().collection("projects").add({title:"new project",timestamp:s.firestore.FieldValue.serverTimestamp()}).then((function(e){console.log("Added document with ID: ",e.id)}))}},o.a.createElement(E.a,{className:"edit-icon"})),c.length>0?o.a.createElement("div",{className:"projects"},c.map((function(t){return o.a.createElement(f,{key:t.id,id:t.id,project:t.data(),signedIn:e.signedIn})}))):o.a.createElement("p",null,"Getting projects, hold on..."))},b=function(e){return o.a.createElement("main",null,o.a.createElement("div",{className:"contact-info"},o.a.createElement("h1",null,"Contact me"),o.a.createElement("p",null,"Simon Moe"),o.a.createElement("p",null,"+45 6556 9898"),o.a.createElement("a",{href:"mailto:simmoe@gmail.com"},"simmoe@gmail.com")))},j=function(e){return o.a.createElement("main",{className:"login"},!e.signedIn&&o.a.createElement(o.a.Fragment,null,!localStorage.getItem("Logging in")&&o.a.createElement("button",{onClick:function(){var e=new s.auth.GoogleAuthProvider;e.addScope("profile"),e.addScope("email"),s.auth().signInWithPopup(e).catch((function(e){console.log(e)})),localStorage.setItem("Logging in",!0)}},"use google to sign in"),localStorage.getItem("Logging in")&&o.a.createElement("p",null,"Log in progress, hold on...")),e.signedIn&&o.a.createElement("div",null,o.a.createElement("h1",null,"You are logged in to firebase"),o.a.createElement("p",null,"Welcome ",s.auth().currentUser.displayName,". You are now signed-in."),o.a.createElement("button",{onClick:function(){s.auth().signOut()}},"Sign-out"),s.auth().currentUser.photoURL&&o.a.createElement("img",{src:s.auth().currentUser.photoURL,alt:"profile"})))},v=a(12),I=a(23),w=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),u=m[0],d=m[1];Object(n.useEffect)((function(){window.scrollTo(0,0),s.firestore().collection("projects").doc(e.id).onSnapshot((function(e){r(e.data())}))}),[e.id]);var p=function(e){e.persist(),r((function(t){return Object(I.a)({},t,Object(v.a)({},e.target.name,e.target.value))}))};return o.a.createElement("main",{className:"edit"},o.a.createElement("h1",null,"Edit project"),o.a.createElement("p",null,"Project id: ",e.id),c&&o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),d("updating, please hold..."),s.firestore().collection("projects").doc(e.id).update(c).then((function(){d("project updated")})).catch((function(e){d("Error saving project: "+e.message)}))}},o.a.createElement("input",{name:"title",onChange:p,value:c.title}),o.a.createElement("input",{name:"year",onChange:p,placeholder:"year",value:c.year}),o.a.createElement("textarea",{name:"description",placeholder:"description",onChange:p,value:c.description}),o.a.createElement("button",{type:"submit"},"save")),o.a.createElement("p",null,u)))},S=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){s.auth().onAuthStateChanged((function(e){e?(c(!0),localStorage.removeItem("Logging in")):(c(!1),console.log("not signed in"))}))})),o.a.createElement("div",null,o.a.createElement(d,{signedIn:a}),o.a.createElement(u.b,null,o.a.createElement(h,{path:"/react-blog-template/",signedIn:a}),o.a.createElement(b,{path:"/react-blog-template/contact",signedIn:a}),o.a.createElement(j,{path:"/react-blog-template/login",signedIn:a}),o.a.createElement(w,{path:"/react-blog-template/edit/:id"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.74329fd2.chunk.js.map