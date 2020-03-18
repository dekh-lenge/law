import { FETCH_ACTIVITY_SUCCESS } from "../actionTypes";
  
const initialState = {
	data: {
		notificationList: [
			{	
				id: 1,
				name:'mihit',
				email:'timihit9428@gmail.com',
				mobile:'8980994455',
				timeStamp: "10th march 2019",
				description: "Home feed test description Home feed test description Home feed test description Home feed test description Home feed test description Home ",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 2,
				name:'mihit',
				email:'timihit9428@gmail.com',
				mobile:'8980994455',
				timeStamp: "13th march 2019",
				description: "Home feed test description Home feed test description",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 3,
				name:'mihit',
				email:'timihit9428@gmail.com',
				mobile:'8980994455',
				timeStamp: "13th march 2019",
				description: "Home feed test description Home feed test description",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 4,
				name:'mihit',
				email:'timihit9428@gmail.com',
				mobile:'8980994455',
				timeStamp: "14th march 2019",
				description: "Home feed test description Home feed test description",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 5,
				name:'mihit',
				email:'timihit9428@gmail.com',
				mobile:'8980994455',
				timeStamp: "15th march 2019",
				description: "Home feed test description Home feed test description",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 6,
				name:'mihit',
				email:'timihit9428@gmail.com',
				mobile:'8980994455',
				timeStamp: "14th march 2019",
				description: "Home feed test description Home feed test description",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 7,
				name:'mihit',
				email:'timihit9428@gmail.com',
				mobile:'8980994455',
				timeStamp: "15th march 2019",
				description: "Home feed test description Home feed test description",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 8,
				name:'mihit',
				email:'timihit9428@gmail.com',
				mobile:'8980994455',
				timeStamp: "14th march 2019",
				description: "Home feed test description Home feed test description",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			},
			{	
				id: 9,
				name:'mihit',
				email:'timihit9428@gmail.com',
				mobile:'8980994455',
				timeStamp: "15th march 2019",
				description: "Home feed test description Home feed test description",
				image: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
			}
		]
	},
	error: {}
};

const Notifications = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ACTIVITY_SUCCESS:
			return { ...state, data: { ...action.data }};
		default:
			return state;
	}
};
  
export default Notifications;
  