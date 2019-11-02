import {FEED_ERROR, FEED_LOADED, FEED_LOADING} from './actions';

const initialState = {
  isLoading: true,
  isDone: false,
  isError: false,
  data: null,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FEED_LOADING:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false,
      };
    case FEED_LOADED:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isError: false,
        data: action.payload,
      };
    case FEED_ERROR:
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
