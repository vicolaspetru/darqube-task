import { INIT_APP } from './constants';

export const reducer = (state, action) => {
	switch (action.type) {
		case INIT_APP:
			return console.log(action);
	
		default:
			return state
	}
}