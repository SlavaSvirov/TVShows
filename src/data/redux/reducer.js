const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_EPISODES":
      return {
        ...state,
        episodes: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
