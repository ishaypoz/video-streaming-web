import _ from 'lodash';
import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.paylod };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.paylod };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.paylod };
		case DELETE_STREAM:
			return _.omit(state, action.paylod); //create a new object with all properties in state and return it without the action.payload
		default:
			return state;
	}
};
