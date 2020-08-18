import { SIGN_IN, SIGN_OUT } from '../actions/types'; //easier to not make typo
const INITAL_STATE = { isSignedIn: null, userId: null }; //capitalize sintax dont change this object
export default (state = { INITAL_STATE }, action) => {
	switch (action.type) {
		case SIGN_IN:
			return { ...state, isSignedIn: true, userId: action.payload };
		case SIGN_OUT:
			return { ...state, isSignedIn: false, userId: null };
		default:
			return state;
	}
};
