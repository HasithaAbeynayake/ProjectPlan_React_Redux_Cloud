const initState = {
	projects: [
		{
			id: '1',
			title: 'Java 8: Lambda Basics',
			content: 'Functional programming through Java',
		},
		{
			id: '2',
			title: 'React and Redux',
			content: 'Frontend programming through React',
		},
		{
			id: '3',
			title: 'New Era of Programming',
			content: 'Fullstack approach with devops',
		},
	],
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('Created project', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('Creatd project error', action.err);
			return state;
		default:
			return state;
	}
};

export default projectReducer;
