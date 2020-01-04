import {fileUrl, feedUrl} from '../../../services/apiUrlService';
import {getAxiosInstance} from './../../../services/axiosFactory';
import {navigateBack} from '../../../navigation/actions';
import getFeedAction from '../../Feed/duck/actions';
import {handleError} from '../../../utils/defaultErrorHandler';

export const POST_LOADING = 'POST_LOADING';
export const POST_LOADED = 'POST_LOADED';
export const POST_ERROR = 'POST_ERROR';

export function postLoadingAction() {
  return {
    type: POST_LOADING,
  };
}
export function postLoadedAction(data) {
  return {
    type: POST_LOADED,
    payload: data,
  };
}
export function postErrorAction(message) {
  return {
    type: POST_ERROR,
    payload: message,
  };
}
export default function uploadImageAction(post, image) {
  return async dispatch => {
    dispatch(postLoadingAction());
    const formData = new FormData();
    formData.append('file', {
      uri: image,
      type: 'image/png',
      name: new Date().getTime().toString() + '.png',
    });
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    try {
      const f = await getAxiosInstance().post(fileUrl, formData, config);
      const postToCreate = {
        ...post,
        picture: f.data.fileName,
      };
      const addedPost = await getAxiosInstance().post(feedUrl, postToCreate);
      dispatch(postLoadedAction(addedPost));
      dispatch(getFeedAction());
      navigateBack();
    } catch (e) {
      console.log("a fakin error")
      handleError(e.message);
      dispatch(postErrorAction(e.message));
    }
  };
}
