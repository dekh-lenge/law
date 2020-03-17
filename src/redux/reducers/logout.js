import { LOGOUT_SUCCESS } from "../actionTypes";
const initialState = {
  data: {},
  error: {}
};

const Logout = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return { ...state, data: { ...action.data }};
    default:
      return state;
  }
};
  
  export default Logout;
  