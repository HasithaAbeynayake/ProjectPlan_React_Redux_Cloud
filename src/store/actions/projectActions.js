import { firestore } from '../../config/fbConfig'

export const createProject = (project) => {
	return (dispatch, getState, getFirebase, getFirestore) => {
		//async call to the database

		// const firestore = getFirestore();
		firestore
			.collection('projects')
			.add({
				...project,
				authorFirstName: 'Hasitha',
				authorLastName: 'Abeynayake',
				authorId: 12345,
				createdAt: new Date(),
			})
			.then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
			})
			.catch((err) => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			});
	};
};
