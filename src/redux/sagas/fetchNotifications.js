
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ACTIVITY, FETCH_ACTIVITY_SUCCESS } from "../actionTypes";
import { apiCall } from "../../services";
import { history } from "../../utils/history";
import {  setLoader, removeLoader, fetchNotificationsSuccess } from "../actions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function* fetchNotifications(actions) {
    yield put(setLoader());
	const userBody = {
		// key: "fetch_home_feed",
	};

	const activity = yield apiCall({ body: userBody,url:'profile/activity'});
	
	if (activity) {
		yield put(removeLoader());
		if(activity.data.success){
			yield put(fetchNotificationsSuccess(activity.data));
		}else {
			const options = {
				autoClose: 2500,
				hideProgressBar: true,
				position: toast.POSITION.BOTTOM_CENTER,
				closeButton: false,
				draggable: false,
				pauseOnFocusLoss: false,
				closeOnClick: false
			};
			toast.error(activity.data.msg, options)
		} 
	} 
}

export default function* root() {
  	yield takeEvery(FETCH_ACTIVITY, fetchNotifications);
}