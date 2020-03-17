
import { FETCH_ACTIVITY, FETCH_ACTIVITY_SUCCESS } from "../actionTypes";

export function fetchNotifications(data) {
	return {
		data,
		type: FETCH_ACTIVITY
	};
}

export function fetchNotificationsSuccess(data,modalShow) {
	return {
		data,
		modalShow,
		type: FETCH_ACTIVITY_SUCCESS
	};
}