import {commentUrl} from '../../../services/apiUrlService';
import {getAxiosInstance} from './../../../services/axiosFactory';
import {handleError} from '../../../utils/defaultErrorHandler';

export const COMMENT_LOADING = 'COMMENT_LOADING';
export const COMMENT_LOADED = 'COMMENT_LOADED';
export const COMMENT_ERROR = 'COMMENT_ERROR';

export function commentLoadingAction() {
  return {
    type: COMMENT_LOADING,
  };
}
export function commentLoadedAction(data) {
  return {
    type: COMMENT_LOADED,
    payload: data,
  };
}
export function commentErrorAction(message) {
  return {
    type: COMMENT_ERROR,
    payload: message,
  };
}
export default function getCommentsAction(postId) {
  return async dispatch => {
    try {
      dispatch(commentLoadingAction());
      console.log(commentUrl + '/post/' + postId);
      const data = await getAxiosInstance().get(commentUrl + '/post/' + postId);
      dispatch(commentLoadedAction(data.data));
    } catch (e) {
      handleError(e.message);
      dispatch(commentErrorAction(e.message));
    }
  };
}
