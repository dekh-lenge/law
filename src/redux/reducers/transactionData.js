import { SET_TRANSACTION_DATA } from "../actionTypes";
  
const initialState = {
	data: {},
	error: {}
};

const TransactionData = (state = initialState, action) => {
	switch (action.type) {
		case SET_TRANSACTION_DATA:
			return { ...state, data: { ...action.data }};

		default:
			return state;
	}
};
  
export default TransactionData;
  