import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCESS } from "../actionTypes";
import { apiCall } from "../../services";
import { history } from "../../utils/history";
import {  setLoader, removeLoader, loginActionSuccess } from "../actions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery"

function* loginAction(actions) {
	yield put(setLoader());
	const userBody = {
		'email' : actions.data,
		'password' : actions
	};

	const loginAction = yield apiCall({ body: userBody,url:'login/login'});
	
	if (loginAction) {
		yield put(removeLoader());
		if(loginAction.data.success){
			yield put(loginActionSuccess(loginAction.data));
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
			toast.error(loginAction.data.msg, options)
		} 
	} 
}

export default function* root() {
  	yield takeEvery(LOGIN, loginAction);
}