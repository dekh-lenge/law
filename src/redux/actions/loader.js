import { SET_LOADING_STATUS, REMOVE_LOADING_STATUS } from "../actionTypes";

export function setLoader(data) {
  return {
    type: SET_LOADING_STATUS,
    page:data
  };
}

export function removeLoader(data) {
  return {
    type: REMOVE_LOADING_STATUS,
  };
}
