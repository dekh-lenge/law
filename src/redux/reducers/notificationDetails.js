import { SET_NOTIFICATION_DETAILS } from "../actionTypes";

const initialState = {
    data: {},
    error: {}
}

const NotificationData = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFICATION_DETAILS:
            return { ...state, data: { ...action.data }};
            break;
    
        default:
            break;
    }
};

export default NotificationData;