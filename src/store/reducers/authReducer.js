const initState = {
	authError: null,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN_ERROR':
			console.log('Login Error');
			return {
				...state,
				authError: 'Login failed',
			};
		case 'LOGIN_SUCCESS':
			console.log('Login Successful');
			return {
				...state,
				authError: null,
			};
		case 'SIGNOUT_SUCCESS':
			console.log('Signout Successful');
			return state;
		case 'SIGNUP_SUCCESS':
			console.log('Signup Successful');
			return {
				...state,
				authError: null,
			};
		case 'SIGNUP_ERROR':
			console.log('Signup Error');
			return {
				...state,
				authError: action.err.message,
			};
		default:
			return state;
	}
};

export default authReducer;
