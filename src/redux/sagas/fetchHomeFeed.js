
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_HOME_FEED, FETCH_HOME_FEED_SUCCESS } from "../actionTypes";
import { apiCall } from "../../services";
import { history } from "../../utils/history";
import {  setLoader, removeLoader, fetchHomeFeedSuccess } from "../actions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function* fetchHomeFeed(actions) {
    yield put(setLoader());
	const userBody = {
		// key: "fetch_home_feed",
	};

	const homeFeed = yield apiCall({ body: userBody, url:'posts/homepage'});
	 
	if (homeFeed) {
		yield put(removeLoader());
		if(homeFeed.data.success){
			yield put(fetchHomeFeedSuccess(homeFeed.data));
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
			toast.error(homeFeed.data.msg, options)
		} 
	} 
}

export default function* root() {
  	yield takeEvery(FETCH_HOME_FEED, fetchHomeFeed);
}