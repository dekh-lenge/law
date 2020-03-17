
import { FETCH_HOME_FEED_SUCCESS } from "../actionTypes";
  
const initialState = {
	data: {},
	error: {}
};

const HomeFeed = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_HOME_FEED_SUCCESS:
			return { ...state, data: { ...action.data }};
		default:
			return state;
	}
};
  
export default HomeFeed;
  