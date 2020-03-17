import { SIGN_UP,SIGN_UP_SUCCESS } from "../actionTypes";

export function signUpAction(data) {
  return {
    data,
    type: SIGN_UP
  };
}
export function signUpActionSuccess(data) {
  return {
    data,
    type: SIGN_UP_SUCCESS
  };
}