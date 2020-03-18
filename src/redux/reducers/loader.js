import { SET_LOADING_STATUS, REMOVE_LOADING_STATUS } from "../actionTypes";

const initialState = {
	isLoading: false,
	page:''  
};

const LoaderReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING_STATUS:
			return { ...state, isLoading: true, page: action.page };
		
		case REMOVE_LOADING_STATUS:
			return { ...state, isLoading: false, page: '' };

		default:
		return state;
	}
};

export default LoaderReducer;
  