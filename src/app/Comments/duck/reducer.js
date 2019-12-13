import {COMMENT_ERROR, COMMENT_LOADED, COMMENT_LOADING} from './actions';

const initialState = {
  isLoading: true,
  isDone: false,
  isError: false,
  data: null,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_LOADING:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false,
      };
    case COMMENT_LOADED:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isError: false,
        data: action.payload,
      };
    case COMMENT_ERROR:
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
