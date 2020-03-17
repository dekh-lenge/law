import { UPLOAD_POST,UPLOAD_POST_SUCCESS } from "../actionTypes";

export function uploadPost(data) {
  console.log(data)
  return {
    data,
    type: UPLOAD_POST
  };
}
export function uploadPostSuccess(data) {
  return {
    data,
    type: UPLOAD_POST_SUCCESS
  };
}