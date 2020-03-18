import { FETCH_PROFILE_INFO_SUCCESS } from "../actionTypes";
  
const initialState = {
	data: {},
	error: {}
};

const ProfileInfo = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROFILE_INFO_SUCCESS:
			return { ...state, data: { ...action.data }};

		default:
			return state;
	}
};
  
export default ProfileInfo;
  