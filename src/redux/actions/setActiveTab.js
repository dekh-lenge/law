import { SET_ACTIVE_TAB } from "../actionTypes";

export function setTabName(data) {
  return {
    data,
    type: SET_ACTIVE_TAB
  };
}