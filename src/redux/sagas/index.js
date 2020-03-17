
import { all } from "redux-saga/effects";
import fetchHomeFeed from "./fetchHomeFeed";
import fetchProfileInfo from "./fetchProfileInfo";
import uploadPost from "./uploadPost";
import loginAction from './login'
import logoutAction from './logout'
import signupAction from './signUp'
import fetchNotifications from './fetchNotifications'
import updateProfile from './updateProfile'

export default function* root() {
	yield all([
		fetchHomeFeed(),
		fetchProfileInfo(),
		uploadPost(),
		signupAction(),
		loginAction(),
		logoutAction(),
		fetchNotifications(),
		updateProfile(),
	]);
}
