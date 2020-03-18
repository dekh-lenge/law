import { SET_TRANSACTION_DATA } from "../actionTypes";

export function setTransactionData(data) {
	return {
		data,
		type: SET_TRANSACTION_DATA
	};
}