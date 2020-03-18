
import { FETCH_HOME_FEED_SUCCESS } from "../actionTypes";
  
const initialState = {
	data: {
		feedList: [
			{	
				id: 1,
				time: "10th march 2019",
				description: "Home feed test description",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 2,
				time: "13th march 2019",
				description: "Home feed test description 2",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 3,
				time: "13th march 2019",
				description: "Home feed test description 3",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 4,
				time: "14th march 2019",
				description: "Home feed test description 4",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 5,
				time: "15th march 2019",
				description: "Home feed test description 5",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			}
		]
	},
	error: {}
};

const HomeFeed = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_HOME_FEED_SUCCESS:
			return { ...state, data: { ...action.data }};
		default:
			return state;
	}
};
  
export default HomeFeed;
  