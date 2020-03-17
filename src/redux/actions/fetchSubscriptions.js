import { FETCH_SUBSCRIPTIONS,FETCH_SUBSCRIPTIONS_SUCCESS } from "../actionTypes";

export function fetchSubscriptions(data) {
  return {
    data,
    type: FETCH_SUBSCRIPTIONS
  };
}
export function fetchSubscriptionsSuccess(data) {
  return {
    data,
    type: FETCH_SUBSCRIPTIONS_SUCCESS
  };
}