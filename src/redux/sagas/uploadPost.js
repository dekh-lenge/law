import { call, put, takeEvery } from 'redux-saga/effects';
import { UPLOAD_POST, UPLOAD_POST_SUCCESS } from "../actionTypes";
import { apiCall } from "../../services";
import { history } from "../../utils/history";
import {  setLoader, removeLoader, uploadPostSuccess } from "../actions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery'
function* uploadPost(actions) {
  yield put(setLoader());
  const userBody = actions.data

  const uploadPost = yield apiCall({ body: userBody,url:'posts/uploadPost'});
  // 
  if (uploadPost) {
    yield put(removeLoader());
    if(uploadPost.data.success){
      yield put(uploadPostSuccess(uploadPost.data));
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
      toast.error(uploadPost.data.msg, options)
    } 
  } 
}

export default function* root() {
  yield takeEvery(UPLOAD_POST, uploadPost);
}