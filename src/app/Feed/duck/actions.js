import {feedUrl} from '../../../services/apiUrlService';
import {getAxiosInstance} from './../../../services/axiosFactory';

export const FEED_LOADING = 'FEED_LOADING';
export const FEED_LOADED = 'FEED_LOADED';
export const FEED_ERROR = 'FEED_ERROR';

export function feedLoadingAction() {
  return {
    type: FEED_LOADING,
  };
}
export function feedLoadedAction(data) {
  return {
    type: FEED_LOADED,
    payload: data,
  };
}
export function feedErrorAction(message) {
  return {
    type: FEED_ERROR,
    payload: message,
  };
}
export default function getFeedAction() {
  return async dispatch => {
    try {
      dispatch(feedLoadingAction());
      const data = await getAxiosInstance().get(feedUrl);
      dispatch(feedLoadedAction(data.data));
    } catch (e) {
      dispatch(feedErrorAction(e.message));
    }
  };
}
