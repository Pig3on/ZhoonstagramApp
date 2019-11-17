import {LOGIN_LOADED, LOGIN_ERROR, LOGIN_LOADING} from './actions';

const initialState = {
  isLoading: false,
  isDone: false,
  isError: false,
  data: null,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false,
      };
    case LOGIN_LOADED:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isError: false,
        data: action.payload,
      };
    case LOGIN_ERROR:
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
