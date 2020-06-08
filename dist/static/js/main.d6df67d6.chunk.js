(this.webpackJsonpprojectplan=this.webpackJsonpprojectplan||[]).push([[0],{213:function(e,t,a){e.exports=a(408)},218:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(0),c=a.n(r),i=a(88),l=a.n(i),o=(a(218),a(23)),s=a(24),u=a(26),m=a(25),d=a(6),p=a(31),h=a(5),E=a(18),f=a.n(E),b=a(13),g=Object(h.b)(null,(function(e){return{signOut:function(){return e((function(e,t){f.a.auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(d.c,{to:"/create"},"New Project")),c.a.createElement("li",null,c.a.createElement("a",{onClick:e.signOut},"Log Out")),c.a.createElement("li",null,c.a.createElement(d.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))})),j=function(){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(d.c,{to:"/signup"},"Sign Up")),c.a.createElement("li",null,c.a.createElement(d.c,{to:"/signin"},"Log In")))},N=Object(h.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?c.a.createElement(g,{profile:a}):c.a.createElement(j,null);return c.a.createElement("nav",{className:"nav-wrapper grey darken-3"},c.a.createElement("div",{className:"container"},c.a.createElement(d.b,{to:"/",className:"brand-logo"},"Project Plan"),n))})),v=a(49),O=a.n(v),S=function(e){var t=e.notifications;return c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},"Notifications"),c.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("span",{className:"pink-text"},e.user," "),c.a.createElement("span",null,e.content),c.a.createElement("div",{className:"grey-text note-date"},O()(e.time.toDate()).fromNow()))}))))))},C=function(e){var t=e.project;return c.a.createElement("div",{className:"card z-depth-0 project-summary"},c.a.createElement("div",{className:"card-content grey-text text-darken-3"},c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("p",{className:"grey-text"},O()(t.createdAt.toDate()).calendar())))},y=function(e){var t=e.projects;return c.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return c.a.createElement(d.b,{to:"/project/"+e.id,key:e.id},c.a.createElement(C,{project:e}))})))},w=a(15),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?c.a.createElement("div",{className:"dashboard container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement(y,{projects:t})),c.a.createElement("div",{className:"col s12 m5 offset-m1"},c.a.createElement(S,{notifications:n})))):c.a.createElement(p.a,{to:"/signin"})}}]),a}(r.Component),I=Object(w.d)(Object(h.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(b.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(R),F=Object(w.d)(Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(b.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?c.a.createElement("div",{className:"container section project-details"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},"Project Title: ",t.title),c.a.createElement("p",null,t.content)),c.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},c.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("div",null,O()(t.createdAt.toDate()).calendar())))):c.a.createElement("div",{className:"container center"},c.a.createElement("p",null,"Loading project...")):c.a.createElement(p.a,{to:"/signin"})})),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?c.a.createElement(p.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Passwaord"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login")),c.a.createElement("div",{className:"red-text center"},t?c.a.createElement("p",null,t):null)))}}]),a}(r.Component),x=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t){f.a.auth().signInWithEmailAndPassword(a.email,a.password).then((function(){console.log("INSIDE LOGIN_SUCCESS"),e({type:"LOGIN_SUCCESS"})})).catch((function(t){console.log("INSIDE LOGIN_ERROR"),e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(P),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?c.a.createElement(p.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"firstName"},"First Name"),c.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"lastName"},"Last Name"),c.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign up")),c.a.createElement("div",{className:"red-text center"},a?c.a.createElement("p",null,a):null)))}}]),a}(r.Component),L=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){n.getFirestore;var r=Object(b.getFirebase)().firestore();f.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return r.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(k),U=a(16),_=(a(371),a(374),f.a.initializeApp({apiKey:"AIzaSyC5ut27hL4utyrU6rGmmQ_8MJc67TaWwZ4",authDomain:"projectplan-10db8.firebaseapp.com",databaseURL:"https://projectplan-10db8.firebaseio.com",projectId:"projectplan-10db8",storageBucket:"projectplan-10db8.appspot.com",messagingSenderId:"997300214731",appId:"1:997300214731:web:5a47de1733d0b29a4c344e",measurementId:"G-DBD5SQWZ2J"}));f.a.firestore().settings({timestampsInSnapshots:!0});var A=_.firestore(),G=f.a,T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,[t.target.value]))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(s.a)(a,[{key:"render",value:function(){return this.props.auth.uid?c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"content"},"Project Content"),c.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):c.a.createElement(p.a,{to:"/signin"})}}]),a}(r.Component),D=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n,r){var c=a().firebase.profile,i=a().firebase.auth.uid;A.collection("projects").add(Object(U.a)(Object(U.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(T),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(N,null),c.a.createElement(p.d,null,c.a.createElement(p.b,{exact:!0,path:"/",component:I}),c.a.createElement(p.b,{path:"/project/:id",component:F}),c.a.createElement(p.b,{path:"/signin",component:x}),c.a.createElement(p.b,{path:"/signup",component:L}),c.a.createElement(p.b,{path:"/create",component:D}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z,B={authError:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("Login Error"),Object(U.a)(Object(U.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("Login Successful"),Object(U.a)(Object(U.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("Signout Successful"),e;case"SIGNUP_SUCCESS":return console.log("Signup Successful"),Object(U.a)(Object(U.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("Signup Error"),Object(U.a)(Object(U.a)({},e),{},{authError:t.err.message});default:return e}},Q={projects:[{id:"1",title:"Java 8: Lambda Basics",content:"Functional programming through Java"},{id:"2",title:"React and Redux",content:"Frontend programming through React"},{id:"3",title:"New Era of Programming",content:"Fullstack approach with devops"}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("Created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("Creatd project error",t.err),e;default:return e}},H=a(50),K=Object(w.c)({auth:W,project:Z,firestore:H.firestoreReducer,firebase:b.firebaseReducer}),M=a(212),$=Object(w.e)(K,Object(w.d)(Object(w.a)(M.a.withExtraArgument({getFirestore:H.getFirestore,getFirebase:b.getFirebase})),Object(H.reduxFirestore)(f.a,G))),q=(z={firebase:f.a,config:G},Object(n.a)(z,"config",{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1}),Object(n.a)(z,"dispatch",$.dispatch),Object(n.a)(z,"createFirestoreInstance",H.createFirestoreInstance),Object(n.a)(z,"presence","presence"),Object(n.a)(z,"sessions","sessions"),z);function V(e){var t=e.children,a=Object(h.c)((function(e){return e.firebase.auth}));return Object(b.isLoaded)(a)?t:c.a.createElement("div",null,"Loading Screen...")}l.a.render(c.a.createElement(h.a,{store:$},c.a.createElement(b.ReactReduxFirebaseProvider,q,c.a.createElement(V,null,c.a.createElement(J,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[213,1,2]]]);
//# sourceMappingURL=main.d6df67d6.chunk.js.map