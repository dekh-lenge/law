import { SET_NOTIFICATION_DETAILS } from "../actionTypes";

export function setNotificationData(data) {
    return {
        data,
        type: SET_NOTIFICATION_DETAILS
    };
}