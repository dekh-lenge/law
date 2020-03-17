import { call, put, takeEvery } from 'redux-saga/effects';
import { SIGN_UP, SIGN_UP_SUCCESS } from "../actionTypes";
import { apiCall } from "../../services";
import { history } from "../../utils/history";
import {  setLoader, removeLoader, signUpActionSuccess } from "../actions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function* signupAction(actions) {
  yield put(setLoader());
  const userBody = actions.data;

  const signupAction = yield apiCall({ body: userBody,url:'signup/signup'});
  // 
  if (signupAction) {
    yield put(removeLoader());
    if(signupAction.data.success){
      yield put(signUpActionSuccess(signupAction.data));
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
      toast.error(signupAction.data.msg, options)
    } 
  } 
}

export default function* root() {
  yield takeEvery(SIGN_UP, signupAction);
}