import { SET_ACTIVE_TAB } from "../actionTypes";
  
const initialState = {
  data: {},
  error: {}
};

const SetTab = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, tabName: action.data};
    default:
      return state;
  }
};

export default SetTab;
  