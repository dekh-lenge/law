import { combineReducers } from 'redux';

// REDUX - REDUCERS
import home from './home';
import profile from './profile';
import loader from './loader';
import upload from './upload';
import login from './login';
import setTab from './setTab';
import notifications from './notifications';
import updateProfile from './updateProfile';
import logout from './logout';
import subscriptions from './subscriptions';

const rootReducer = combineReducers({
	loader,
	home,
	profile,
	upload,
	login,
	setTab,
	notifications,
	updateProfile,
	logout,
	subscriptions
});
export default rootReducer;
