
import { UPLOAD_POST_SUCCESS } from "../actionTypes";
  
const initialState = {
	data: {},
	error: {}
};

const UploadPhoto = (state = initialState, action) => {
	switch (action.type) {
		case UPLOAD_POST_SUCCESS:
			return { ...state, data: { ...action.data }};
			
		default:
			return state;
	}
};
  
export default UploadPhoto;
  