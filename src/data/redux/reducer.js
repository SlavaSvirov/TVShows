const initialValue = { episodes: [], serials: [] };
const reducer = (state=initialValue, action) => {
  switch (action.type) {
    case "SET_EPISODES":
      return {
        ...state,
        episodes: action.payload
      };
    case "SET_SERIALS":
      return {
        ...state,
        serials: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
