const initialState = {
  isLoading: false,
  isDone: false,
  isError: false,
  data: null,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
