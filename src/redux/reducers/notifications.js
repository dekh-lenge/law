import { FETCH_ACTIVITY_SUCCESS } from "../actionTypes";
  
const initialState = {
	data: {},
	error: {}
};

const Notifications = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ACTIVITY_SUCCESS:
			return { ...state, data: { ...action.data }};
		default:
			return state;
	}
};
  
export default Notifications;
  