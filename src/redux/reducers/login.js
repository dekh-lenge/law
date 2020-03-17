import { LOGIN_SUCCESS } from "../actionTypes";
  
const initialState = {
	data: {},
	error: {}
};

const LoginData = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return { ...state, data: { ...action.data }, modalShow : action.modalShow };
		default:
			return state;
	}
};
  
export default LoginData;