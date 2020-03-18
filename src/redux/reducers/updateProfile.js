import { UPDATE_PROFILE_SUCCESS } from "../actionTypes";
  
const initialState = {
	data: {},
	error: {}
};

const UpdateProfile = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_PROFILE_SUCCESS:
			return { ...state, data: { ...action.data }};

		default:
			return state;
	}
};
  
export default UpdateProfile;
  