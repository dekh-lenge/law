import { FETCH_HOME_FEED, FETCH_HOME_FEED_SUCCESS } from "../actionTypes";

export function fetchHomeFeed(data) {
	return {
		data,
		type: FETCH_HOME_FEED
	};
}

export function fetchHomeFeedSuccess(data) {
	return {
		data,
		type: FETCH_HOME_FEED_SUCCESS
	};
}