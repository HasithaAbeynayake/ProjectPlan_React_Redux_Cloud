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
