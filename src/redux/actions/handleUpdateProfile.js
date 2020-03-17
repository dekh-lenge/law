import { UPDATE_PROFILE,UPDATE_PROFILE_SUCCESS } from "../actionTypes";

export function handleUpdateProfile(data) {
  return {
    data,
    type: UPDATE_PROFILE
  };
}
export function handleUpdateProfileSuccess(data) {
  return {
    data,
    type: UPDATE_PROFILE_SUCCESS
  };
}