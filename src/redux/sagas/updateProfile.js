import { call, put, takeEvery } from 'redux-saga/effects';
import { UPDATE_PROFILE, UPDATE_PROFILE_SUCCESS } from "../actionTypes";
import { apiCall } from "../../services";
import { history } from "../../utils/history";
import {  setLoader, removeLoader, handleUpdateProfileSuccess } from "../actions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function* updateProfile(actions) {
  yield put(setLoader());
  const userBody = actions.data;

  const updateProfile = yield apiCall({ body: userBody,url:'profile/updateProfile'});
  // 
  if (updateProfile) {
    yield put(removeLoader());
    if(updateProfile.data.success){
      yield put(handleUpdateProfileSuccess(updateProfile.data));
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
      toast.error(updateProfile.data.msg, options)
    } 
  } 
}

export default function* root() {
  yield takeEvery(UPDATE_PROFILE, updateProfile);
}