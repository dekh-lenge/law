import { LOGIN, LOGIN_SUCCESS } from "../actionTypes";

export function loginAction(data) {
  return {
    data,
    type: LOGIN
  };
}

export function loginActionSuccess(data, modalShow) {
  return {
    data,
    modalShow,
    type: LOGIN_SUCCESS
  };
}