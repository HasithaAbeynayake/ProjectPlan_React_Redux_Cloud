// import { getFirebase } from 'react-redux-firebase';

// export const signIn = (credentials) => {
// 	return (dispatch, getState, { getFirebase }) => {
// 		const firebase = getFirebase();

// 		firebase
// 			.auth()
// 			.signInWithEmailAndPassword(credentials.email, credentials.password)
// 			.then(() => {
// 				dispatch({ type: 'LOGIN_SUCCESS' });
// 			})
// 			.catch((err) => {
// 				dispatch({ type: 'LOGIN_ERROR', err });
// 			});
// 	};
// };

import firebase from 'firebase/app';
import { getFirebase } from 'react-redux-firebase';

export const signIn = (credentials) => {
	return (dispatch, getState) => {
		//const firebase = getFirebase();
		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				console.log('INSIDE LOGIN_SUCCESS');
				dispatch({ type: 'LOGIN_SUCCESS' });
			})
			.catch((err) => {
				console.log('INSIDE LOGIN_ERROR');
				dispatch({ type: 'LOGIN_ERROR', err });
			});
	};
};

export const signOut = () => {
	return (dispatch, getState) => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: 'SIGNOUT_SUCCESS' });
			});
	};
};

export const signUp = (newUser) => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirebase().firestore();

		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then((resp) => {
				return firestore
					.collection('users')
					.doc(resp.user.uid)
					.set({
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						initials: newUser.firstName[0] + newUser.lastName[0],
					});
			})
			.then(() => {
				dispatch({ type: 'SIGNUP_SUCCESS' });
			})
			.catch((err) => {
				dispatch({ type: 'SIGNUP_ERROR', err });
			});
	};
};
