import { LOGOUT, LOGOUT_SUCCESS } from "../actionTypes";

export function logoutAction(data) {
  return {
    data,
    type: LOGOUT
  };
}
export function logoutActionSuccess(data,modalShow) {
  return {
    data,
    modalShow,
    type: LOGOUT_SUCCESS
  };
}