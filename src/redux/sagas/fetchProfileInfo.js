
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_PROFILE_INFO, FETCH_PROFILE_INFO_SUCCESS } from "../actionTypes";
import { apiCall } from "../../services";
import { history } from "../../utils/history";
import {  setLoader, removeLoader, fetchProfileInfoSuccess, SaveFollowersFollowing } from "../actions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function* fetchProfileInfo(actions) {
	yield put(setLoader());
	const userBody = {
		// key: "fetch_home_feed",
	};

	const profileInfo = yield apiCall({ body: userBody,url:'profile/userinfo'});
	// 
	if (profileInfo) {
		yield put(removeLoader());
		if(profileInfo.data.success){
			yield put(fetchProfileInfoSuccess(profileInfo.data));
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
			toast.error(profileInfo.data.msg, options)
		} 
	} 
}

export default function* root() {
  	yield takeEvery(FETCH_PROFILE_INFO, fetchProfileInfo);
}