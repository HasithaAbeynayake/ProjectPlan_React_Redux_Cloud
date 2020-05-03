import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyC5ut27hL4utyrU6rGmmQ_8MJc67TaWwZ4',
	authDomain: 'projectplan-10db8.firebaseapp.com',
	databaseURL: 'https://projectplan-10db8.firebaseio.com',
	projectId: 'projectplan-10db8',
	storageBucket: 'projectplan-10db8.appspot.com',
	messagingSenderId: '997300214731',
	appId: '1:997300214731:web:5a47de1733d0b29a4c344e',
	measurementId: 'G-DBD5SQWZ2J',
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export const firestore = firebaseApp.firestore();

export default firebase;
