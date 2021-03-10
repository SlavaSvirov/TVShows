const initialValue = { episodes: [], serials: [], text: '' };
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
    case "SET_TEXT":
      return {
        ...state,
        text: action.payload
      }

    default:
      return state;
  }
};

export default reducer;
