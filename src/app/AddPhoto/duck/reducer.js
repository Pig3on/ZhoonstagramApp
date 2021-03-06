import {POST_LOADING, POST_LOADED, POST_ERROR} from './actions';

const initialState = {
  isLoading: false,
  isDone: false,
  isError: false,
  data: null,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false,
      };
    case POST_LOADED:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isError: false,
        data: action.payload,
      };
    case POST_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isError: true,
        message: action.payload,
      };
    default:
      return state;
  }
};
