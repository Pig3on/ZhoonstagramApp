import {REGISTER_LOADING, REGISTER_LOADED, REGISTER_ERROR} from './actions';

const initialState = {
  isLoading: true,
  isDone: false,
  isError: false,
  data: null,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false,
      };
    case REGISTER_LOADED:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isError: false,
        data: action.payload,
      };
    case REGISTER_ERROR:
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
