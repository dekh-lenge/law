import { FETCH_PROFILE_INFO,FETCH_PROFILE_INFO_SUCCESS } from "../actionTypes";

export function fetchProfileInfo(data) {
  return {
    data,
    type: FETCH_PROFILE_INFO
  };
}
export function fetchProfileInfoSuccess(data) {
  return {
    data,
    type: FETCH_PROFILE_INFO_SUCCESS
  };
}