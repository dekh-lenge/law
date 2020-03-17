import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGOUT, LOGOUT_SUCCESS } from "../actionTypes";
import { apiCall } from "../../services";
import { history } from "../../utils/history";
import { setLoader, removeLoader, logoutActionSuccess } from "../actions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function* logoutAction(actions) {
  yield put(setLoader());
  const userBody = {
    // key: "fetch_home_feed",
  };

  const logoutAction = yield apiCall({ body: userBody,url:'logout/logout'});
  // 
  if (logoutAction) {
    yield put(removeLoader());
    if(logoutAction.data.success){
      yield put(logoutActionSuccess(logoutAction.data));
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
      toast.error(logoutAction.data.msg, options)
    } 
  } 
}

export default function* root() {
  yield takeEvery(LOGOUT, logoutAction);
}